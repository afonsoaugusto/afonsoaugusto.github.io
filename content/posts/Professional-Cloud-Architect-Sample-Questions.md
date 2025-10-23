---
title: "Professional Cloud Architect Sample Questions"
date: 2025-10-23 12:00:00 +0000
categories: ["article"]
draft: false
---

## Link [Professional Cloud Architect Sample Questions](https://docs.google.com/forms/d/e/1FAIpQLSf54f7FbtSJcXUY6-DUHfBG31jZ3pujgb8-a5io_9biJsNpqg/formResponse){:target="_blank"}

Aqui está uma análise detalhada do seu desempenho, juntamente com recomendações de materiais de estudo para fortalecer seus conhecimentos.

### Análise Percentual de Acertos e Erros

Com base nas suas respostas, o seu desempenho foi o seguinte:

*   **Total de Questões:** 19
*   **Respostas Corretas (c):** 11
*   **Respostas Erradas (e):** 8

Isso resulta nos seguintes percentuais:

*   **Percentual de Acertos: 57.89%**
*   **Percentual de Erros: 42.11%**

### Análise por Tópicos e Recomendações de Estudo

Vamos analisar as questões que você errou para identificar as áreas que precisam de mais atenção.

**Questão 3 (Errada): Segurança e Controle de Dados**
*   **Tópico:** Prevenção de exfiltração de dados no Cloud Storage.
*   **Resposta Correta:** Habilitar o VPC Service Controls e criar um perímetro de serviço.
*   **Por que a resposta correta é a melhor opção:** O VPC Service Controls é a ferramenta projetada especificamente para evitar que dados de serviços gerenciados pelo Google (como o Cloud Storage) saiam de um perímetro virtual definido, mitigando o risco de exfiltração de dados. As outras opções, como criptografia, IAM e ACLs, são importantes para a segurança, mas não impedem a movimentação dos dados para fora da região geográfica especificada.
*   **Onde se fortalecer:**
    *   **VPC Service Controls:** Entenda profundamente o conceito de perímetros de serviço, níveis de acesso e como ele se integra com outros serviços do GCP para proteger dados sensíveis.
    *   **Estudo recomendado:** [Visão geral do VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/overview).

