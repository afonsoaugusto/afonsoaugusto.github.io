---
title: "Estudo Detalhado sobre Métricas ROUGE para Avaliação de LLMs"
date: 2025-04-17 00:00:00 +0000
categories: ["article"]
draft: false
---


### Introdução

No campo do processamento de linguagem natural (NLP) e do aprendizado de máquina, especialmente ao trabalhar com Grandes Modelos de Linguagem (LLMs), a avaliação da qualidade do texto gerado é crucial. Seja para tarefas de sumarização, tradução automática ou geração de texto criativo, precisamos de métricas objetivas para comparar a saída do modelo com um padrão de referência. Uma das suítes de métricas mais utilizadas para essa finalidade é a **ROUGE (Recall-Oriented Understudy for Gisting Evaluation)**.

Este documento detalha o que são as métricas ROUGE, como funcionam e suas principais variantes, conforme descrito no contexto de avaliação de LLMs fine-tuned (ajustados) em plataformas como "Autopilot".

### Contexto: Avaliação Pós-Ajuste Fino (Fine-Tuning)

Quando ajustamos um LLM, o objetivo principal durante o treinamento é geralmente minimizar uma métrica como a **perda de entropia cruzada (cross-entropy loss)**. Essa métrica mede a dissimilaridade entre a distribuição de probabilidade prevista pelo modelo e a distribuição real das palavras nos dados de treinamento. Minimizar a entropia cruzada ajuda o modelo a fazer previsões mais precisas e contextualmente relevantes.

Outra métrica relacionada, frequentemente analisada durante o treinamento e validação, é a **perplexidade (perplexity loss)**. Ela mede quão bem o modelo consegue prever a próxima palavra em uma sequência, onde valores mais baixos indicam melhor compreensão da linguagem e do contexto.

No entanto, após o treinamento, precisamos avaliar a *qualidade* do texto final gerado pelo modelo. É aqui que as métricas ROUGE se tornam essenciais.

### O que é ROUGE?

**ROUGE** é um conjunto de métricas projetado para avaliar automaticamente a qualidade de textos gerados por máquinas, comparando-os com um ou mais textos de referência escritos por humanos (conhecidos como "ground truth" ou "referência"). A ideia central é medir a **semelhança** entre o texto gerado pelo sistema (hipótese) e o(s) texto(s) de referência.

ROUGE foca principalmente em medir a **sobreposição de unidades textuais**, como n-grams (sequências contíguas de palavras), entre os textos. As métricas são "orientadas a recall" (Recall-Oriented) porque originalmente foram pensadas para avaliar se o conteúdo importante da(s) referência(s) estava presente no resumo gerado, mas também incorporam medidas de precisão.

**Componentes Chave de ROUGE:**

1.  **Texto Gerado (Hipótese):** O texto produzido pelo modelo de linguagem que está sendo avaliado.
2.  **Texto(s) de Referência (Ground Truth):** Um ou mais textos de alta qualidade (geralmente escritos por humanos) que representam a saída ideal para a tarefa (por exemplo, um resumo humano ideal).
3.  **N-grams:** Sequências contíguas de 'n' itens (geralmente palavras) de um texto.
    *   **Unigrama (1-gram):** Palavra individual (ex: "o", "gato", "sentou").
    *   **Bigrama (2-gram):** Par de palavras adjacentes (ex: "o gato", "gato sentou").
    *   **Trigrama (3-gram):** Trio de palavras adjacentes (ex: "o gato sentou").

ROUGE calcula a sobreposição desses n-grams para avaliar o quão bem o texto gerado captura a informação presente no texto de referência.

### Variantes Comuns de ROUGE

Existem várias variantes das métricas ROUGE, cada uma focando em um aspecto ligeiramente diferente da qualidade do texto. As mencionadas no contexto do "Autopilot" são:

