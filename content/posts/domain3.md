---
title: "Domain 3: Applications of Foundation Models (Standard AIF)"
date: 2025-04-10 00:00:00 +0000
categories: ["article"]
draft: false
---


## Domain 3 Introduction

O texto apresenta o **Domínio 3**, que aborda a **aplicação de modelos de fundação (foundation models)**. Ele se conecta ao Domínio 2, que discutiu os modelos de fundação e seu ciclo de vida, reforçando que são modelos pré-treinados, prontos para uso e treinados em vastos conjuntos de dados.

**Pontos chave do texto:**

* **O que são modelos de fundação:** Grandes redes neurais de aprendizado profundo que servem como ponto de partida para desenvolver modelos de machine learning mais rápidos e baratos para novas aplicações.
* **Diferenciais dos modelos de fundação:**
    * **Adaptabilidade:** Capacidade de realizar diversas tarefas com alta precisão a partir de prompts de entrada (exemplos: NLP, question answering, classificação de imagens).
    * **Tamanho e propósito geral:** Diferentemente dos modelos tradicionais de ML, que são específicos para tarefas como análise de sentimento, classificação de imagens e previsão de tendências.
* **Aplicações dos modelos de fundação:** Suporte ao cliente, tradução de idiomas, geração de conteúdo, geração de código, copywriting, classificação de imagens, criação e edição de imagens de alta resolução, geração de vídeo e áudio, extração de documentos, saúde, veículos autônomos e robótica.
* **Estrutura do Domínio 3:** Dividido em quatro tarefas (task statements) que serão discutidas em lições futuras:
    * **Tarefa 3.1:** Descrever considerações de design para aplicações que usam modelos de fundação (escolha do modelo pré-treinado, efeito dos parâmetros de inferência, RAG e suas aplicações, custos de personalização, serviços AWS para embeddings, papel dos agentes).
    * **Tarefa 3.2:** Escolher técnicas eficazes de prompt engineering (melhores práticas, técnicas, riscos, limitações, conceitos e constructos).
    * **Tarefa 3.3:** Descrever o processo de treinamento e fine-tuning de modelos de fundação (elementos e métodos de treinamento, preparação de dados para fine-tuning).
    * **Tarefa 3.4:** Descrever métodos para avaliar o desempenho de modelos de fundação (abordagens, métricas, como determinar se o modelo atende aos objetivos de negócios).
* **Próximos passos:** Os próximos vídeos abordarão cada uma das quatro tarefas individualmente, preparando o público para um exame sobre o tema. A próxima lição focará na Tarefa 3.1.

Em resumo, o texto serve como uma introdução ao Domínio 3 sobre a aplicação de modelos de fundação, destacando suas características, aplicações e a estrutura dos tópicos que serão abordados nas próximas lições. O objetivo é preparar o leitor para entender os aspectos práticos da utilização desses modelos em diferentes cenários.

### Resumo Detalhado em Tópicos: Modelos de Fundação

**1. O que são modelos de fundação:**

*   **Definição:** Modelos pré-treinados que estão prontos para serem utilizados.
*   **Treinamento:** São treinados em conjuntos de dados massivos (grandes volumes de informações).
*   **Arquitetura:** Geralmente são redes neurais profundas (deep learning) de grande escala.
*   **Propósito:** Fornecem um ponto de partida robusto para o desenvolvimento de modelos de machine learning.
*   **Benefícios:**
    *   Aceleram o desenvolvimento de novas aplicações de machine learning.
    *   Tornam o desenvolvimento mais eficiente em termos de custo.

**2. Diferenciais dos modelos de fundação:**

*   **Adaptabilidade:**
    *   Capacidade de executar uma ampla variedade de tarefas.
    *   Alto grau de precisão na execução dessas tarefas.
    *   Funcionamento baseado em prompts de entrada (instruções ou exemplos fornecidos ao modelo).
    *   Exemplos de tarefas:
        *   Processamento de linguagem natural (NLP).
        *   Respostas a perguntas (question answering).
        *   Classificação de imagens.
*   **Tamanho e Propósito Geral:**
    *   **Tamanho:** São modelos grandes, com um grande número de parâmetros e camadas.
    *   **Propósito Geral:** Não são projetados para uma única tarefa específica, mas para aprender representações gerais dos dados.
    *   **Contraste com modelos tradicionais de Machine Learning:**
        *   **Modelos Tradicionais:** Focados em tarefas específicas.
        *   **Exemplos de tarefas específicas de modelos tradicionais:**
            *   Análise de texto para identificar sentimento (positivo, negativo, neutro).
            *   Classificação de imagens em categorias predefinidas (ex: gatos vs. cachorros).
            *   Previsão de tendências (ex: vendas futuras).
        *   **Modelos de Fundação:** Podem ser adaptados para realizar essas e muitas outras tarefas através de técnicas como prompt engineering ou fine-tuning.

**3. Aplicações dos modelos de fundação:**

*   **Suporte ao Cliente:**
    *   Chatbots avançados capazes de entender e responder a perguntas complexas.
    *   Automatização de tarefas de suporte.
    *   Geração de respostas personalizadas.
*   **Tradução de Idiomas:**
    *   Tradução automática de textos e áudios com alta qualidade e nuances.
*   **Geração de Conteúdo:**
    *   Criação de textos, artigos, roteiros, e-mails, posts para redes sociais, etc.
*   **Geração de Código:**
    *   Auxílio a programadores na escrita de código em diversas linguagens.
    *   Geração automática de trechos de código.
*   **Copywriting:**
    *   Criação de textos persuasivos para marketing e publicidade.
    *   Geração de slogans e títulos criativos.
*   **Classificação de Imagens:**
    *   Identificação de objetos, pessoas, cenas e atividades em imagens.
    *   Categorização automática de grandes volumes de imagens.
*   **Criação e Edição de Imagens de Alta Resolução:**
    *   Geração de imagens fotorrealistas a partir de descrições textuais.
    *   Edição avançada de imagens, como preenchimento de áreas faltantes ou remoção de objetos.
*   **Geração de Vídeo e Áudio:**
    *   Criação de vídeos curtos e animações a partir de texto ou imagens.
    *   Geração de áudio com vozes sintéticas realistas ou música.
*   **Extração de Documentos:**
    *   Identificação e extração de informações relevantes de documentos não estruturados (ex: PDFs, contratos).
    *   Automatização do processamento de documentos.
*   **Saúde:**
    *   Auxílio no diagnóstico de doenças a partir de imagens médicas.
    *   Descoberta de novos medicamentos.
    *   Personalização de tratamentos.
*   **Veículos Autônomos:**
    *   Processamento de dados sensoriais para percepção do ambiente.
    *   Tomada de decisões para navegação segura.
*   **Robótica:**
    *   Permitir que robôs entendam comandos de linguagem natural.
    *   Facilitar a interação entre humanos e robôs.
    *   Melhorar a capacidade de aprendizado e adaptação dos robôs.

## Task Statement 3.1 Lesson 1

O texto apresentado é uma introdução à discussão sobre os critérios de design para aplicações que utilizam *foundation models* (modelos de fundação). O objetivo principal desta primeira parte é identificar e explicar algumas considerações cruciais para a seleção desses modelos pré-treinados.

**Os principais pontos abordados no texto são:**

