---
layout: post
title: "Serviços de Inteligência Artificial da AWS: Uma Análise Abrangente para a Certificação AIF-C01"
date: 2025-04-22 00:00:00 +0000
categories: article
---

A Amazon Web Services (AWS) oferece um ecossistema robusto de serviços de inteligência artificial (IA) e machine learning (ML), alinhados às demandas modernas de inovação e escalabilidade. Este relatório explora todos os serviços relevantes, mapeando-os aos domínios do exame AIF-C01 ("AWS Certified AI Practitioner"), com descrições detalhadas, casos de uso e recomendações práticas.

## Domínio 1: Fundamentos de IA e Machine Learning

### Amazon SageMaker

**Descrição**: Plataforma integral para construção, treinamento e implantação de modelos de ML. Oferece ferramentas para todas as etapas do pipeline de ML, incluindo preparação de dados, experimentação e monitoramento[^3][^5].
**Usabilidade**: Ideal para cientistas de dados que necessitam de ambientes personalizados (ex.: notebooks Jupyter) e integração com frameworks como TensorFlow e PyTorch.
**Indicação de Uso**: Desenvolvimento de modelos personalizados para previsão de demanda, análise de sentimentos ou detecção de anomalias[^3][^8].

### Amazon Rekognition

**Descrição**: Serviço de visão computacional pré-treinado para análise de imagens e vídeos, incluindo reconhecimento facial, detecção de objetos e moderación de conteúdo[^2][^5].
**Usabilidade**: Aplicável em segurança (identificação de atividades suspeitas), mídia (organização de bibliotecas) e varejo (análise de comportamento em lojas)[^5][^8].
**Indicação de Uso**: Empresas que buscam automatizar a moderação de conteúdo em plataformas de usuários[^2][^5].

### Amazon Textract

**Descrição**: Extrai texto estruturado de documentos escaneados, PDFs e formulários, usando OCR (Optical Character Recognition) avançado[^6][^8].
**Usabilidade**: Digitalização de contratos, processamento de faturas e automação de fluxos de trabalho burocráticos[^6][^8].
**Indicação de Uso**: Instituições financeiras que precisam processar grandes volumes de documentos[^8].

## Domínio 3: Aplicações de Modelos de Base

### Amazon Bedrock

**Descrição**: Permite acesso a modelos generativos de terceiros (ex.: Anthropic Claude, Stability AI) e personalização via fine-tuning[^5][^7].
**Usabilidade**: Geração de conteúdo criativo (texto, imagens), resumo de documentos e chatbots avançados[^5][^7].
**Indicação de Uso**: Startups que desejam integrar IA generativa sem investir em infraestrutura própria[^7].

### Amazon Titan

**Descrição**: Família de modelos de linguagem (LLMs) da AWS, otimizados para tarefas como tradução, classificação de texto e geração de código[^5][^7].
**Usabilidade**: Suporte a desenvolvedores na criação de aplicações conversacionais e automação de tarefas repetitivas[^5][^7].
**Indicação de Uso**: Empresas de tecnologia que buscam escalar soluções de NLP em múltiplos idiomas[^5].

### AWS HealthScribe

**Descrição**: Gera transcrições médicas automáticas a partir de áudio, identificando termos clínicos e estruturando dados para prontuários eletrônicos[^7].
**Usabilidade**: Clínicas e hospitais que precisam reduzir o tempo de documentação médica[^7].
**Indicação de Uso**: Integração com sistemas de saúde para melhorar a eficiência operacional[^7].

## Domínio 4: Diretrizes para IA Responsável

### Guardrails for Amazon Bedrock

**Descrição**: Ferramenta para implementar controles éticos em modelos generativos, limitando respostas inadequadas ou tendenciosas[^3][^5].
**Usabilidade**: Empresas que priorizam conformidade com regulamentações de privacidade e redução de riscos legais[^3][^5].
**Indicação de Uso**: Aplicações de atendimento ao cliente onde a neutralidade é crítica[^3].

### Amazon SageMaker Clarify

**Descrição**: Identifica viés em datasets e modelos, fornecendo métricas de justiça (fairness) e explicabilidade[^3][^8].
**Usabilidade**: Setores regulamentados (ex.: finanças, saúde) que exigem transparência algorítmica[^3][^8].
**Indicação de Uso**: Bancos que utilizam ML para aprovação de crédito[^8].

## Domínio 5: Segurança e Conformidade

### AWS Identity and Access Management (IAM)