1.  **ROUGE-N (ROUGE-1, ROUGE-2)**
    *   **Descrição:** Esta é a métrica ROUGE fundamental. Mede a sobreposição de n-grams entre o texto gerado e o(s) texto(s) de referência. O valor de 'n' pode ser ajustado.
    *   **ROUGE-1:** Mede a sobreposição de **unigramas** (palavras individuais). Avalia o quanto das palavras individuais presentes na referência também estão presentes no texto gerado. É um indicador da sobreposição de *conteúdo* em nível lexical.
        *   *Foco:* Relevância de palavras-chave individuais.
    *   **ROUGE-2:** Mede a sobreposição de **bigramas** (pares de palavras adjacentes). Avalia o quanto das frases curtas ou pares de palavras co-ocorrentes na referência estão presentes no texto gerado. Captura melhor a fluidez e a estrutura local do que o ROUGE-1.
        *   *Foco:* Correspondência de frases curtas e co-ocorrência de palavras.
    *   **Cálculo (Conceitual):** Para cada variante ROUGE-N, geralmente são calculados a *Precisão*, o *Recall* e o *F1-Score*:
        *   **Recall:** (Número de n-grams sobrepostos) / (Número total de n-grams na *referência*). Mede: Quantos n-grams da referência foram capturados?
        *   **Precisão:** (Número de n-grams sobrepostos) / (Número total de n-grams no texto *gerado*). Mede: Quantos n-grams gerados são relevantes (estão na referência)?
        *   **F1-Score:** A média harmônica da Precisão e do Recall (2 * (Precisão * Recall) / (Precisão + Recall)). Fornece um balanço entre os dois.

2.  **ROUGE-L**
    *   **Descrição:** ROUGE-L (Longest Common Subsequence - Subsequência Comum Mais Longa) mede a subsequência comum mais longa (LCS) entre o texto gerado e o texto de referência. Diferente de n-grams, uma subsequência não exige que as palavras sejam contíguas, mas **preserva a ordem** delas.
    *   **Exemplo de LCS:** Se Texto A = "o gato rápido sentou" e Texto B = "o gato preto sentou", a LCS é "o gato sentou" (comprimento 3).
    *   **Vantagem:** Considera a estrutura da sentença e a ordem das palavras em maior medida do que ROUGE-N, o que pode ser importante para avaliar a coerência.
    *   **Cálculo:** Similarmente ao ROUGE-N, calcula-se Precisão, Recall e F1-Score baseados no comprimento da LCS.

3.  **ROUGE-LSum (ou ROUGE-L-SUM)**
    *   **Descrição:** ROUGE-L-SUM (Longest Common Subsequence for Summarization) é uma variação do ROUGE-L especificamente projetada para avaliar **sumarização de texto**.
    *   **Funcionamento:** Em vez de calcular a LCS sobre o texto inteiro, o ROUGE-LSum tipicamente calcula a LCS para cada sentença na referência e no resumo gerado e, de alguma forma, agrega esses resultados (por exemplo, somando os comprimentos das LCSs no nível da sentença). O "Sum" no nome refere-se a essa agregação, focando na cobertura das ideias principais distribuídas ao longo do resumo.
    *   **Importância:** Assim como ROUGE-L, leva em conta a ordem das palavras, o que é particularmente relevante para a qualidade de resumos, onde a estrutura frasal importa.

### Interpretação dos Scores ROUGE

*   **Valores:** Os scores ROUGE (seja Recall, Precisão ou F1) variam tipicamente entre 0 e 1 (ou 0% e 100%).
*   **Interpretação Geral:** Valores mais altos indicam maior semelhança entre o texto gerado e o texto de referência. Um score ROUGE-1 de 0.75 significa que 75% dos unigramas relevantes (considerando F1) se sobrepõem.
*   **Contexto é Chave:** Um "bom" score ROUGE depende muito da tarefa, da qualidade das referências e do comprimento dos textos. Comparar scores ROUGE é mais significativo entre diferentes modelos avaliados no *mesmo* conjunto de dados e referências.
*   **Limitações:** ROUGE foca na sobreposição lexical (palavras exatas ou sequências). Pode não capturar completamente:
    *   **Similaridade Semântica:** Duas frases podem significar o mesmo usando palavras diferentes (sinônimos, paráfrases), o que ROUGE pode penalizar.
    *   **Fluência e Coerência:** Um texto pode ter alto ROUGE, mas ser gramaticalmente incorreto ou incoerente.
    *   **Factualidade:** ROUGE não verifica se a informação gerada é factualmente correta, apenas se ela se sobrepõe à referência.

### Conclusão

As métricas ROUGE (ROUGE-1, ROUGE-2, ROUGE-L, ROUGE-LSum) são ferramentas padrão e valiosas para a avaliação quantitativa de tarefas de geração de texto, como sumarização e tradução, no contexto de LLMs. Elas fornecem uma medida objetiva de quão bem o texto gerado por um modelo captura o conteúdo e, em alguns casos (ROUGE-L/LSum), a estrutura do texto de referência. Embora tenham limitações, são amplamente utilizadas por sua simplicidade, interpretabilidade e correlação razoável com o julgamento humano em muitas tarefas, especialmente na sumarização. Entender o que cada variante mede ajuda a interpretar melhor os resultados da avaliação de modelos de linguagem.

---