*   **Contextualização:** O texto se situa dentro do Domínio 3 (tarefa 1) e retoma discussões do Domínio 2 sobre as vantagens e considerações dos modelos pré-treinados (serem grandes e exigirem muitos recursos computacionais).
*   **Objetivo da Tarefa:** Identificar critérios de seleção de modelos pré-treinados, com foco inicial em custo, modalidade e latência. Outros critérios como tamanho, complexidade, customização e comprimentos de entrada/saída são mencionados como parte da lista a ser considerada.
*   **Custo:** A duração e o custo do treinamento são fatores importantes devido aos gastos com hardware e armazenamento. É levantada a questão do equilíbrio entre acurácia e custo de treinamento, enfatizando que a escolha depende dos requisitos do projeto e da necessidade de arquitetar uma solução escalável e eficiente.
*   **Latência:** A velocidade de inferência e os requisitos de tempo real são cruciais, especialmente para aplicações que precisam fornecer resultados instantaneamente. Modelos mais complexos podem ter tempos de inferência mais longos, tornando-os inadequados para certos cenários. O exemplo de um veículo autônomo ilustra a importância da inferência rápida.
*   **Modalidades:** A escolha de modelos que suportam as modalidades de dados necessárias para a aplicação é fundamental. Métodos de ensemble podem combinar modelos de diferentes modalidades para melhorar o desempenho. A necessidade de modelos multilinguais treinados em línguas relevantes também é mencionada.
*   **Outras Considerações (introduzidas):** O texto também introduz brevemente outras considerações importantes como:
    *   **Arquitetura e Complexidade:** Diferentes arquiteturas (CNNs para visão computacional, RNNs para NLP) têm diferentes pontos fortes e fracos. A complexidade do modelo (número de parâmetros, camadas) afeta velocidade, memória e acurácia.
    *   **Performance e Métricas:** Avaliar o desempenho do modelo em datasets originais e novos usando métricas como acurácia, precisão, recall, F1 score, RMSE, MAP e MAE. A importância de escolher métricas relevantes para a tarefa específica (exemplo do MAP para detecção de objetos) e considerar datasets desbalanceados é ressaltada.

**Em resumo, o texto estabelece a base para uma discussão mais aprofundada sobre como selecionar modelos de fundação adequados para diferentes aplicações, enfatizando a necessidade de equilibrar diversos fatores como custo, desempenho, velocidade e os requisitos específicos do caso de uso.** A estrutura do texto indica que as próximas lições continuarão a explorar esses e outros critérios de seleção.

## Task Statement 3.1 Lesson 2

### 1

O texto aborda diversas considerações importantes ao se trabalhar com modelos pré-treinados em aprendizado de máquina, especificamente no contexto da tarefa 3.1 (mencionada no início e no final). As principais ideias e pontos levantados são:

**1. Viéses nos Dados de Treinamento:**
   - É crucial entender e mitigar os riscos e preocupações éticas relacionados a possíveis viéses presentes nos dados utilizados para treinar o modelo pré-treinado.
   - Isso influencia a escolha e o ajuste fino do modelo.

**2. Disponibilidade e Compatibilidade do Modelo Pré-Treinado:**
   - Existem diversas fontes online (TensorFlow Hub, PyTorch Hub, Hugging Face, etc.) para encontrar modelos pré-treinados.
   - É fundamental verificar a compatibilidade do modelo com o framework, linguagem e ambiente de trabalho.
   - Outros aspectos importantes são a licença, a documentação, a regularidade das atualizações e manutenções, e a existência de problemas ou limitações conhecidas.

**3. Customização e Explicabilidade do Modelo Pré-Treinado:**
   - A capacidade de modificar ou estender o modelo pré-treinado para atender às necessidades específicas da tarefa (adição de camadas, classes, features) é uma consideração relevante.
   - Compreender como o modelo funciona e toma decisões é importante. Modelos flexíveis, modulares e transparentes, que ofereçam ferramentas de visualização e interpretação, são desejáveis.

**4. Interpretabilidade vs. Explicabilidade:**
   - **Interpretabilidade:** Refere-se à capacidade de explicar matematicamente, através de coeficientes e fórmulas, o porquê de uma previsão. Isso geralmente é possível em modelos mais simples.
   - **Explicabilidade:** Busca explicar o funcionamento de modelos complexos (como os "foundation models" ou "caixas pretas") através de aproximações locais com modelos mais simples e interpretáveis.
   - **Modelos pré-treinados complexos não são inerentemente interpretáveis** devido à sua natureza. Se a interpretabilidade é um requisito fundamental, modelos mais simples (regressão linear, árvores de decisão) podem ser mais adequados.

**5. Complexidade do Modelo:**
   - Modelos mais complexos podem identificar padrões intrincados nos dados e potencialmente oferecer melhor desempenho.
   - No entanto, maior complexidade acarreta desafios como aumento de custos (computacionais?), dificuldade na explicação das saídas e maiores dificuldades de manutenção.

**6. Outras Considerações (mencionadas brevemente):**
   - Restrições de hardware.
   - Atualizações de manutenção.
   - Privacidade de dados.
   - Transfer learning.

**Em resumo, o texto enfatiza a necessidade de uma avaliação abrangente ao escolher e utilizar modelos pré-treinados, indo além da simples disponibilidade e considerando aspectos cruciais como viéses, compatibilidade, capacidade de customização e, principalmente, a distinção entre interpretabilidade e explicabilidade, além dos impactos da complexidade do modelo.** O autor informa que a discussão sobre a tarefa 3.1 continuará na próxima lição.

### 2

**Resumo para Revisão e Estudo:**

**Tópico:** Considerações Adicionais no Uso de Modelos Pré-Treinados

**Pontos Chave:**

*   **Vieses nos Dados de Treinamento:**
    *   Importância de mitigar riscos e abordar questões éticas.
    *   Necessidade de decisões informadas sobre seleção e ajuste fino.
*   **Disponibilidade e Compatibilidade do Modelo:**
    *   Diversas fontes online (TensorFlow Hub, PyTorch Hub, Hugging Face).
    *   Verificar compatibilidade com framework, linguagem e ambiente.
    *   Checar licença, documentação, atualizações, manutenção e limitações conhecidas.
*   **Customização e Explicabilidade:**
    *   Possibilidade de modificar/estender o modelo (adição de camadas, classes, features).
    *   Importância de entender o funcionamento e as decisões do modelo.
    *   Buscar modelos flexíveis, modulares, transparentes e com ferramentas de visualização/interpretação.
*   **Interpretabilidade vs. Explicabilidade:**
    *   **Interpretabilidade:** Capacidade de explicar matematicamente as previsões (comum em modelos simples). Modelos complexos (como foundation models) não são inherentemente interpretáveis ("caixa preta").
    *   **Explicabilidade:** Tenta explicar a "caixa preta" aproximando-a localmente com um modelo mais simples e interpretável.
    *   Modelos pré-treinados não são transparentes por design. Se interpretabilidade for crucial, modelos mais simples podem ser preferíveis (ex: regressão linear, árvores de decisão).
*   **Complexidade do Modelo:**
    *   Modelos complexos podem identificar padrões intrincados, mas dificultam manutenção e interpretabilidade.
    *   Maior complexidade pode melhorar o desempenho, mas aumentar custos e dificultar a explicação dos resultados.
*   **Outras Considerações (mencionadas):** Restrições de hardware, atualizações de manutenção, privacidade de dados, aprendizado por transferência, etc.

**Próximo Passo:** Continuação do tópico 3.1 na próxima aula.

## Task Statement 3.1 Lesson 3

O texto aborda o tema da **inferência em modelos de fundação**, com foco em como os **parâmetros de inferência** e os **prompts** influenciam as respostas do modelo. Ele também introduz o conceito de **Retrieval Augmented Generation (RAG)** e a importância de **bancos de dados vetoriais** nesse processo.

Aqui estão os principais pontos do texto:

*   **Inferência:** Definida como o processo de usar um modelo treinado para fazer previsões em novos dados. Em modelos de linguagem, isso significa gerar uma saída (resposta) a partir de uma entrada (prompt).
*   **Amazon Bedrock:** Mencionado como uma plataforma que permite executar inferência em diversos modelos de fundação, oferecendo a flexibilidade de usar modelos base, customizados ou provisionados.
*   **Inputs para Inferência:** O principal input fornecido a um modelo durante a inferência é o **prompt**.
*   **Parâmetros de Inferência:** São valores ajustáveis que controlam e influenciam a resposta do modelo. O texto lista exemplos como:
    *   **Randomness e Diversidade:** Temperatura, Top K, Top P.
    *   **Comprimento da Resposta:** Response length, penalties, stop sequences.