**Descrição**: Gerencia permissões de acesso a serviços de IA, aplicando princípios de menor privilégio[^3][^5].
**Usabilidade**: Empresas que lidam com dados sensíveis (ex.: PII) e necessitam de auditoria granular[^3][^5].
**Indicação de Uso**: Corporações multinacionais com requisitos de governança rígidos[^3].

### Amazon Macie

**Descrição**: Detecta dados confidenciais em repositórios S3 usando ML, ajudando a cumprir regulamentos como GDPR e LGPD[^3][^8].
**Usabilidade**: Organizações que armazenam grandes volumes de dados não estruturados[^3][^8].
**Indicação de Uso**: Seguros de saúde que processam informações de pacientes[^8].

## Serviços Adicionais por Caso de Uso

### Geração de Fala e Texto

- **Amazon Polly**: Converte texto em fala natural, útil para audiobooks e sistemas IVR[^6][^5].
- **Amazon Lex**: Cria chatbots com reconhecimento de voz e NLP, integrando-se ao Amazon Connect para centrais de contato[^6][^8].


### Otimização Operacional

- **Amazon Forecast**: Previsões de séries temporais para gestão de estoque e logística[^2][^8].
- **Amazon Monitron**: Monitoramento preditivo de máquinas industriais usando sensores IoT e ML[^5][^8].


### IA Generativa para Desenvolvedores

- **AWS App Studio**: Permite criar aplicações usando prompts em linguagem natural, democratizando o desenvolvimento[^7].
- **Amazon CodeWhisperer**: Assistente de código que sugere trechos em tempo real, compatível com múltiplas linguagens[^7].

## Lista de serviços

Aqui está a lista de todos os serviços da AWS mencionados no documento, incluindo aqueles que estão dentro e fora do escopo do exame AIF-C01:

**Serviços Mencionados (Dentro e Fora do Escopo):**

