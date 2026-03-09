---
title: "Arquitetura de Nuvem e Gerenciamento de Identidade no Google Cloud"
date: 2025-11-06 00:00:00 +0000
categories: ["article"]
description: "Guia de estudo sobre arquitetura de nuvem, IAM, políticas e identidade no Google Cloud com questionário e gabarito."
tags: ["google-cloud", "iam", "cloud-identity", "certificação", "gcp"]
draft: false
---

# Guia de Estudo: Arquitetura de Nuvem e Gerenciamento de Identidade no Google Cloud

Este guia foi projetado para revisar e aprofundar a compreensão dos conceitos fundamentais de planejamento de soluções em nuvem, migração, gerenciamento de identidade e acesso (IAM), políticas organizacionais e contas de serviço no Google Cloud.

## Questionário de Resposta Curta

Responda às seguintes perguntas com 2 a 3 frases cada, baseando-se estritamente no contexto fornecido.

1. Qual é a função principal do **Cloud Identity** no ecossistema do Google Cloud e como ele se diferencia do **IAM**?
2. Descreva a diferença fundamental entre **Papéis Básicos** e **Papéis Predefinidos** no IAM do Google Cloud.
3. O que são **Políticas da Organização** e como elas se diferem das **Políticas do IAM**?
4. Explique o que é uma **conta de serviço** (Service Account) e cite um caso de uso típico.
5. Qual é o risco de segurança associado às chaves de contas de serviço e qual solução é recomendada para mitigar esse risco?
6. Descreva o tipo de migração **"Rehost"** (Lift and Shift) e em que cenário ele é ideal.
7. O que é a **Federação de Identidade da Força de Trabalho** (Workforce Identity Federation) e qual problema ela resolve?
8. Qual é o propósito da restrição de política da organização `gcp.resourceLocations`?
9. Como as **Políticas de Negação** (Deny Policies) do IAM funcionam e qual é a sua relação com as **Políticas de Permissão** (Allow Policies)?
10. Qual é a principal função do **Google Cloud Directory Sync (GCDS)** na federação do Active Directory com o Google Cloud?

## Gabarito do Questionário

### 1. Qual é a função principal do Cloud Identity no ecossistema do Google Cloud e como ele se diferencia do IAM?

O **Cloud Identity** é uma solução de Identidade como Serviço (IDaaS) que gerencia centralmente os usuários e grupos que podem acessar os recursos do Google Cloud e do Google Workspace. Ele é responsável pelo ciclo de vida das contas de usuário/grupo e pelas configurações de segurança da organização, enquanto o **IAM** é focado em "quem pode fazer o quê em qual recurso", autorizando o acesso aos recursos do Google Cloud com base em permissões. O IAM não cria ou gerencia usuários; ele utiliza as identidades gerenciadas pelo Cloud Identity.

### 2. Descreva a diferença fundamental entre Papéis Básicos e Papéis Predefinidos no IAM do Google Cloud.

Os **Papéis Básicos** (Proprietário, Editor, Leitor) oferecem níveis de acesso fixos e de granularidade grossa que se aplicam a todos os serviços do Google Cloud em um projeto. Em contraste, os **Papéis Predefinidos** oferecem permissões mais detalhadas e se aplicam a um serviço específico do Google Cloud dentro de um projeto, permitindo um controle de acesso mais granular.

### 3. O que são Políticas da Organização e como elas se diferem das Políticas do IAM?

As **Políticas da Organização** são configurações de restrições que definem como os recursos podem ser configurados, focando no "o quê". Elas permitem limitar o compartilhamento de recursos, o uso de contas de serviço ou as localizações físicas de novos recursos. As **Políticas do IAM**, por outro lado, focam no "quem", autorizando quais principais (usuários, grupos) podem realizar ações em recursos específicos com base em permissões.

### 4. Explique o que é uma conta de serviço (Service Account) e cite um caso de uso típico.

Uma **conta de serviço** é um tipo especial de conta usada por uma aplicação ou carga de trabalho de computação, em vez de uma pessoa, para realizar chamadas de API autorizadas. Um caso de uso típico é executar cargas de trabalho em máquinas virtuais (VMs); uma conta de serviço com permissões para consultar o BigQuery pode ser anexada a uma VM, permitindo que uma aplicação nessa VM envie comandos SQL para o BigQuery.

### 5. Qual é o risco de segurança associado às chaves de contas de serviço e qual solução é recomendada para mitigar esse risco?

As chaves de contas de serviço representam um risco de segurança significativo porque são credenciais de longa duração, semelhantes a uma senha sem data de expiração, que podem ser vazadas acidentalmente e usadas por invasores para acessar recursos sensíveis. A solução recomendada é abandonar o uso de chaves e utilizar a **Workload Identity Federation**, que permite acesso sem chave (keyless) e auditável aos recursos do GCP.

### 6. Descreva o tipo de migração "Rehost" (Lift and Shift) e em que cenário ele é ideal.

Uma migração **"Rehost"** envolve mover cargas de trabalho de um ambiente de origem para um ambiente de destino com modificações mínimas ou nenhuma. Este tipo de migração é ideal quando uma carga de trabalho pode operar como está no ambiente de destino, quando há pouca necessidade de negócio para mudança, ou quando é difícil ou impossível modificar o código-fonte da carga de trabalho.