*   **Importância da Experimentação:** É crucial experimentar com diferentes prompts e parâmetros de inferência para encontrar o equilíbrio ideal entre diversidade, coerência e eficiência de recursos. Além disso, é necessário monitorar e ajustar esses parâmetros em produção.
*   **Prompts:** Definidos como um conjunto específico de entradas fornecidas pelo usuário para guiar o LLM a gerar uma resposta apropriada. Prompts podem ser enriquecidos com dados contextuais de bancos de dados internos.
*   **Retrieval Augmented Generation (RAG):** Uma técnica que envolve integrar dados externos (de bancos de dados, especialmente bancos de dados vetoriais) ao prompt para enriquecer semanticamente a entrada e melhorar a qualidade e relevância da resposta gerada pelo modelo.
*   **Bancos de Dados Vetoriais:** São coleções de dados armazenados como representações matemáticas (vetores). Eles armazenam dados estruturados e não estruturados juntamente com seus vetores de embedding.
*   **Vector Embeddings:** Representações numéricas de dados (como palavras e frases) que capturam seu significado e relações semânticas. Um modelo de machine learning (especialmente um modelo de embedding) é necessário para criar esses vetores.
*   **Relação entre Modelos de ML e Bancos de Dados Vetoriais:** Um modelo de machine learning é um pré-requisito para criar um banco de dados vetorial, pois é usado para gerar os embeddings. Bancos de dados vetoriais servem como referência factual para aplicações baseadas em modelos de fundação, ajudando a recuperar dados confiáveis.
*   **Vantagens dos Bancos de Dados Vetoriais:** Permitem buscas eficientes e rápidas, além de oferecer funcionalidades como gerenciamento de dados, tolerância a falhas, autenticação, controle de acesso e um motor de consulta.
*   **Knowledge Bases no Amazon Bedrock:** Um exemplo de como coletar fontes de dados em um repositório para aproveitar o RAG.
*   **Tradeoffs de Custo:** O texto enfatiza a importância de entender os tradeoffs de custo das diferentes abordagens para personalização de modelos de fundação (pré-treinamento, fine-tuning, aprendizado in-context e RAG) para o exame.

Em resumo, o texto estabelece as bases para entender como interagir com modelos de fundação através da inferência, destacando o papel crucial dos parâmetros e prompts. Ele também introduz o conceito avançado de RAG e a infraestrutura subjacente dos bancos de dados vetoriais, enfatizando a importância de considerar diferentes abordagens e seus respectivos custos. A próxima lição se aprofundará no RAG.

## Task Statement 3.1 Lesson 4

Com base no texto fornecido, aqui estão os principais pontos e uma análise:

**Ideia Central:** O texto discute a Recuperação Aumentada por Geração (RAG) como uma técnica para aprimorar modelos de linguagem grandes (LLMs) com conhecimento externo e atualizado, mitigando o problema de alucinações. Ele também introduz o conceito de "Agents for Amazon Bedrock" como uma solução para permitir que LLMs realizem tarefas do mundo real.

**Componentes do RAG:**

*   **Retriever:** Componente responsável por pesquisar em uma base de conhecimento (tipicamente um banco de dados vetorial) informações relevantes para a consulta do usuário.
*   **Gerador:** Componente que utiliza as informações recuperadas para gerar uma resposta contextualmente relevante e precisa.

**Banco de Dados Vetoriais no RAG:**

*   A consulta do usuário é codificada (embedding) em um formato vetorial.
*   Esse embedding é usado para pesquisar no banco de dados vetorial embeddings semelhantes de dados externos.
*   Os dados semelhantes recuperados são combinados com a consulta original e enviados ao LLM para gerar a resposta.

**Exemplo de Uso de Banco de Dados Vetorial no Mundo Real:** O texto não fornece um exemplo específico além do contexto do RAG. No entanto, podemos inferir que um banco de dados vetorial seria usado em qualquer aplicação que precise encontrar informações semanticamente similares, como:
    *   **Sistemas de recomendação:** Encontrar produtos ou conteúdos semelhantes aos que um usuário já gostou.
    *   **Busca semântica:** Permitir que os usuários encontrem documentos ou informações com base no significado de suas palavras, em vez de correspondências exatas de palavras-chave.
    *   **Detecção de similaridade:** Identificar documentos duplicados ou plagiarismo.

**Hallucinações em LLMs e a Solução RAG:**

*   LLMs generativos podem gerar respostas factualmente incorretas (alucinações) porque seu conhecimento é limitado aos dados com os quais foram treinados.
*   O RAG resolve esse problema fornecendo aos LLMs acesso a uma base de conhecimento externa e atualizada, garantindo respostas mais precisas e contextualmente relevantes.

**Serviços AWS para Banco de Dados Vetoriais:** O texto lista vários serviços da AWS que podem ser usados para armazenar embeddings vetoriais:

*   Amazon OpenSearch Service
*   Amazon Aurora
*   Redis
*   Amazon Neptune
*   Amazon DocumentDB com compatibilidade MongoDB
*   Amazon RDS com PostgreSQL (com a extensão `pgvector`)
*   Amazon OpenSearch Serverless (com um "vector engine")
*   Knowledge Bases for Amazon Bedrock (oferece RAG totalmente gerenciado)

**Amazon OpenSearch Service e Busca Semântica:**

*   O OpenSearch Service oferece capacidades de banco de dados vetorial para implementar busca semântica, RAG, sistemas de recomendação e busca de mídia.
*   A busca semântica utiliza embeddings baseados em linguagem (como modelos BERT) para melhorar a relevância dos resultados da busca, indo além da busca por palavras-chave.
*   O texto menciona um workshop utilizando o Amazon SageMaker para gerar vetores e armazená-los no OpenSearch.

**Amazon OpenSearch Serverless:**

*   Oferece armazenamento e busca vetorial sem a necessidade de gerenciar a infraestrutura do banco de dados.
*   Facilita a construção de aplicações de busca aumentada e IA generativa.

**Knowledge Bases for Amazon Bedrock:**

*   Oferece uma solução RAG totalmente gerenciada, permitindo conectar FMs aos dados da empresa armazenados como embeddings.
*   Visa fornecer respostas mais relevantes, contextuais e precisas sem a necessidade de retreinar continuamente o FM.

**Amazon RDS for PostgreSQL e `pgvector`:**

*   A extensão `pgvector` permite armazenar e pesquisar embeddings eficientemente no PostgreSQL.

**Capacidade de Modelos Maiores:**

*   Modelos maiores tendem a ser mais capazes de realizar tarefas bem, muitas vezes sem a necessidade de aprendizado no contexto ou treinamento adicional.

**Introdução a Agentes para Amazon Bedrock:**

*   LLMs sozinhos não podem realizar tarefas do mundo real (como reservar voos) porque essas tarefas exigem dados e workflows específicos de organizações que geralmente precisam de programação personalizada.
*   Agentes para Amazon Bedrock são uma funcionalidade gerenciada da AWS que permite construir aplicações que utilizam FMs para realizar tarefas do mundo real.
*   Agentes podem:
    *   Dividir tarefas complexas.
    *   Gerar lógica de orquestração ou código personalizado.
    *   Conectar-se a bancos de dados e APIs de forma segura.
    *   Ingerir e estruturar dados.
    *   Aumentar informações com detalhes contextuais.
    *   Chamar APIs para executar ações.
    *   Invocar bases de conhecimento para complementar informações.
*   Um exemplo é um agente para ajudar clientes a reservar férias de mergulho.

**Próximos Passos:** O texto indica que a próxima lição abordará a tarefa 3.2.

**Em resumo, o texto explica de forma clara e concisa o conceito de RAG, a importância de bancos de dados vetoriais nesse processo, os serviços AWS disponíveis para essa finalidade e introduz a ideia de agentes como uma camada adicional para permitir que LLMs interajam com o mundo real e executem tarefas complexas.**

## Task Statement 3.2 Lesson 1

Com base no texto fornecido, podemos extrair as seguintes informações chave sobre o tema de prompt engineering:

**O que é um Prompt:**

* Um conjunto específico de entradas fornecidas pelo usuário.
* Guia os LLMs (Large Language Models) a gerar uma resposta ou saída apropriada para uma tarefa ou instrução.

**Componentes de um Prompt:**

Um prompt pode conter um ou mais dos seguintes componentes:

* **Tarefa ou Instrução:** O que o LLM deve fazer.
* **Contexto:** Informações adicionais relevantes para a tarefa.
* **Texto de Entrada:** O dado específico sobre o qual o LLM deve trabalhar para gerar a resposta.