1.  5G Privado da AWS (AWS Private 5G)
2.  Amazon AppFlow
3.  Amazon AppStream 2.0
4.  Amazon Augmented AI (Amazon A2I)
5.  Amazon Aurora
6.  Amazon Bedrock
7.  Amazon Chime
8.  Amazon CloudFront
9.  Amazon CloudSearch
10. Amazon CloudWatch
11. Amazon CodeCatalyst
12. Amazon Cognito
13. Amazon Comprehend
14. Amazon Detective
15. Amazon DocumentDB (compatível com MongoDB)
16. Amazon DynamoDB
17. Amazon EC2
18. Amazon EC2 Image Builder
19. Amazon ElastiCache
20. Amazon Elastic Container Service (Amazon ECS)
21. Amazon Elastic Kubernetes Service (Amazon EKS)
22. Amazon Elastic Transcoder
23. Amazon EMR
24. Amazon FinSpace
25. Amazon Fraud Detector
26. Amazon GuardDuty
27. Amazon Honeycode
28. Amazon Inspector
29. Amazon Interactive Video Service (Amazon IVS)
30. Amazon Kendra
31. Amazon Keyspaces (para Apache Cassandra)
32. Amazon Lex
33. Amazon Lightsail
34. Amazon Location Service
35. Amazon Macie
36. Amazon Managed Grafana
37. Amazon Managed Service for Prometheus
38. Amazon Managed Streaming for Apache Kafka (Amazon MSK)
39. Amazon MemoryDB
40. Amazon Monitron
41. Amazon MQ
42. Amazon Neptune
43. Amazon Nimble Studio
44. Amazon OpenSearch Service
45. Amazon Personalize
46. Amazon Pinpoint
47. Amazon Polly
48. Amazon Q
49. Amazon Quantum Ledger Database (Amazon QLDB)
50. Amazon QuickSight
51. Amazon RDS (incluindo RDS para PostgreSQL)
52. Amazon Redshift
53. Amazon Rekognition
54. Amazon Route 53
55. Amazon Route 53 Application Recovery Controller
56. Amazon S3
57. Amazon S3 Glacier
58. Amazon SageMaker
59. Amazon SageMaker Clarify
60. Amazon SageMaker Data Wrangler
61. Amazon SageMaker Feature Store
62. Amazon SageMaker JumpStart
63. Amazon SageMaker Model Monitor
64. Amazon Security Lake
65. Amazon Simple Email Service (Amazon SES)
66. Amazon Simple Workflow Service (Amazon SWF)
67. Amazon Textract
68. Amazon Timestream
69. Amazon Transcribe
70. Amazon Translate
71. Amazon Verified Permissions
72. Amazon VPC
73. Amazon VPC IP Address Manager (IPAM)
74. Amazon WorkDocs
75. Amazon WorkMail
76. Amazon WorkSpaces
77. Amazon WorkSpaces Thin Client
78. Amazon WorkSpaces Web
79. AWS Amplify
80. AWS AppConfig
81. AWS Application Composer
82. AWS Application Cost Profiler
83. AWS Application Discovery Service
84. AWS Application Migration Service
85. AWS App Mesh
86. AWS App Runner
87. AWS AppSync
88. AWS Artifact
89. AWS Audit Manager
90. AWS Backup
91. AWS Billing Conductor
92. AWS Budgets
93. AWS Certificate Manager (ACM)
94. AWS Clean Rooms
95. AWS Cloud Map
96. AWS CloudHSM
97. AWS CloudShell
98. AWS CloudTrail
99. AWS CodeStar
100. AWS Config
101. AWS Control Tower
102. AWS Cost Explorer
103. AWS Data Exchange
104. AWS Database Migration Service (AWS DMS)
105. AWS DataSync
106. AWS DeepComposer
107. AWS Device Farm
108. AWS Direct Connect
109. AWS Directory Service
110. AWS Elastic Beanstalk
111. AWS Elastic Disaster Recovery
112. AWS Elemental MediaConnect
113. AWS Elemental MediaConvert
114. AWS Elemental MediaLive
115. AWS Elemental MediaPackage
116. AWS Elemental MediaStore
117. AWS Elemental MediaTailor
118. AWS Fault Injection Service
119. AWS Firewall Manager
120. AWS Global Accelerator
121. AWS Glue
122. AWS Glue DataBrew
123. AWS Health Dashboard
124. AWS HealthImaging
125. AWS HealthOmics
126. AWS IAM Identity Center (Centro de Identidade do AWS IAM)
127. AWS Identity and Access Management (AWS IAM)
128. AWS IoT 1-Click
129. AWS IoT Analytics
130. AWS IoT Core
131. AWS IoT Device Defender
132. AWS IoT Device Management
133. AWS IoT Events
134. AWS IoT FleetWise
135. AWS IoT Greengrass
136. AWS IoT RoboRunner
137. AWS IoT SiteWise
138. AWS IoT TwinMaker
139. AWS IQ
140. AWS Key Management Service (AWS KMS)
141. AWS Lake Formation
142. AWS Lambda
143. AWS Launch Wizard
144. AWS License Manager
145. AWS Mainframe Modernization
146. AWS Managed Services (AMS)
147. AWS Marketplace
148. AWS Migration Hub
149. AWS OpsWorks
150. AWS Organizations
151. AWS Panorama
152. AWS Payment Cryptography
153. AWS Private Certificate Authority
154. AWS PrivateLink
155. AWS Proton
156. AWS re:Post Private
157. AWS Resilience Hub (Hub de Resiliência da AWS)
158. AWS Resource Access Manager (AWS RAM)
159. AWS Resource Explorer (Explorador de Recursos da AWS)
160. AWS Resource Groups
161. AWS Secrets Manager
162. AWS Security Hub
163. AWS Service Catalog
164. AWS Shield
165. AWS Signer
166. AWS Snow Family (Família AWS Snow)
167. AWS Step Functions (mencionado implicitamente via Amazon SWF como alternativa) *Nota: Step Functions não está listado explicitamente, mas SWF está, que é um serviço relacionado.* (Retirado após revisão - SWF está listado, Step Functions não)
168. AWS Supply Chain (Cadeia de Suprimentos AWS)
169. AWS Support
170. AWS Systems Manager Incident Manager
171. AWS Telco Network Builder (Criador de Redes de Telecomunicações da AWS)
172. AWS Transfer Family
173. AWS Trusted Advisor
174. AWS User Notifications (Notificações de Usuários da AWS)
175. AWS WAF
176. AWS Well-Architected Tool
177. AWS Wickr
178. AWS X-Ray
179. FreeRTOS
180. Red Hat OpenShift na AWS (ROSA)
181. Service Quotas

## Tabela


