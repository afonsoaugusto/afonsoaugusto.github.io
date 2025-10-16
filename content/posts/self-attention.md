---
title: "Domain2 - Self-Attention"
date: 2025-04-07 00:00:00 +0000
categories: ["article"]
draft: false
---


O mecanismo de **Self-Attention** (autoatenção) é uma inovação crucial da arquitetura **Transformer** que permite ao modelo ponderar a importância de diferentes partes da sequência de entrada ao processá-la. Diferente de modelos sequenciais anteriores, como as Redes Neurais Recorrentes (RNNs), que processam a entrada um elemento por vez, a autoatenção permite que o modelo estabeleça conexões diretas entre todos os tokens da sequência, independentemente de sua distância posicional.

**Funcionamento Detalhado:**

Para cada token na sequência de entrada, a camada de autoatenção calcula três vetores:

1.  **Vetor de Consulta (Query - Q):** Representa o que o token "está procurando" ou com o que ele está relacionado dentro da sequência.
2.  **Vetor de Chave (Key - K):** Representa o que outros tokens "oferecem" ou sobre o que eles contêm informações relevantes.
3.  **Vetor de Valor (Value - V):** Contém a informação real associada a cada token, que será agregada para formar a saída.

Esses vetores são obtidos através da multiplicação do embedding do token de entrada por três matrizes de pesos diferentes, aprendidas durante o treinamento do modelo.

O processo de autoatenção para cada token de entrada envolve os seguintes passos:

1.  **Cálculo das Pontuações de Atenção (Attention Scores):** Para cada par de tokens na sequência, o modelo calcula uma pontuação que indica o quão relevante um token é para outro. Isso é tipicamente feito calculando o produto escalar entre o vetor de consulta de um token e o vetor de chave de outro token. Produtos escalares maiores indicam maior similaridade e, portanto, maior relevância.

2.  **Escalonamento:** As pontuações são então divididas pela raiz quadrada da dimensão dos vetores de chave (dk). Isso ajuda a estabilizar os gradientes durante o treinamento, especialmente para dimensões de vetores maiores.

3.  **Aplicação da Função Softmax:** As pontuações escalonadas são passadas por uma função softmax. O softmax normaliza as pontuações, transformando-as em probabilidades que somam 1 para cada token de consulta. Essas probabilidades representam os "pesos de atenção" – o quanto cada token na sequência de entrada deve contribuir para a representação do token de consulta.

4.  **Cálculo da Soma Ponderada:** Finalmente, o modelo calcula uma soma ponderada dos vetores de valor de todos os tokens na sequência. Os pesos utilizados nesta soma são as probabilidades de atenção calculadas no passo anterior. Os tokens que receberam maior atenção (maiores pesos) terão uma contribuição maior para o vetor de saída do token de consulta.

O resultado desse processo é um novo vetor para cada token de entrada, que agora contém informações contextuais ponderadas de todos os outros tokens na sequência, com base em sua relevância para o token original.

**Múltiplas Cabeças de Atenção (Multi-Head Attention):**

Os Transformers frequentemente empregam o conceito de "múltiplas cabeças de atenção". Em vez de realizar o processo de autoatenção apenas uma vez, a entrada é projetada em múltiplos conjuntos de vetores de consulta, chave e valor (cada conjunto representando uma "cabeça"). O processo de autoatenção é realizado independentemente em cada cabeça, e as saídas resultantes são concatenadas e, em seguida, projetadas novamente em uma única saída. Isso permite que o modelo capture diferentes tipos de relações e informações dentro da sequência, melhorando sua capacidade de compreensão contextual.

**Benefícios da Autoatenção:**

*   **Captura de Dependências de Longo Alcance:** A autoatenção permite que o modelo estabeleça conexões diretas entre tokens distantes na sequência, superando a limitação das RNNs de terem dificuldade em aprender dependências de longo prazo devido ao desaparecimento ou explosão dos gradientes.
*   **Paralelização:** Ao contrário das RNNs, que processam a entrada sequencialmente, o cálculo da autoatenção para diferentes posições na sequência pode ser feito em paralelo, o que acelera significativamente o treinamento e a inferência.
*   **Compreensão Contextual:** Ao ponderar a importância de diferentes palavras em relação a outras, a autoatenção permite que o modelo entenda o contexto de cada palavra dentro da frase. Por exemplo, na frase "O banco da praça estava sujo, então fui ao banco sacar dinheiro", a autoatenção ajudaria o modelo a entender que "banco" se refere a lugares diferentes em cada instância.
*   **Interpretabilidade (em certa medida):** Os pesos de atenção podem fornecer insights sobre quais partes da entrada o modelo considera mais importantes ao processar uma determinada parte.

Em resumo, a autoatenção é um mecanismo poderoso que permite aos modelos Transformer processar sequências de forma eficiente e capturar relações complexas entre os elementos, sendo fundamental para o sucesso da IA Generativa em diversas tarefas de linguagem natural e outras modalidades.