**Técnicas de Prompt Engineering:**

O texto menciona diversas técnicas de prompt engineering:

* **Few-shot Prompting:** Fornecer alguns exemplos no prompt para ajudar o LLM a entender melhor e calibrar sua saída às expectativas do usuário.
* **Zero-shot Prompting:** Realizar uma tarefa (como classificação de sentimentos) sem fornecer nenhum exemplo no prompt.
* **Prompt Templates:** Modelos predefinidos que podem incluir instruções, exemplos few-shot e conteúdo/questões específicas para diferentes casos de uso.
* **Chain-of-Thought Prompting:** Para tarefas complexas, dividir o processo de raciocínio em etapas intermediárias para melhorar a qualidade e a coerência da saída final.
* **Prompt Tuning:** Uma técnica avançada onde o texto do prompt é substituído por um "embedding backer" contínuo otimizado durante o treinamento do modelo. Isso permite um ajuste fino para uma tarefa específica, mantendo os outros parâmetros do modelo congelados, sendo mais eficiente que o fine-tuning completo.

**Definição de Prompt Engineering pela AWS:**

* A prática de criar e otimizar prompts de entrada.
* Envolve a seleção de palavras, frases, sentenças, pontuação e caracteres separadores apropriados para usar LLMs de forma eficaz em diversas aplicações.

**Importância da Qualidade do Prompt:**

* A qualidade dos prompts fornecidos aos LLMs impacta diretamente a qualidade de suas respostas.
* É crucial fornecer todas as informações e ferramentas necessárias no prompt.

**Considerações para a Estratégia de Prompt Engineering:**

* A estratégia depende tanto da tarefa específica quanto dos dados disponíveis.

**Tarefas Comuns Suportadas por LLMs no Amazon Bedrock (exemplos):**

* Classificação
* Pergunta e Resposta (com e sem contexto)
* Sumarização
* Geração de texto de formato livre
* Geração de código
* Matemática
* Raciocínio ou pensamento lógico

**Espaço Latente (Latent Space):**

* É o conhecimento codificado da linguagem dentro de um LLM.
* Representa os padrões de dados armazenados que capturam relacionamentos.
* Quando um LLM é solicitado (prompted), ele reconstrói a linguagem a partir desses padrões.
* Pode ser visto como um "banco de dados estatístico" de padrões que o modelo usa para gerar novas saídas.
* No exemplo da viagem de mergulho, o banco de dados de destinos, profundidade, visibilidade, temperatura da água e do ar, etc., seria o espaço latente.

**Em resumo, o texto introduz o conceito de prompt engineering, detalha os componentes de um prompt, explora diversas técnicas para otimizar a interação com LLMs e destaca a importância de entender as capacidades e o "conhecimento" interno (espaço latente) dos modelos para criar prompts eficazes.**

### Topicos 3.2.1

**Conceitos Fundamentais:**

*   **O que é um Prompt:** Definição e sua função como guia para LLMs.
*   **Componentes de um Prompt:**
    *   Tarefa ou Instrução
    *   Contexto
    *   Texto de Entrada
*   **Definição de Prompt Engineering:** Prática de criar e otimizar prompts para uso eficaz de LLMs.
*   **Importância da Qualidade do Prompt:** Impacto na qualidade das respostas geradas.

**Técnicas de Prompt Engineering:**

*   **Few-shot Prompting:** Uso de exemplos no prompt.
*   **Zero-shot Prompting:** Realização de tarefas sem exemplos.
*   **Prompt Templates:** Modelos predefinidos para diferentes casos de uso.
*   **Chain-of-Thought Prompting:** Decomposição de tarefas complexas em etapas.
*   **Prompt Tuning:** Otimização de "embedding backers" para tarefas específicas (conceito avançado).

**Considerações Estratégicas:**

*   **Dependência da Tarefa e dos Dados:** Como a escolha da técnica é influenciada.
*   **Tarefas Comuns Suportadas por LLMs (exemplos no Amazon Bedrock):**
    *   Classificação
    *   Pergunta e Resposta (com/sem contexto)
    *   Sumarização
    *   Geração de texto livre
    *   Geração de código
    *   Matemática
    *   Raciocínio lógico

**Espaço Latente:**

*   **Definição:** Conhecimento codificado e padrões de linguagem em LLMs.
*   **Funcionamento:** Como o modelo usa esses padrões para gerar novas saídas.
*   **Analogia com Banco de Dados Estatístico:** Compreensão do modelo sobre os dados.
*   **Exemplo da Viagem de Mergulho:** Ilustração do espaço latente em um cenário prático.

**Para o Exame:**

*   Entender as diretrizes para fornecer informações e ferramentas necessárias nos prompts.
*   Saber como encontrar o melhor formato de prompt para diferentes casos de uso no Amazon Bedrock.

## Task Statement 3.2 Lesson 2

Com base no texto fornecido, aqui estão alguns pontos sobre ele:

* **Continuação de um tópico:** O texto retoma a discussão sobre o prompt engineering, especificamente a partir da tarefa 3.2, e começa respondendo a uma pergunta da lição anterior sobre a relação entre o espaço latente e o prompting de modelos de linguagem.

* **Explicação do espaço latente e o prompting:** O texto explica que quando um prompt é inserido, o modelo de linguagem o compara com as informações armazenadas em seu "espaço latente" (derivado de grandes bases de dados de texto). A resposta gerada é baseada em probabilidades estatísticas dessas informações.

* **Limitações do espaço latente:** O texto destaca que se o espaço latente do modelo não contiver informações suficientes sobre o tópico do prompt, o modelo pode "alucinar" ou fornecer respostas que são estatisticamente plausíveis, mas factualmente incorretas.

* **Importância do prompt engineering:** O texto enfatiza que o prompt engineering é crucial para obter os melhores resultados de modelos de linguagem generativa, pois guia o modelo a aplicar seu vasto conhecimento de forma direcionada.

* **Técnicas de prompt engineering:** O texto lista várias técnicas importantes para um prompt engineering eficaz, incluindo ser específico, fornecer exemplos, experimentar, conhecer as limitações do modelo, equilibrar simplicidade e complexidade, usar comentários e adicionar "guardrails".

* **Riscos e limitações do prompt engineering:** O texto introduz a ideia de riscos associados ao prompt engineering, como exposição, envenenamento (poisoning), sequestro (hijacking) e quebra de barreiras de segurança (jailbreaking).

* **Explicação de conceitos de segurança:** O texto define "prompt injection" como ataques de manipulação de prompts e "jailbreaking" como tentativas de burlar as medidas de segurança ("guardrails") estabelecidas.

* **Exemplos de serviços da AWS:** O texto menciona os serviços Amazon Bedrock e Amazon Titan como plataformas que oferecem modelos de linguagem pré-treinados e ferramentas para prompt engineering, além de recursos de monitoramento e análise.

* **Transição para o próximo tópico:** O texto indica que a próxima lição abordará a tarefa 3.3.

Em resumo, o texto fornece uma explicação concisa e informativa sobre a relação entre o espaço latente e o prompting, a importância do prompt engineering, suas técnicas e os potenciais riscos e medidas de segurança associados.

### Topicos 3.2.2

**1. Relação entre Espaço Latente e Prompting:**
    * Como prompts interagem com o espaço latente de um modelo de linguagem.
    * O espaço latente como base de conhecimento estatístico do modelo.
    * Processo de geração de texto a partir do espaço latente.

**2. Limitações do Espaço Latente:**
    * Insuficiência de informação no espaço latente e suas consequências.
    * O fenômeno da "alucinação" em modelos de linguagem.
    * Distinção entre correção estatística e factual.

**3. Importância do Prompt Engineering:**
    * O papel do prompt engineering para otimizar a saída de modelos generativos.
    * A diferença entre resultados medianos e excelentes com prompts eficazes.

**4. Técnicas de Prompt Engineering:**
    * Ser específico e fornecer instruções claras (formato, exemplos, tom, etc.).
    * Inclusão de exemplos de comportamento desejado (textos, dados, templates, etc.).
    * A importância da experimentação e do processo iterativo.
    * Conhecer os pontos fortes e fracos do modelo utilizado.
    * Equilíbrio entre simplicidade e complexidade nos prompts.
    * Uso de comentários para contexto adicional (para engenheiros de prompt).
    * Implementação de "guardrails" para segurança e controle.