### 7. O que é a Federação de Identidade da Força de Trabalho (Workforce Identity Federation) e qual problema ela resolve?

A **Federação de Identidade da Força de Trabalho** permite que usuários de um provedor de identidade (IdP) externo, como funcionários e parceiros, acessem os recursos do Google Cloud usando single sign-on (SSO). Ela resolve o problema de gerenciamento de identidades duplicadas, eliminando a necessidade de sincronizar contas de usuário do IdP para o Google Cloud, pois federa as identidades diretamente.

### 8. Qual é o propósito da restrição de política da organização gcp.resourceLocations?

A restrição `gcp.resourceLocations` permite limitar as localizações geográficas onde novos recursos para serviços suportados podem ser criados dentro de uma hierarquia de organização, pasta ou projeto. Isso ajuda as organizações a cumprir requisitos de residência de dados e a controlar a dispersão física de seus recursos na nuvem. A restrição se aplica apenas a recursos recém-criados.

### 9. Como as Políticas de Negação (Deny Policies) do IAM funcionam e qual é a sua relação com as Políticas de Permissão (Allow Policies)?

As **Políticas de Negação** estabelecem "guardrails" que impedem certos principais de usar permissões específicas, independentemente dos papéis que lhes foram concedidos. O IAM sempre verifica as políticas de negação relevantes antes de verificar as políticas de permissão; portanto, uma negação sempre se sobrepõe a uma permissão. Elas são herdadas através da hierarquia de recursos, assim como as políticas de permissão.

### 10. Qual é a principal função do Google Cloud Directory Sync (GCDS) na federação do Active Directory com o Google Cloud?

O **Google Cloud Directory Sync (GCDS)** é uma ferramenta gratuita que implementa o processo de sincronização de usuários e grupos do Active Directory para o Cloud Identity ou Google Workspace. Ele garante que as identidades existam no Google Cloud antes do primeiro login do usuário e que as exclusões de usuários sejam propagadas, automatizando a manutenção das identidades do Google e vinculando seu ciclo de vida aos usuários existentes no Active Directory.

## Questões para Redação

Responda às seguintes questões em formato de redação, sintetizando informações de múltiplas áreas do contexto fornecido.

1. Descreva um plano abrangente para uma instituição financeira migrar suas cargas de trabalho locais para o Google Cloud. Discuta as considerações críticas em cada fase da jornada de migração (**Avaliar, Planejar, Implantar, Otimizar**), incluindo requisitos de alta disponibilidade, segurança de dados sensíveis e conformidade regulatória.

2. Compare e contraste a abordagem do Google Cloud e da AWS para o Gerenciamento de Identidade e Acesso (IAM). Explique as diferenças nos modelos de permissão, hierarquia, o significado de "Papel" e "Política" em cada plataforma, e como a autenticação de serviço para serviço é tratada.

3. Elabore uma estratégia de segurança em camadas para uma organização no Google Cloud. A estratégia deve integrar o uso de **Políticas da Organização** (para restrições de configuração), **Políticas do IAM** (incluindo papéis personalizados e políticas de negação) e melhores práticas para contas de serviço (incluindo a eliminação de chaves) para impor o princípio do menor privilégio.

4. Uma empresa deseja manter seu Active Directory local como a fonte autoritativa para gerenciamento de identidades enquanto adota o Google Cloud. Detalhe o processo de configuração da federação, explicando o papel do **GCDS** para provisionamento de usuários, do **AD FS** para single sign-on (SSO), e as diferentes abordagens para mapear florestas, domínios, usuários e grupos do AD para o Cloud Identity.

5. Explique o conceito de **herança de políticas** no Google Cloud, tanto para Políticas de Permissão (Allow Policies) quanto para Políticas da Organização. Descreva como a estrutura hierárquica (**Organização > Pastas > Projetos > Recursos**) impacta a aplicação de permissões e restrições, e como as políticas em níveis mais baixos podem interagir ou sobrescrever as de níveis mais altos.

## Glossário de Termos-Chave