**Questão 5 (Errada): Análise e Conformidade de Dados**
*   **Tópico:** Geração de relatórios anonimizados e exclusão de PII (Informações de Identificação Pessoal) com custo mínimo.
*   **Resposta Correta:** Arquivar logs de auditoria no BigQuery e gerar relatórios com o Google Data Studio.
*   **Por que a resposta correta é a melhor opção:** O BigQuery é uma solução de baixo custo para armazenamento de longo prazo e, crucialmente, permite a execução de consultas SQL complexas para analisar os dados e gerar relatórios. O Cloud Storage, por outro lado, é um armazenamento de objetos e não possui capacidade nativa de consulta para gerar relatórios detalhados.
*   **Onde se fortalecer:**
    *   **BigQuery:** Estude seus casos de uso para análise de dados, custos de armazenamento e consulta.
    *   **Cloud Logging e Sinks:** Entenda como exportar logs para diferentes destinos (como BigQuery, Cloud Storage, Pub/Sub) para diversos propósitos (auditoria, análise, arquivamento).
    *   **Estudo recomendado:** [Exportando dados de faturamento para o BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery), [Visão geral do BigQuery](https://cloud.google.com/bigquery/docs/introduction).

**Questão 6 (Errada): Boas Práticas de Segurança em Contêineres**
*   **Tópico:** Verificação de melhores práticas de segurança recomendadas pelo Google para GKE.
*   **Resposta Correta:** Garantir que não está executando contêineres privilegiados e que está usando os mecanismos de logging nativos.
*   **Por que a resposta correta é a melhor opção:** Executar contêineres com privilégios (`privileged: true`) é uma das maiores vulnerabilidades de segurança em ambientes de contêineres, pois concede ao contêiner acesso quase irrestrito ao host. Utilizar os mecanismos de logging nativos é fundamental para monitoramento e auditoria de segurança.
*   **Onde se fortalecer:**
    *   **Segurança no Google Kubernetes Engine (GKE):** Foque em tópicos como RBAC (Role-Based Access Control), políticas de rede, hardening de nós e segurança de contêineres.
    *   **Estudo recomendado:** [Práticas recomendadas para operar contêineres](https://cloud.google.com/solutions/best-practices-for-operating-containers).

**Questão 8 (Errada): Definição de SLOs (Service Level Objectives)**
*   **Tópico:** Projetar SLOs significativos para uma aplicação.
*   **Resposta Correta:** Definir um SLO como "99% das requisições HTTP retornam o código de status 2xx" e outro como "99% das requisições retornam em menos de 100 ms".
*   **Por que a resposta correta é a melhor opção:** SLOs eficazes precisam ser mensuráveis e diretamente relacionados à experiência do usuário. As opções corretas definem claramente o indicador (taxa de sucesso de requisições e latência) e o objetivo (99% e 99% abaixo de 100ms). Falar apenas em "disponibilidade do servidor" ou "tempo de atividade total" é muito vago.
*   **Onde se fortalecer:**
    *   **SRE (Site Reliability Engineering):** Estude os conceitos de SLI (Service Level Indicator), SLO (Service Level Objective) e SLA (Service Level Agreement). Entenda como definir e medir esses indicadores para suas aplicações.
    *   **Estudo recomendado:** [O Manual de SRE - Implementando SLOs](https://sre.google/workbook/implementing-slos/).

**Questão 13 (Errada): Arquivamento de Dados e Análise Serverless**
*   **Tópico:** Arquivar grande volume de dados (100 TB) para recuperação de desastres a longo prazo e permitir análises serverless.
*   **Resposta Correta:** Fazer upload dos arquivos de log para o Cloud Storage e carregar os logs no BigQuery.
*   **Por que a resposta correta é a melhor opção:** Esta abordagem atende aos dois requisitos:
    1.  **Cloud Storage (classes Coldline ou Archive):** É a solução mais econômica para arquivamento de dados a longo prazo e recuperação de desastres.
    2.  **BigQuery:** É a plataforma serverless ideal para análise de grandes volumes de dados.
*   **Onde se fortalecer:**
    *   **Classes de Armazenamento do Cloud Storage:** Entenda as diferenças de custo e caso de uso entre Standard, Nearline, Coldline e Archive.
    *   **Padrões de Arquitetura de Dados:** Compreenda quando usar cada ferramenta de dados do GCP (Cloud SQL, Bigtable, BigQuery, Cloud Storage) com base nos requisitos de volume, latência e tipo de análise.
    *   **Estudo recomendado:** [Classes de armazenamento do Cloud Storage](https://cloud.google.com/storage/docs/storage-classes), [Comparando opções de armazenamento](https://cloud.google.com/products/storage).

**Questão 14 (Errada): Solução de Problemas de Load Balancer e Instance Groups**
*   **Tópico:** Instâncias de um Managed Instance Group (MIG) estão sendo terminadas e recriadas constantemente por um HTTP(S) Load Balancer.
*   **Resposta Correta:** Garantir que existe uma regra de firewall para permitir que as verificações de integridade (health checks) do Load Balancer alcancem as instâncias no grupo.
*   **Por que a resposta correta é a melhor opção:** O comportamento descrito (ciclo de terminação e recriação) é um sintoma clássico de falha nas verificações de integridade. Se o Load Balancer não consegue alcançar as instâncias para verificar se estão "saudáveis", ele as remove do pool e o autoscaler cria novas para substituí-las.
*   **Onde se fortalecer:**
    *   **HTTP(S) Load Balancing:** Estude todos os seus componentes: regras de encaminhamento, proxies de destino, mapas de URL, serviços de backend e verificações de integridade.
    *   **Firewall do VPC:** Entenda como as regras de firewall funcionam, especialmente como permitir tráfego de intervalos de IP específicos do Google, que são usados para health checks.
    *   **Estudo recomendado:** [Conceitos de verificação de integridade](https://cloud.google.com/load-balancing/docs/health-check-concepts), [Visão geral do balanceamento de carga de aplicativo externo](https://cloud.google.com/load-balancing/docs/https).

**Questão 15 (Errada): Configuração de Rede e Segurança para Aplicação de 3 Camadas**
*   **Tópico:** Configurar o fluxo de tráfego de rede (Web -> API -> Banco de Dados) e impedir o fluxo direto (Web -> Banco de Dados).
*   **Resposta Correta:** Adicionar tags a cada camada e configurar regras de firewall para permitir o fluxo de tráfego desejado.
*   **Por que a resposta correta é a melhor opção:** O uso de tags de rede em conjunto com regras de firewall é a maneira mais escalável e eficiente de gerenciar o tráfego entre grupos de instâncias no GCP. Você pode criar regras como "Permitir tráfego da tag 'web-server' para a tag 'api-server'" e "Negar todo o resto", garantindo a segmentação correta.
*   **Onde se fortalecer:**
    *   **Tags de Rede e Contas de Serviço:** Entenda a diferença e quando usar cada um como origem (source) e destino (target) em regras de firewall.
    *   **Regras de Firewall do VPC:** Pratique a criação de regras de firewall baseadas em tags para implementar arquiteturas de segurança comuns.
    *   **Estudo recomendado:** [Usando tags de rede](https://cloud.google.com/vpc/docs/add-remove-network-tags).

**Questão 19 (Errada): Otimização de Performance de Banco de Dados no Compute Engine**
*   **Tópico:** Melhorar o desempenho de um banco de dados MySQL em uma VM sem reiniciá-la.
*   **Resposta Correta:** Redimensionar dinamicamente o disco persistente SSD para 500 GB.
*   **Por que a resposta correta é a melhor opção:** O desempenho (IOPS e throughput) de um disco persistente no GCP está diretamente ligado ao seu tamanho. Aumentar o tamanho do disco é uma das poucas operações que melhora significativamente o desempenho de I/O e que pode ser feita sem reiniciar a máquina virtual.
*   **Onde se fortalecer:**
    *   **Desempenho de Persistent Disks:** Memorize a relação entre o tamanho do disco (SSD e HDD), o número de vCPUs e o desempenho máximo de IOPS/throughput.
    *   **Operações no Compute Engine:** Saiba quais operações (como redimensionar disco, adicionar disco) podem ser feitas com a VM em execução e quais exigem uma parada (como alterar o tipo de máquina ou aumentar a memória).
    *   **Estudo recomendado:** [Configurar discos para atender aos requisitos de desempenho](https://cloud.google.com/compute/docs/disks/performance).

### Resumo e Próximos Passos

Seu desempenho mostra uma base sólida, mas há lacunas importantes em áreas-chave para um Arquiteto Cloud, especialmente em **Segurança de Rede (VPC Service Controls, Firewall), Operações (SLOs, Troubleshooting de Load Balancer) e Arquitetura de Dados (BigQuery vs. Cloud Storage)**.

1.  **Foco em Segurança:** Dedique um tempo extra para entender profundamente o VPC, regras de firewall, tags de rede e, principalmente, o VPC Service Controls. Segurança é um dos domínios mais importantes da prova.
2.  **Prática com SRE e Operações:** Revise os conceitos de SRE e pratique a solução de problemas comuns, como os relacionados a load balancers e autoscaling.
3.  **Domine os Serviços de Dados:** Crie uma matriz mental para decidir quando usar cada serviço de armazenamento e banco de dados do GCP. Entenda os trade-offs entre custo, performance e funcionalidades.
4.  **Faça Mais Simulados:** Continue fazendo simulados para se acostumar com o formato das perguntas e para identificar outras áreas de melhoria.