**5. Riscos e Limitações do Prompt Engineering:**
    * Identificação de riscos potenciais: exposição, envenenamento (poisoning), sequestro (hijacking), quebra de barreiras (jailbreaking).

**6. Conceitos de Segurança em Prompt Engineering:**
    * **Prompt Injection:** Ataques de manipulação de prompts.
    * **Jailbreaking:** Tentativas de burlar as medidas de segurança (guardrails).
    * **Hijacking:** Tentativas de alterar ou manipular o prompt original.
    * **Poisoning:** Incorporação de instruções maliciosas em conteúdos.

**7. Guardrails:**
    * Função dos guardrails para segurança e privacidade.
    * Configuração de tópicos indesejados, palavras bloqueadas e filtros.
    * Proteção contra jailbreak, prompt injection e dados sensíveis.

**8. Serviços da AWS para Prompt Engineering:**
    * Amazon Bedrock e Amazon Titan como plataformas com modelos personalizáveis.
    * APIs e ferramentas para construção, refinamento, monitoramento e análise de prompts.
    * Casos de uso: criação de conteúdo, sumarização, Q&A e chatbots.

## Task Statement 3.3 Lesson 1

Com base no texto fornecido, seguem os principais pontos abordados sobre o treinamento e ajuste fino (fine-tuning) de modelos de fundação:

**Elementos Chave do Treinamento de um Modelo de Fundação:**

*   **Pré-treinamento (Pre-training):**
    *   Processo complexo e custoso, exigindo grande poder computacional (milhões de GPUs, horas de computação), vastas quantidades de dados (terabytes e petabytes), trilhões de tokens, experimentação e tempo.
    *   Modelos de IA generativa aprendem suas capacidades durante esta fase.
    *   Utiliza grandes quantidades de dados não estruturados com aprendizado auto-supervisionado (self-supervised learning).
    *   O objetivo é o modelo aprender os fundamentos da linguagem humana e adquirir conhecimento geral a partir de diversas fontes (documentos, vídeos, imagens, áudios, etc.).

*   **Ajuste Fino (Fine-tuning):**
    *   Processo que estende o treinamento do modelo para melhorar a geração de resultados para uma tarefa específica.
    *   É um processo de aprendizado supervisionado, utilizando um conjunto de dados rotulados (labeled examples) para atualizar os pesos do LLM.
    *   Ajuda a adaptar modelos de fundação a datasets e casos de uso personalizados.
    *   O ajuste fino baseado em instruções (Instruction based fine-tuning) usa exemplos rotulados para melhorar o desempenho em tarefas específicas.

*   **Ajuste Fino Contínuo (Continuous Pre-training):** (Mencionado como um dos elementos chave, mas não detalhado no trecho fornecido).

**Diferença entre Pré-treinamento e Ajuste Fino:**

*   **Pré-treinamento:** Treina o LLM com grandes quantidades de dados não estruturados usando aprendizado auto-supervisionado para aprender os fundamentos da linguagem e conhecimento geral.
*   **Ajuste Fino:** Estende o treinamento usando um dataset de exemplos rotulados (aprendizado supervisionado) para melhorar o desempenho em uma tarefa específica, adaptando o modelo a dados e casos de uso particulares.

**Considerações e Tipos de Ajuste Fino:**

*   **Necessidade de Ajuste Fino:** Mesmo modelos de fundação pré-treinados em grandes volumes de dados podem precisar de treinamento adicional para um domínio, dataset específico, ou para aprender a realizar tarefas e raciocínios específicos.
*   **Ajuste Fino para Tarefa Única:** Pode melhorar o desempenho em tarefas específicas de um caso de uso.
*   **Esquecimento Catastrófico (Catastrophic Forgetting):** Limitação do ajuste fino para uma única tarefa, onde a modificação dos pesos do LLM para otimizar uma tarefa pode degradar o desempenho em outras tarefas. A relevância dessa limitação depende do caso de uso.
*   **Ajuste Fino Completo (Full Fine-tuning):** Todos os parâmetros do modelo são atualizados através do aprendizado supervisionado, o que pode ser computacionalmente caro e demandar muita memória de GPU.
*   **Ajuste Fino Eficiente em Parâmetros (Parameter-Efficient Fine-tuning - PEFT):** Técnicas que congelam ou preservam os parâmetros e pesos do LLM original e ajustam ou treinam apenas um pequeno número de camadas e parâmetros específicos da tarefa. Isso reduz os custos computacionais e de memória.
*   **Adaptação de Baixa Patente (Low-Rank Adaptation - LoRA):** Uma técnica PEFT popular que congela os pesos originais e cria novas matrizes treináveis de baixa patente em cada camada da arquitetura Transformer.
*   **Ajuste Fino de Representação (Representation Fine-tuning - ReFT):** Processo que congela o modelo base e aprende intervenções específicas da tarefa nas representações ocultas, baseado na hipótese da representação linear.
*   **Ajuste Fino Multitarefa (Multitask Fine-tuning):** Treina o modelo com um dataset contendo exemplos de entradas e saídas para múltiplas tarefas simultaneamente, ajudando a mitigar o esquecimento catastrófico e produzindo modelos ajustados para instruções.
*   **Ajuste Fino para Adaptação de Domínio (Domain Adaptation Fine-tuning):** Permite adaptar modelos pré-treinados a tarefas específicas usando dados limitados de um domínio específico, ajudando o modelo a entender linguagem especializada (jargão, termos técnicos).
*   **Ajuste Fino com Aprendizado por Reforço com Feedback Humano (Reinforcement Learning from Human Feedback - RLHF):** Utiliza aprendizado por reforço com dados de feedback humano para alinhar melhor o modelo com as preferências humanas e melhorar a geração de respostas semelhantes às humanas.

A pergunta final do trecho ("What fine-tuning process modifies the weights of the model to adapt to domain-specific data?") é respondida pelo conceito de **Domain adaptation fine-tuning**.

### Topicos 3.3.1

**1. Introdução ao Treinamento de Modelos de Fundação:**

*   **Definição:** O processo geral de desenvolver modelos de IA generativa capazes de realizar diversas tarefas.
*   **Divisão:** Compreensão das três fases principais: pré-treinamento, fine-tuning e (mencionado) pré-treinamento contínuo.

**2. Pré-treinamento (Pre-training): A Base do Conhecimento:**

*   **Natureza:** Processo complexo e intensivo em recursos (computacionais, dados, tempo).
*   **Objetivo:** Dotar o modelo com conhecimento fundamental da linguagem e do mundo através de vastos dados não estruturados.
*   **Mecanismo:** Utilização de aprendizado auto-supervisionado para o modelo aprender padrões nos dados por conta própria.

**3. Diferença Crucial: Pré-treinamento vs. Fine-tuning:**

*   **Foco do Pré-treinamento:** Aprendizado geral da linguagem e conceitos em larga escala.
*   **Foco do Fine-tuning:** Adaptação e especialização do modelo para tarefas ou domínios específicos.
*   **Tipo de Dados:** Dados não estruturados (pré-treinamento) vs. dados rotulados (fine-tuning).
*   **Tipo de Aprendizado:** Auto-supervisionado (pré-treinamento) vs. supervisionado (fine-tuning).

**4. A Necessidade e os Objetivos do Fine-tuning:**

*   **Limitações do Modelo Pré-treinado:** Mesmo com vasto treinamento, pode faltar conhecimento específico ou habilidade para certas tarefas.
*   **Objetivo do Fine-tuning:** Melhorar o desempenho em tarefas particulares e adaptar o modelo a dados e casos de uso personalizados.

**5. Fine-tuning para Tarefas Específicas e o Risco de Esquecimento Catastrófico:**

*   **Benefício:** Otimização do modelo para o desempenho máximo em uma única tarefa.
*   **Desvantagem Potencial:** Esquecimento catastrófico, onde a especialização para uma tarefa prejudica o desempenho em outras.
*   **Consideração:** Avaliar se a perda de generalização é aceitável para o caso de uso específico.