| Serviço AWS | Categoria | Descrição | Usabilidade | Público Alvo | Objetivo |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **AWS Data Exchange** | Analytics | Serviço que ajuda os clientes AWS a compartilhar e gerenciar facilmente direitos de dados de outras organizações em grande escala[^2]. | Permite aos clientes encontrar arquivos de dados, tabelas de dados e APIs de dados de diversos fornecedores, facilitando a obtenção de valor a partir de dados de terceiros[^2]. | Analistas de dados, cientistas de dados e empresas que buscam conjuntos de dados externos para enriquecer suas análises e modelos de ML[^2]. | Aumentar a velocidade com que os clientes obtêm valor de conjuntos de dados de terceiros na nuvem, simplificando a descoberta, aquisição e integração de dados com os serviços da AWS[^2]. |
| **Amazon EMR (Elastic MapReduce)** | Analytics | Plataforma de Big Data na nuvem para processamento de dados, análise interativa e machine learning, utilizando frameworks de código aberto como Apache Spark, Apache Hive e Presto[^3]. | Permite focar na transformação e análise de dados sem se preocupar com o gerenciamento da capacidade computacional ou aplicativos de código aberto. Provisiona capacidade sob demanda no Amazon EC2 e gerencia a demanda computacional[^3]. | Engenheiros de dados, analistas de dados e cientistas de dados que precisam processar grandes volumes de dados usando frameworks de Big Data[^3]. | Simplificar o processamento de grandes volumes de dados, oferecendo um ambiente gerenciado e escalável para executar frameworks de Big Data, permitindo que os usuários se concentrem no processamento e análise dos dados[^3]. |
| **AWS Glue** | Analytics | Serviço de integração de dados serverless que facilita a descoberta, preparação, movimentação e integração de dados de diversas fontes[^4]. | Permite aos usuários de análise descobrir e se conectar a mais de 70 fontes de dados, gerenciar dados em um catálogo centralizado, criar e monitorar pipelines ETL e pesquisar e consultar dados catalogados[^4]. | Usuários de análise, engenheiros de dados e cientistas de dados que precisam integrar dados de diversas fontes para análise, machine learning e desenvolvimento de aplicações[^4]. | Facilitar a integração de dados de diversas fontes, oferecendo um serviço serverless que automatiza a descoberta, preparação, movimentação e integração de dados, permitindo que os usuários se concentrem na análise e no desenvolvimento de aplicações[^4]. |
| **AWS Glue DataBrew** | Analytics | Ferramenta visual de preparação de dados que facilita para analistas e cientistas de dados limpar e normalizar dados com o objetivo de prepará-los para análise e machine learning (ML)[^5]. | Escolher entre mais de 250 transformações pré-construídas para automatizar tarefas de preparação de dados sem precisar escrever código. Automatizar filtragens de anomalias, conversões de dados em formatos padrão, correções de valores inválidos[^5]. | Analistas de dados, cientistas de dados e outros usuários que precisam preparar dados para análise e machine learning, mas não têm habilidades de codificação[^5]. | Reduzir o tempo e o esforço necessários para preparar dados para análise e machine learning, oferecendo uma ferramenta visual que permite aos usuários limpar, normalizar e transformar dados sem escrever código[^5]. |
| **AWS Lake Formation** | Analytics | Serviço que facilita a criação de um data lake seguro em um tempo mínimo[^6]. | Transferir, armazenar, atualizar e catalogar dados de maneira mais eficiente, além de organizar e otimizar automaticamente as informações. Definir e aplicar centralmente políticas de segurança, governança e auditoria[^6]. | Empresas que migram para data lakes e necessitam de segurança[^6]. | Ajudar a lidar com a segurança no data lake, permitindo estabelecer políticas de segurança granulares em seus dados[^6]. |
| **Amazon OpenSearch Service** | Analytics | Libera com segurança a pesquisa, o monitoramento e a análise em tempo real de dados empresariais e operacionais para casos de uso, como monitoramento de aplicações, análise de logs, observabilidade e pesquisa em sites[^7]. | Aumentar a excelência operacional usando uma solução popular de código aberto, gerenciada pela AWS. Auditar e proteger seus dados com um datacenter e arquitetura de rede com certificações integradas[^7]. | Empresas que precisam de pesquisa, monitoramento e análise de dados em tempo real[^7]. | Detectar sistematicamente ameaças potenciais e reagir ao estado de um sistema por meio de machine learning, alertas e visualização[^7]. |
| **Amazon QuickSight** | Analytics | Ferramenta de Business Intelligence (BI) que permite que organizações transformem grandes volumes de dados em insights visuais compreensíveis e acionáveis[^8]. | Oferecer análises interativas e dashboards dinâmicos, permitindo que os usuários criem relatórios detalhados e visualizações personalizadas sem necessidade de um conhecimento técnico profundo[^8]. | Organizações de todos os tamanhos que desejam transformar dados em insights acionáveis[^8]. | Facilitar a tomada de decisões informadas e estratégicas, permitindo transformar dados complexos em insights visuais claros e acionáveis[^8]. |
| **Amazon Redshift** | Analytics | Serviço de banco de dados relacional totalmente gerenciado, projetado especificamente para análise de dados[^9]. | Permitir o dimensionamento elástico e oferecer vantagens em relação a um DW clássico[^9]. | Empresas que precisam de um data warehouse para análise de dados[^9]. | Oferecer um serviço de banco de dados relacional totalmente gerenciado e escalável para análise de dados[^9]. |
| **AWS Budgets** | Gerenciamento Financeiro da Nuvem | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Informação no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **AWS Cost Explorer** | Gerenciamento Financeiro da Nuvem | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon EC2** | Computação | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon ECS** | Contêineres | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon EKS** | Contêineres | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon DocumentDB** | Banco de Dados | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon DynamoDB** | Banco de Dados | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon ElastiCache** | Banco de Dados | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon MemoryDB** | Banco de Dados | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon Neptune** | Banco de Dados | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon RDS** | Banco de Dados | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon SageMaker** | Machine Learning | (Mencionado no guia do exame) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon Transcribe** | Machine Learning | (Mencionado no guia do exame) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon Translate** | Machine Learning | (Mencionado no guia do exame) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon Comprehend** | Machine Learning | (Mencionado no guia do exame) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon Lex** | Machine Learning | (Mencionado no guia do exame) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon S3** | Armazenamento | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon S3 Glacier** | Armazenamento | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon CloudFront** | Rede e Entrega de Conteúdo | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon VPC** | Rede e Entrega de Conteúdo | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **AWS Artifact** | Segurança, Identidade e Conformidade | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **AWS Audit Manager** | Segurança, Identidade e Conformidade | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **AWS IAM** | Segurança, Identidade e Conformidade | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon Inspector** | Segurança, Identidade e Conformidade | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **AWS KMS** | Segurança, Identidade e Conformidade | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **Amazon Macie** | Segurança, Identidade e Conformidade | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |
| **AWS Secrets Manager** | Segurança, Identidade e Conformidade | (Não detalhado nos resultados da busca, mas no escopo do exame AIF-C01) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) | (Información no disponible nos resultados da busca) |


