---
title: "Anotações para a certificação GCP PCA: Gerenciamento de Clusters Multi-tenant no GKE"
date: 2025-11-5 12:00:00 +0000
categories: ["article"]
draft: false
---

Este artigo apresenta conceitos e práticas essenciais para o gerenciamento de clusters GKE multi-tenant, baseado no lab [Managing a GKE Multi-tenant Cluster with Namespaces](https://www.skills.google/paths/125/course_templates/655/labs/598636). Abordamos IAM roles, RBAC, Resource Quotas e GKE Usage Metering, fundamentais para a certificação GCP Professional Cloud Architect (PCA).

## Índice

1. [GKE IAM Roles](#gke-iam-roles)
2. [RBAC no Kubernetes](#rbac-no-kubernetes)
3. [Resource Quotas](#resource-quotas)
4. [GKE Usage Metering](#gke-usage-metering)
5. [Exemplos Práticos](#exemplos-práticos)

## GKE IAM Roles

Os IAM roles do GKE controlam o acesso ao nível do GCP, permitindo ou negando acesso aos clusters e seus recursos. Abaixo estão os principais roles disponíveis:

| Role | Descrição |
|------|-----------|
| **Kubernetes Engine Admin** (`roles/container.admin`) | Fornece acesso completo ao gerenciamento de clusters e seus objetos da API do Kubernetes. Um usuário com este role pode criar, editar e deletar qualquer recurso em qualquer cluster e namespaces subsequentes. |
| **Kubernetes Engine Developer** (`roles/container.developer`) | Fornece acesso aos objetos da API do Kubernetes dentro dos clusters. Um usuário com este role pode criar, editar e deletar recursos em qualquer cluster e namespaces subsequentes. |
| **Kubernetes Engine Cluster Admin** (`roles/container.clusterAdmin`) | Fornece acesso ao gerenciamento de clusters. Um usuário com este role não terá acesso para criar ou editar recursos dentro de qualquer cluster ou namespaces diretamente, mas poderá criar, modificar e deletar qualquer cluster. |
| **Kubernetes Engine Viewer** (`roles/container.viewer`) | Acesso somente leitura aos recursos do GKE. Um usuário com este role terá acesso somente leitura a namespaces e seus recursos. |
| **Kubernetes Engine Cluster Viewer** (`roles/container.clusterViewer`) | Acesso de get e list aos clusters GKE. Este é o role mínimo necessário para qualquer pessoa que precise acessar recursos dentro dos namespaces de um cluster. |

### Associando IAM Roles a Service Accounts

Para associar um role IAM a uma service account no GCP (a nível de projeto):

```bash
gcloud projects add-iam-policy-binding ${GOOGLE_CLOUD_PROJECT} \
  --member=serviceAccount:team-a-dev@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com \
  --role=roles/container.clusterViewer
```

**Nota**: O role `container.clusterViewer` é necessário para que a service account possa acessar o cluster. Sem ele, mesmo com RBAC configurado, a service account não conseguirá se autenticar no cluster.

## RBAC no Kubernetes

O RBAC (Role-Based Access Control) no Kubernetes controla o acesso aos recursos dentro do cluster. É importante entender a diferença:

- **IAM Roles**: Controlam acesso ao nível do GCP (quem pode acessar o cluster)
- **RBAC**: Controla o que pode ser feito dentro do cluster (quais operações são permitidas)

### Criando Roles

#### Via kubectl

```bash
kubectl create role pod-reader \
  --resource=pods \
  --verb=watch \
  --verb=get \
  --verb=list
```

#### Via YAML

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: team-a
  name: developer
rules:
- apiGroups: [""]
  resources: ["pods", "services", "serviceaccounts"]
  verbs: ["update", "create", "delete", "get", "watch", "list"]
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["update", "create", "delete", "get", "watch", "list"]
```

### Criando RoleBindings

Um RoleBinding associa uma Role a um usuário, grupo ou service account:

```bash
kubectl create rolebinding team-a-developers \
  --role=developer \
  --user=team-a-dev@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com \
  -n team-a
```

Ou usando dry-run para revisar antes de aplicar:

```bash
kubectl create rolebinding team-a-developers \
  --role=developer \
  --user=team-a-dev@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com \
  -n team-a \
  --dry-run=client -o yaml | kubectl apply -f-
```

### Autenticação com Service Account

Para usar uma service account para autenticação:

1. **Criar a chave da service account**:

```bash
gcloud iam service-accounts keys create /tmp/key.json \
  --iam-account=team-a-dev@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com
```

2. **Ativar a service account**:

```bash
gcloud auth activate-service-account --key-file=/tmp/key.json
```

3. **Obter credenciais do cluster**:

```bash
export ZONE=us-central1-f
gcloud container clusters get-credentials multi-tenant-cluster \
  --zone ${ZONE} \
  --project ${GOOGLE_CLOUD_PROJECT}
```

## Resource Quotas

Resource Quotas permitem limitar o uso de recursos em um namespace, controlando:
- Quantidade de recursos computacionais (CPU, memória)
- Quantidade de objetos (pods, services, etc.)
- Tipos específicos de recursos (LoadBalancers, PersistentVolumes, etc.)

### Exemplo: Quota Simples

```bash
kubectl create quota test-quota \
  --hard=count/pods=2,count/services.loadbalancers=1 \
  --namespace=team-a
```

**Exemplo de uso**:

```bash
# Criar pod 1 - sucesso
kubectl run app-server-1 --image=quay.io/centos/centos:9 \
  --namespace=team-a -- sleep infinity

# Criar pod 2 - sucesso
kubectl run app-server-2 --image=quay.io/centos/centos:9 \
  --namespace=team-a -- sleep infinity

# Criar pod 3 - falha (quota excedida)
kubectl run app-server-3 --image=quay.io/centos/centos:9 \
  --namespace=team-a -- sleep infinity
# Error: pods "app-server-3" is forbidden: exceeded quota: test-quota, 
# requested: count/pods=1, used: count/pods=2, limited: count/pods=2
```

**Verificar quota**:

```bash
kubectl describe quota test-quota --namespace=team-a
```

Saída esperada:

```
Name:                         test-quota
Namespace:                    team-a
Resource                      Used  Hard
--------                      ----  ----
count/pods                    2     2
count/services.loadbalancers  0     1
```

### Exemplo: Quota de CPU e Memória

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: cpu-mem-quota
  namespace: team-a
spec:
  hard:
    limits.cpu: "4"
    limits.memory: "12Gi"
    requests.cpu: "2"
    requests.memory: "8Gi"
```

Esta quota limita:
- **Requests**: CPU mínimo total de 2 cores, memória mínima de 8Gi
- **Limits**: CPU máximo total de 4 cores, memória máxima de 12Gi

**Importante**: Todos os pods no namespace devem ter `requests` e `limits` definidos quando uma ResourceQuota com limites de CPU/memória está ativa.

## GKE Usage Metering

O GKE Usage Metering permite rastrear o uso de recursos (CPU e memória) por namespace, pod e labels, exportando os dados para o BigQuery. Isso é essencial para:

- **Chargeback**: Alocar custos por time/namespace
- **Otimização**: Identificar namespaces com uso excessivo
- **Planejamento**: Prever necessidades futuras de recursos

### Habilitando Usage Metering

```bash
export ZONE=us-central1-f
gcloud container clusters update multi-tenant-cluster \
  --zone ${ZONE} \
  --resource-usage-bigquery-dataset cluster_dataset
```

**Pré-requisitos**:
- O dataset do BigQuery deve existir antes de habilitar o usage metering
- A service account do GKE precisa de permissões no BigQuery

### Criando a Tabela de Cost Breakdown

O GKE Usage Metering cria duas tabelas no BigQuery:
- `gke_cluster_resource_usage`: Baseado em requests (recursos solicitados)
- `gke_cluster_resource_consumption`: Baseado em consumo real

Para criar uma tabela de cost breakdown que combine dados de billing com usage metering, siga a [documentação oficial](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering?hl=pt-br#create_the_cost_breakdown_table).

**Configuração de variáveis**:

```bash
export GCP_BILLING_EXPORT_TABLE_FULL_PATH=${GOOGLE_CLOUD_PROJECT}.billing_dataset.gcp_billing_export_v1_xxxx
export USAGE_METERING_DATASET_ID=cluster_dataset
export COST_BREAKDOWN_TABLE_ID=usage_metering_cost_breakdown
export USAGE_METERING_QUERY_TEMPLATE=~/gke-qwiklab/usage_metering_query_template.sql
export USAGE_METERING_QUERY=cost_breakdown_query.sql
export USAGE_METERING_START_DATE=2020-10-26
```

**Substituir variáveis no template**:

```bash
sed \
  -e "s/\${fullGCPBillingExportTableID}/$GCP_BILLING_EXPORT_TABLE_FULL_PATH/" \
  -e "s/\${projectID}/$GOOGLE_CLOUD_PROJECT/" \
  -e "s/\${datasetID}/$USAGE_METERING_DATASET_ID/" \
  -e "s/\${startDate}/$USAGE_METERING_START_DATE/" \
  "$USAGE_METERING_QUERY_TEMPLATE" \
  > "$USAGE_METERING_QUERY"
```

**Criar scheduled query no BigQuery**:

```bash
bq query \
  --project_id=$GOOGLE_CLOUD_PROJECT \
  --use_legacy_sql=false \
  --destination_table=$USAGE_METERING_DATASET_ID.$COST_BREAKDOWN_TABLE_ID \
  --schedule='every 24 hours' \
  --display_name="GKE Usage Metering Cost Breakdown Scheduled Query" \
  --replace=true \
  "$(cat $USAGE_METERING_QUERY)"
```

## Exemplos Práticos

### Exemplo 1: Pod com Resource Requests e Limits

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: cpu-mem-demo
spec:
  containers:
  - name: cpu-mem-demo-ctr
    image: nginx
    resources:
      requests:
        cpu: "100m"
        memory: "128Mi"
      limits: 
        cpu: "400m"
        memory: "512Mi"
```

**Explicação**:
- **Requests**: Garantem que o pod receberá pelo menos 100m de CPU e 128Mi de memória
- **Limits**: Impedem que o pod use mais que 400m de CPU e 512Mi de memória

### Exemplo 2: ResourceQuota Completa

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: cpu-mem-quota
  namespace: team-a
spec:
  hard:
    limits.cpu: "4"
    limits.memory: "12Gi"
    requests.cpu: "2"
    requests.memory: "8Gi"
```

### Exemplo 3: Role de Desenvolvedor

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: team-a
  name: developer
rules:
- apiGroups: [""]
  resources: ["pods", "services", "serviceaccounts"]
  verbs: ["update", "create", "delete", "get", "watch", "list"]
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["update", "create", "delete", "get", "watch", "list"]
```

### Exemplo 4: Quota por Contagem

```yaml
apiVersion: v1
kind: ResourceQuota
metadata: 
  name: test-quota
  namespace: team-a
spec:
  hard:
    count/pods: "2"
    count/services.loadbalancers: "1"
```

## Best Practices

1. **Princípio do Menor Privilégio**: Sempre conceda apenas as permissões necessárias
2. **Separação de Responsabilidades**: Use namespaces para isolar times/projetos
3. **Resource Quotas**: Defina quotas desde o início para evitar uso excessivo
4. **Monitoramento**: Habilite Usage Metering para rastrear custos e uso
5. **IAM + RBAC**: Combine IAM roles (nível GCP) com RBAC (nível Kubernetes) para segurança em camadas
6. **Service Accounts**: Use service accounts específicas para cada time/aplicação
7. **Documentação**: Documente todas as permissões e quotas configuradas

## Conclusão

O gerenciamento eficiente de clusters GKE multi-tenant requer uma compreensão sólida de:
- **IAM Roles** para controle de acesso ao nível do GCP
- **RBAC** para controle de acesso dentro do Kubernetes
- **Resource Quotas** para limitar uso de recursos
- **Usage Metering** para rastreamento de custos e otimização

Esses conceitos são fundamentais não apenas para a certificação GCP PCA, mas também para a operação prática de clusters GKE em ambientes de produção.

## Referências

- [Managing a GKE Multi-tenant Cluster with Namespaces](https://www.skills.google/paths/125/course_templates/655/labs/598636)
- [GKE Usage Metering Documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering)
- [GKE IAM Roles](https://cloud.google.com/kubernetes-engine/docs/how-to/iam)
- [Kubernetes RBAC Authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)