**6. Abordagens de Fine-tuning: Do Completo ao Eficiente:**

*   **Fine-tuning Completo (Full Fine-tuning):** Atualização de todos os parâmetros do modelo com dados rotulados.
    *   **Custo:** Alto em termos de computação e memória.
*   **Fine-tuning Eficiente em Parâmetros (PEFT):** Congelamento da maioria dos parâmetros e ajuste de uma pequena parte específica da tarefa.
    *   **Benefícios:** Redução significativa do custo computacional e de memória.
    *   **Exemplo:** LoRA (Low-Rank Adaptation), criação de novas matrizes de baixa patente treináveis.

**7. Técnicas de Fine-tuning Específicas:**

*   **Adaptação de Baixa Patente (LoRA):** Mecanismo de PEFT que adiciona camadas treináveis de baixa dimensão.
*   **Ajuste Fino de Representação (ReFT):** Congela o modelo base e ajusta as representações internas para a tarefa.
*   **Ajuste Fino Multitarefa (Multitask Fine-tuning):** Treinamento com dados rotulados para múltiplas tarefas simultaneamente.
    *   **Benefícios:** Melhora a generalização e mitiga o esquecimento catastrófico.
*   **Ajuste Fino para Adaptação de Domínio (Domain Adaptation Fine-tuning):** Adaptação a dados específicos de um domínio (jargão, termos técnicos).
    *   **Aplicação:** Essencial para modelos que precisam operar em áreas especializadas.
*   **Ajuste Fino com Aprendizado por Reforço com Feedback Humano (RLHF):** Utilização de feedback humano para refinar o modelo e alinhá-lo com as preferências humanas.

**8. Considerações de Memória e Custo no Fine-tuning:**

*   **Sobrecarga de Memória:** Necessidade de memória adicional para otimizadores, gradientes, ativações e memória temporal durante o treinamento.
*   **Impacto nos Custos:** O aumento do uso de memória geralmente leva a maiores custos computacionais.

**9. Ferramentas e Plataformas:**

*   **Amazon SageMaker JumpStart:** Capacidade de realizar fine-tuning de LLMs em datasets específicos.

Este resumo em tópicos fornece uma estrutura clara para revisar os principais conceitos e diferenças apresentados no texto sobre o treinamento e o processo de fine-tuning de modelos de fundação.

## Task Statement 3.3 Lesson 2

O texto aborda a importância da preparação de dados para o processo de fine-tuning de modelos de linguagem fundacionais (Foundation Models - FMs), especialmente no contexto da Amazon Web Services (AWS). Ele detalha os passos envolvidos no fine-tuning e, em seguida, explora as opções oferecidas pela AWS para a preparação desses dados.

**Principais Pontos do Texto:**

* **Processo de Fine-tuning:**
    * Preparação do dataset de instruções, muitas vezes utilizando datasets públicos e bibliotecas de templates de prompts.
    * Divisão do dataset em treino, validação e teste.
    * Seleção de prompts do dataset de treino e envio para o LLM gerar conclusões.
    * Comparação da distribuição das conclusões com o rótulo de treino para calcular a perda.
    * Utilização da perda para atualizar os pesos do modelo em várias iterações.
    * Avaliação do desempenho utilizando o dataset de validação e, finalmente, o dataset de teste.

* **Importância da Preparação de Dados:** O texto enfatiza que a preparação de dados (coleta, pré-processamento e organização dos dados brutos) é fundamental em machine learning para garantir a qualidade e eficácia do modelo.

* **Opções de Preparação de Dados em AWS:** O texto apresenta diversas ferramentas e serviços da AWS para auxiliar na preparação dos dados, categorizando-os por diferentes necessidades:
    * **Low-code:** Amazon SageMaker Canvas para criação de data flows com pouco ou nenhum código.
    * **Escalabilidade:** Frameworks open source como Apache Spark, Apache Hive e Presto, com integração do Amazon EMR no SageMaker Studio Classic.
    * **Serverless:** AWS Glue interactive sessions (com Apache Spark) para agregar, transformar e preparar dados no SageMaker Studio Classic.
    * **SQL:** Utilização de Jupyter Lab no SageMaker Studio para preparação de dados via Structured Query Language.
    * **Feature Discovery e Storage:** Amazon SageMaker Feature Store para buscar, descobrir, recuperar e armazenar features em formato padronizado.
    * **Detecção de Bias:** Amazon SageMaker Clarify para analisar dados e identificar potenciais vieses (e.g., representação desbalanceada entre grupos).
    * **Labeling de Dados:** Amazon SageMaker Ground Truth para gerenciar workflows de rotulagem de dados para treinamento.

* **Continuous Pre-training:** O texto também aborda a importância do pre-treinamento contínuo para modelos generativos de IA, destacando:
    * A dificuldade de validação devido à natureza não determinística das saídas.
    * A necessidade de escolher métricas, benchmarks e datasets adequados para avaliar capacidades e garantir a não geração de conteúdo prejudicial.
    * O aumento do poder dos modelos ao serem continuamente pre-treinados com dados de diferentes tópicos, gêneros e contextos, levando a melhor adaptação e acumulação de conhecimento.
    * Exemplos como o pre-treinamento contínuo no Amazon Bedrock para os modelos Amazon Titan Text Express e Lite, que podem ser personalizados com dados não rotulados dos usuários em um ambiente seguro.

**Em Resumo:**

O texto fornece uma visão geral concisa do processo de fine-tuning de LLMs, com um foco especial na etapa crucial de preparação dos dados. Ele destaca a variedade de ferramentas e serviços oferecidos pela AWS para lidar com diferentes aspectos da preparação de dados, desde abordagens low-code até soluções escaláveis e serverless, além de ferramentas para tarefas específicas como descoberta de features, detecção de bias e rotulagem. Finalmente, introduz o conceito de pre-treinamento contínuo e sua relevância para aprimorar e adaptar modelos generativos de IA.

### Topicos 3.3.2

**I. Fundamentos do Fine-tuning:**

*   **Definição e Objetivo do Fine-tuning:** Adaptação de modelos fundacionais para tarefas específicas.
*   **Processo de Fine-tuning:**
    *   Preparação do Dataset de Instruções.
    *   Divisão do Dataset (Treino, Validação, Teste).
    *   Seleção de Prompts e Geração de Conclusões.
    *   Cálculo da Perda (Comparação com Rótulos).
    *   Atualização dos Pesos do Modelo.
    *   Avaliação com Datasets de Validação e Teste (Acurácia).

**II. A Importância da Preparação de Dados em ML:**

*   **Definição de Preparação de Dados:** Coleta, pré-processamento e organização de dados brutos.
*   **Impacto da Qualidade dos Dados no Modelo:** Dados bem preparados levam a modelos mais eficazes.

**III. Opções de Preparação de Dados em AWS:**

*   **Low-code:**
    *   Amazon SageMaker Canvas: Criação de data flows visuais (feature engineering sem código).
*   **Escalabilidade:**
    *   Frameworks Open Source (Apache Spark, Hive, Presto).
    *   Integração com Amazon EMR no SageMaker Studio Classic.
*   **Serverless:**
    *   AWS Glue Interactive Sessions: Motor Spark serverless no SageMaker Studio Classic (agregação e transformação).
*   **SQL:**
    *   Jupyter Lab no SageMaker Studio: Preparação de dados usando Structured Query Language.
*   **Feature Discovery e Storage:**
    *   Amazon SageMaker Feature Store: Busca, descoberta, recuperação e armazenamento centralizado de features.
*   **Detecção de Bias:**
    *   Amazon SageMaker Clarify: Análise e detecção de potenciais vieses nos dados.
*   **Labeling de Dados:**
    *   Amazon SageMaker Ground Truth: Gerenciamento de workflows de rotulagem para datasets de treinamento.

**IV. Continuous Pre-training para Modelos Generativos:**

*   **Definição e Propósito:** Pre-treinamento contínuo em dados diversos.
*   **Desafios de Validação:** Natureza não determinística das saídas.
*   **Importância de Métricas e Benchmarks:** Avaliação adequada e garantia de saídas não prejudiciais.
*   **Benefícios do Pre-treinamento Contínuo:**
    *   Aumento do poder e adaptabilidade dos modelos.
    *   Melhor uso de dados fora do domínio original.
    *   Acúmulo de conhecimento mais amplo.