## Conclusão

A AWS oferece mais de 30 serviços de IA, cada um abordando desafios específicos, desde visão computacional até conformidade regulatória. Para a certificação AIF-C01, é essencial dominar não apenas a funcionalidade técnica, mas também as implicações éticas e operacionais de cada ferramenta. Recomenda-se a prática com os serviços gratuitos do nível Free Tier (ex.: Amazon Polly, Transcribe) e a exploração de casos reais documentados no AWS Well-Architected Framework[^6][^8].

[^1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/22271198/27a42cfb-ebb4-4002-9ce9-73357301f9b0/AWS-Certified-AI-Practitioner_Exam-Guide.pdf

[^2]: https://aws.amazon.com/pt/ai/services/

[^3]: https://www.linkedin.com/pulse/aws-certified-ai-practitioner-exam-aif-c01-study-path-jon-bonso-icfpc

[^4]: https://aws.amazon.com/pt/what-is/artificial-intelligence/

[^5]: https://aws.amazon.com/pt/ai/

[^6]: https://aws.amazon.com/pt/free/ai/

[^7]: https://www.aboutamazon.com.br/noticias/aws/aws-anuncia-5-inovacoes-para-ajudar-todos-a-criar-com-ia-generativa

[^8]: https://aws.amazon.com/pt/financial-services/machine-learning/

[^9]: https://aws.amazon.com/pt/ai/generative-ai/

[^10]: https://tutorialsdojo.com/aws-certified-ai-practitioner-aif-c01-exam-guide/

[^11]: https://aws.amazon.com/ai/

[^12]: https://www.aboutamazon.com.br/noticias/aws/como-os-clientes-brasileiros-da-aws-estao-abordando-a-ia-generativa-em-seus-negocios

[^13]: https://d1.awsstatic.com/training-and-certification/docs-ai-practitioner/AWS-Certified-AI-Practitioner_Exam-Guide.pdf

[^14]: https://www.amazon.jobs/pt/jobs/2950583/applied-scientist-ii-amazon-aws-ai

[^15]: https://www.brlink.com.br/blog/inteligencia-artificial-na-aws/

[^16]: https://www.youtube.com/watch?v=X82dC7s6HZQ

[^17]: https://aws.amazon.com/what-is/artificial-intelligence/

[^18]: https://www.youtube.com/watch?v=Zlqyoouoar8

[^19]: https://aws.amazon.com/certification/certified-ai-practitioner/

[^20]: https://aws.amazon.com/ai/services/

[^21]: https://aws-experience.com/latam/smb/e/a593a/ia-generativa-na-aws