| Termo | Definição |
|-------|-----------|
| **Admin SDK Directory API** | Uma API que permite provisionar um grande número de usuários com dados de um diretório LDAP existente, como o Microsoft Active Directory. Requer programação. |
| **Allow Policy (Política de Permissão)** | Um objeto YAML ou JSON anexado a um recurso do Google Cloud que contém uma lista de vinculações de papéis (role bindings) que associam principais a papéis específicos para conceder acesso. |
| **Cloud Identity** | Uma solução de Identidade como Serviço (IDaaS) que permite gerenciar centralmente usuários e grupos que podem acessar recursos do Google Cloud e do Google Workspace. É o serviço de identidade que alimenta o Google Workspace. |
| **Cloud Identity-Aware Proxy (IAP)** | Um serviço mencionado como uma opção (incorreta em um cenário de diagnóstico) para configurar a autenticação com um controlador de domínio Active Directory on-premises. |
| **Deny Policy (Política de Negação)** | Um tipo de política do IAM que permite definir regras que impedem que certos principais usem permissões específicas, independentemente dos papéis que lhes foram concedidos. As negações se sobrepõem às permissões. |
| **Google Cloud Directory Sync (GCDS)** | Uma ferramenta gratuita fornecida pelo Google que implementa o processo de sincronização periódica de usuários e grupos do Active Directory para o Cloud Identity ou Google Workspace. |
| **IAM (Identity and Access Management)** | O sistema de gerenciamento de autorização do Google Cloud que permite controlar "quem" pode fazer "o quê" em "quais recursos". |
| **IAM Conditions (Condições do IAM)** | Expressões lógicas especificadas nas vinculações de papéis da política do IAM de um recurso. O acesso só é concedido se a expressão da condição for avaliada como verdadeira, permitindo o controle de acesso baseado em atributos (ABAC). |
| **Herança de Política (Policy Inheritance)** | O conceito pelo qual as políticas de permissão (Allow Policies) e de negação (Deny Policies) aplicadas a um recurso contêiner (Organização, Pasta, Projeto) também se aplicam a todos os recursos dentro desse contêiner. |
| **Membro (Member/Principal)** | A identidade de uma pessoa ou sistema à qual as permissões são concedidas. Os tipos incluem Contas Google, Contas de Serviço, Grupos Google e domínios do Cloud Identity/Google Workspace. |
| **Migração: Re-architect** | Um tipo de migração que altera como o código de uma carga de trabalho funciona para otimizá-la e aproveitar propriedades nativas da nuvem, como escalabilidade e agilidade. Exemplo: decompor um monolito em microsserviços. |
| **Migração: Rebuild** | Um tipo de migração que envolve desativar uma aplicação existente e redesenhá-la e reescrevê-la completamente como uma aplicação otimizada para a nuvem. |
| **Migração: Refactor** | Um tipo de migração que modifica as cargas de trabalho para aproveitar as capacidades da nuvem, melhorando desempenho, funcionalidades, custo ou experiência do usuário. |
| **Migração: Rehost (Lift and Shift)** | Um tipo de migração onde as cargas de trabalho são movidas de um ambiente de origem para um de destino com pouca ou nenhuma modificação. É a abordagem mais rápida. |
| **Migração: Replatform (Lift and Optimize)** | Um tipo de migração que envolve mover as cargas de trabalho existentes e, em seguida, otimizá-las para o novo ambiente de nuvem, aproveitando competências como computação elástica e redundância. |
| **Organização (Organization)** | O nó raiz na hierarquia de recursos do Google Cloud. As políticas aplicadas no nível da organização são herdadas por todas as pastas e projetos abaixo dela. |
| **Política da Organização (Organization Policy)** | Uma configuração de restrições aplicada a um nó da organização, pasta ou projeto para controlar como os recursos podem ser configurados. Foca no "o quê" pode ser feito. |
| **Papel (Role)** | Uma coleção de permissões. Conceder um papel a um principal concede a ele todas as permissões contidas no papel. Existem tipos básicos, predefinidos e personalizados. |
| **Papéis Básicos (Basic Roles)** | Papéis altamente permissivos (Proprietário, Editor, Leitor) que fornecem acesso amplo aos serviços do Google Cloud. Não são recomendados para ambientes de produção. |
| **Papéis Personalizados (Custom Roles)** | Papéis criados pelo usuário que contêm um conjunto preciso de permissões, permitindo a aplicação do princípio do menor privilégio. |
| **Papéis Predefinidos (Predefined Roles)** | Papéis gerenciados pelo Google Cloud que contêm permissões para tarefas comuns em um serviço específico. |
| **Principal (Principal)** | Representa uma ou mais identidades que foram autenticadas no Google Cloud, como usuários humanos (Contas Google, identidades federadas) ou cargas de trabalho (Contas de Serviço). |
| **SAML (Security Assertion Markup Language)** | Um protocolo padrão aberto usado para single sign-on (SSO). Permite que o Google Cloud delegue a autenticação a um provedor de identidade externo, como o Active Directory Federation Services (AD FS). |
| **Conta de Serviço (Service Account)** | Um tipo especial de principal usado por uma aplicação ou carga de trabalho para fazer chamadas de API autorizadas. É identificada por um endereço de e-mail único. |
| **Workforce Identity Federation** | Um recurso que permite que usuários de um provedor de identidade (IdP) externo (como funcionários, parceiros) usem single sign-on (SSO) para acessar recursos do Google Cloud sem precisar sincronizar suas identidades. |
| **Workload Identity Federation** | Um mecanismo que permite que aplicações externas (em execução na AWS, Azure ou on-premises) se conectem de forma segura aos recursos do GCP sem a necessidade de baixar e gerenciar chaves de acesso de contas de serviço. |

## Recursos Adicionais

[📄 Baixar PDF: Session 2 - PCA for AWS](/pdfs/[Session%202]%20PCA%20for%20AWS.pdf)

![Mapa mental do guia de estudo: Arquitetura de Nuvem e Gerenciamento de Identidade no Google Cloud](/images/notebooklm-mind-map.png)