*   **Exemplos em AWS:** Pre-treinamento contínuo no Amazon Bedrock (Amazon Titan Text Express e Lite).
*   **Personalização com Dados Não Rotulados:** Uso dos próprios dados em ambiente seguro e gerenciado.

## Task Statement 3.4 Lesson 1

O texto aborda a **avaliação do desempenho de modelos fundacionais**, com foco em como integrar esses modelos em aplicações práticas. Ele destaca considerações importantes e métodos para essa avaliação.

Aqui estão os principais pontos do texto:

**Integração de Modelos em Aplicações e Desafios:**

* **Considerações Iniciais:** Ao integrar um modelo, é crucial pensar na velocidade de geração, orçamento computacional disponível e a disposição para trocar performance por velocidade ou armazenamento.
* **Desafios de Inferência:** A implantação (on-premises, nuvem ou dispositivos de ponta) pode apresentar desafios relacionados a computação, armazenamento e baixa latência para os usuários.
* **Otimização para Desempenho:**
    * **Redução do Tamanho do Modelo:** Diminuir o tamanho pode reduzir a latência, mas pode impactar a performance.
    * **Otimização de Prompts:** Tornar os prompts mais concisos.
    * **Redução de Snippets Recuperados:** Diminuir o tamanho e o número de trechos relevantes.
    * **Controle de Geração:** Ajustar parâmetros de inferência e o próprio prompt.
* **Trade-offs:** Muitas vezes, há uma troca entre acurácia e performance.

**Métricas de Avaliação:**

* **Dificuldade na Avaliação de Modelos Generativos:** A natureza não determinística da saída de modelos generativos torna a avaliação mais complexa em comparação com modelos com previsões determinísticas (onde métricas como acurácia e RMSE são mais diretas).
* **Métricas Específicas por Tarefa:** A avaliação de modelos generativos geralmente depende da tarefa específica. Exemplos incluem:
    * **ROUGE (Recall Oriented Understudy for Gisting Evaluation):** Usado para avaliação de sumarização automática e tradução automática, comparando o input com o output gerado.
    * **BLEU (Bilingual Evaluation Understudy):** Algoritmo para avaliar a qualidade de traduções automáticas entre línguas naturais.

**Benchmarks e Datasets para Avaliação Genérica de LLMs:**

* **Objetivo:** Avaliar e comparar LLMs sem um foco específico em uma única tarefa.
* **Exemplos:**
    * **GLUE (General Language Understanding Evaluation):** Coleção de tarefas de linguagem natural (análise de sentimento, resposta a perguntas) para avaliar a capacidade de generalização entre tarefas. Possui um ranking para comparar modelos.
    * **SuperGlue:** Introduzido posteriormente, adiciona tarefas mais complexas como raciocínio multi-sentença e compreensão de leitura. Também possui um ranking.
    * **MMLU (Massive Multitask Language Understanding):** Avalia o conhecimento e a capacidade de resolução de problemas, abrangendo diversas áreas como história, matemática e ciência da computação.
    * **BIG-bench (Beyond the Imitation Game Benchmark):** Foca em tarefas que desafiam as capacidades dos modelos de linguagem atuais, incluindo matemática, biologia, física, vieses, linguística, raciocínio, etc.
    * **HELM (Holistic Evaluation of Language Models):** Visa melhorar a transparência dos modelos, oferecendo métricas para diversas tarefas (sumarização, QA, análise de sentimento, detecção de vieses) e auxiliando na escolha do modelo adequado para uma dada tarefa.

**Outras Formas de Avaliação:**

* **Avaliação Humana:** Utilização de trabalhadores humanos para avaliar manualmente as respostas dos modelos e comparar diferentes modelos.
* **Amazon SageMaker Clarify:** Ferramenta para avaliar LLMs e criar trabalhos de avaliação de modelos.
* **Amazon Bedrock:** Oferece um módulo de avaliação que compara automaticamente as respostas geradas com referências humanas, calculando uma pontuação de similaridade semântica (BERTscore) e sendo útil para avaliar fidelidade e alucinações em tarefas de geração de texto.

O texto conclui indicando que a discussão sobre a avaliação continuará na próxima lição.

### Topicos 3.4.1

**Integração e Desafios em Aplicações:**

*   Considerações iniciais para integração (velocidade, orçamento, trade-offs).
*   Desafios de inferência em diferentes ambientes (on-premises, nuvem, edge).
*   Técnicas de otimização para desempenho:
    *   Redução do tamanho do modelo (e suas implicações).
    *   Otimização de prompts.
    *   Redução de snippets recuperados.
    *   Controle de geração via parâmetros e prompt.
*   Entendimento dos trade-offs entre acurácia e performance.

**Métricas de Avaliação:**

*   A complexidade da avaliação de modelos generativos (saídas não determinísticas).
*   Métricas específicas por tarefa:
    *   ROUGE (para sumarização e tradução).
    *   BLEU (para tradução).
*   Compreensão do que cada métrica avalia e suas limitações.

**Benchmarks e Datasets para Avaliação Genérica de LLMs:**

*   Objetivo dos benchmarks: avaliação e comparação sem foco em uma tarefa específica.
*   Características e foco de cada benchmark:
    *   GLUE (generalização entre tarefas).
    *   SuperGlue (tarefas mais complexas e raciocínio).
    *   MMLU (conhecimento e resolução de problemas).
    *   BIG-bench (desafios além das capacidades atuais).
    *   HELM (transparência e guia para escolha de modelos).
*   A importância dos rankings (leaderboards) em GLUE e SuperGlue.

**Outras Formas de Avaliação:**

*   Avaliação humana (vantagens e desvantagens).
*   Utilização do Amazon SageMaker Clarify para avaliação de LLMs.
*   Utilização do módulo de avaliação do Amazon Bedrock (BERTscore, fidelidade e alucinações).

**Próximos Passos:**

*   Consciência de que a avaliação de modelos continuará sendo abordada na próxima lição.

## Task Statement 3.4 Lesson 2

Com base no texto fornecido, aqui estão os principais pontos e informações relevantes:

**Foco Principal da Lição:**

* **Integração de LLMs em aplicações:** A lição se concentra na segunda fase do planejamento para o uso de Large Language Models (LLMs) em produção, especificamente como integrá-los em aplicações.

**Principais Tópicos Abordados:**

* **Recursos Adicionais Necessários:** O modelo pode precisar de recursos adicionais como acesso a dados externos ou interação com outras aplicações.
* **Conexão com Recursos Externos:** Discute como conectar o modelo a esses recursos externos.
* **Retrieval Augmented Generation (RAG):**
    * Apresenta o RAG como um framework para LLMs utilizarem fontes de dados externas.
    * Explica como o RAG ajuda a lidar com o conhecimento desatualizado dos modelos, dificuldades com matemática complexa, alucinações e falta de factualidade, fornecendo contexto e aterrando as respostas.
    * Menciona que o RAG requer configurações adicionais para conectar o LLM a componentes externos.
* **Orchestration Libraries:** Sugere o uso de bibliotecas de orquestração para configurar e gerenciar o fluxo de dados entre a entrada do usuário, o LLM e a resposta.
* **Vantagens do RAG sobre Retreinamento:** Destaca que o RAG permite acessar dados externos no momento da inferência, evitando os custos e a necessidade de retreinamento constante para manter o modelo atualizado.
* **Arquitetura de Alto Nível para Aplicações de IA Generativa:** Apresenta uma visão geral de uma pilha de tecnologias para construir aplicações de IA generativa, auxiliando na avaliação se um modelo base atende aos objetivos de negócios (produtividade, engajamento do usuário, engenharia de tarefas).
* **Considerações de Design da Aplicação/API:** Questiona como o modelo será consumido e qual será o design da interface da aplicação ou API.
* **Definição de Objetivos de Negócios e Métricas:** Enfatiza a importância de definir objetivos claros, métricas de sucesso e a infraestrutura necessária.
* **Monitoramento e Avaliação Contínuos:** Lembra a necessidade de medir, monitorar e revisar as métricas para avaliar o desempenho.
* **Componentes Chave para Soluções End-to-End:** Detalha as camadas de uma arquitetura para construir aplicações com LLMs:
    * **Infraestrutura:** Computação, armazenamento, rede, segurança (durante todo o ciclo de vida da IA).
    * **Modelos de Linguagem e Infraestrutura de Inferência:** Escolha do LLM, infraestrutura para inferência, armazenamento adicional (para logs, feedback), considerações de tempo real/quase real e segurança.
    * **Ferramentas e Frameworks para LLMs/Model Hubs:** Gerenciamento e compartilhamento de modelos.
    * **Interface do Usuário/API:** Consumo da aplicação (website, REST API) e componentes de segurança.
* **Interação do Usuário com a Arquitetura:** Explica como usuários (humanos ou outros sistemas via APIs) interagem com toda a pilha de tecnologias.
* **Necessidade de Armazenamento Adicional:** Aponta para a necessidade de armazenar logs de conclusões de usuários ou feedback para ajuste fino, avaliação ou alinhamento futuro.
* **Interação com Sistemas Existentes:** Menciona a necessidade de integrar com sistemas, softwares e serviços existentes em tempo real através de APIs e interfaces.

**Em Resumo:**

O texto aborda as considerações práticas para integrar LLMs em aplicações, com foco na necessidade de recursos externos, na utilização do RAG como solução para problemas de conhecimento desatualizado e imprecisão, e na arquitetura de alto nível necessária para construir e operar essas aplicações de forma segura e eficaz. A lição também enfatiza a importância de definir objetivos, métricas e realizar um monitoramento contínuo.

### Topicos 3.4.2

**Fase 2 do Planejamento de LLMs em Produção:**

*   **Integração em Aplicações:** Foco em como incorporar LLMs em sistemas e softwares práticos.

**Recursos Adicionais para LLMs em Aplicações:**

*   **Necessidade de Recursos Externos:** Identificação de que LLMs podem precisar de acesso a dados externos e interação com outras aplicações para funcionar efetivamente em um contexto aplicado.

**Conexão com Dados e Aplicações Externas:**

*   **Estratégias de Conectividade:** Considerações sobre como estabelecer a comunicação entre o LLM e fontes de dados ou outros sistemas.

**Retrieval Augmented Generation (RAG):**

*   **Framework para Dados Externos:** Definição do RAG como uma arquitetura que permite LLMs utilizarem informações de fontes externas.
*   **Superando Conhecimento Desatualizado:** Como o RAG resolve o problema de modelos com informações antigas ao buscar dados relevantes em tempo real.
*   **Auxílio em Tarefas Complexas (Matemática):** O papel do RAG em fornecer contexto para melhorar a precisão em tarefas que exigem cálculos complexos.
*   **Redução de Alucinações e Aumento da Factualidade:** Como o contexto fornecido pelo RAG ajuda a evitar respostas inventadas e garante maior precisão factual.
*   **Configurações Adicionais para RAG:** Entendimento de que a implementação do RAG requer configurações específicas para conectar o LLM a fontes externas.

**Orchestration Libraries:**

*   **Gerenciamento do Fluxo de Dados:** Uso de bibliotecas de orquestração para organizar a passagem da entrada do usuário para o LLM e o retorno da resposta.

**RAG vs. Retreinamento:**

*   **Vantagens do Acesso a Dados em Tempo Real:** Comparação entre o RAG e o retreinamento, destacando a capacidade do RAG de acessar informações atualizadas durante a inferência.
*   **Economia de Custos e Esforço:** Como o RAG evita os custos e a necessidade de retreinamento constante para manter o modelo atualizado.

**Arquitetura de Alto Nível para Aplicações de IA Generativa:**

*   **Visão Geral da Pilha Tecnológica:** Compreensão das diferentes camadas e componentes necessários para construir aplicações de IA generativa.
*   **Avaliação da Adequação do Modelo aos Objetivos de Negócios:** Como essa arquitetura ajuda a determinar se um modelo base atende às necessidades da empresa (produtividade, engajamento, etc.).

**Design da Aplicação e Interface (API):**

*   **Forma de Consumo do Modelo:** Considerações sobre como os usuários ou outros sistemas irão interagir com o LLM integrado na aplicação.
*   **Projeto da Interface:** Planejamento da interface do usuário (website) ou da interface de programação (API) para acessar as funcionalidades do modelo.

**Definição de Objetivos, Métricas e Infraestrutura:**

*   **Clareza nos Objetivos de Negócios:** Importância de definir o problema específico que a aplicação com LLM deve resolver.
*   **Estabelecimento de Métricas de Sucesso:** Definição de indicadores para avaliar o desempenho e o impacto da aplicação.
*   **Infraestrutura de Suporte:** Planejamento da infraestrutura tecnológica necessária para executar o modelo e a aplicação.

**Monitoramento e Avaliação Contínuos:**

*   **Medição de Desempenho:** Necessidade de coletar dados e medir as métricas definidas.
*   **Monitoramento em Tempo Real (ou Próximo):** Acompanhamento do funcionamento e do desempenho da aplicação.
*   **Revisão e Ajustes:** Importância de analisar os resultados e realizar ajustes para otimizar o desempenho.

**Componentes Chave para Soluções End-to-End:**

*   **Camada de Infraestrutura:** Recursos de computação, armazenamento, rede e considerações de segurança em todo o ciclo de vida da IA.
*   **Camada de Modelos de Linguagem e Inferência:** Escolha do LLM, infraestrutura para execução (CPU/GPU), necessidades de armazenamento (logs, feedback) e requisitos de tempo real/quase real, além de segurança dos dados.
*   **Camada de Ferramentas e Frameworks para LLMs/Model Hubs:** Utilização de ferramentas, frameworks e plataformas para gerenciar e compartilhar modelos.
*   **Camada de Interface do Usuário/API:** Desenvolvimento da interface para interação dos usuários (humanos ou sistemas) com a aplicação, incluindo aspectos de segurança.

**Interação do Usuário com a Arquitetura Completa:**

*   **Fluxo de Interação:** Compreensão de como os usuários finais ou outros sistemas acessam e utilizam a aplicação que integra o LLM.

**Necessidade de Armazenamento Adicional:**

*   **Registro de Conclusões e Feedback:** Justificativa para armazenar outputs do modelo e feedback dos usuários para fins de ajuste fino, avaliação e alinhamento.

**Interação com Sistemas Existentes via APIs:**

*   **Integração em Tempo Real:** Relevância da capacidade do LLM integrado de interagir com outros sistemas e serviços através de APIs e interfaces.

## Links

1 - What Are Foundation Models?
<https://aws.amazon.com/what-is/foundation-models/>

2 - Inference Parameters
<https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html>

3 - Knowledge Bases for Amazon Bedrock
<https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html>

4 - Agents for Amazon Bedrock
<https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html>

5 - Amazon OpenSearch Service’s Vector Database Capabilities Explained
<https://aws.amazon.com/blogs/big-data/amazon-opensearch-services-vector-database-capabilities-explained/>

6 - The Role of Vector Datastores in Generative AI Applications
<https://aws.amazon.com/blogs/database/the-role-of-vector-datastores-in-generative-ai-applications/>

7 - Vector Engine for Amazon OpenSearch Serverless
<https://aws.amazon.com/opensearch-service/serverless-vector-engine/>

8 - What Is Prompt Engineering?
<https://aws.amazon.com/what-is/prompt-engineering/>

9 - Domain-Adaptation Fine-Tuning of Foundation Models in Amazon SageMaker JumpStart on Financial Data
<https://aws.amazon.com/blogs/machine-learning/domain-adaptation-fine-tuning-of-foundation-models-in-amazon-sagemaker-jumpstart-on-financial-data/>

10 - Metric: bleu
<https://huggingface.co/spaces/evaluate-metric/bleu>

11 - Metric: rouge
<https://huggingface.co/spaces/evaluate-metric/rouge>

12 - ReFT: Representation Fine-Tuning for Language Models
<https://huggingface.co/papers/2404.03592>