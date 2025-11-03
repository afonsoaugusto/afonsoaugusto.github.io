---
title: "5 Verdades Surpreendentes Sobre Custos no Kubernetes que Aprendemos com a Pesquisa do Google"
date: 2025-11-03 12:00:00 +0000
categories: ["article"]
draft: false
---

Muitas equipes de tecnologia adotam o Kubernetes com uma promessa clara: escalabilidade, resiliência e agilidade. No entanto, o que começa como uma solução poderosa frequentemente se transforma em uma fonte de surpresa desagradável quando a fatura da nuvem chega. Times que esperavam eficiência acabam se deparando com um crescimento descontrolado de custos, um paradoxo que os leva a uma busca incessante por otimizações.

Para resolver esse problema de forma sustentável, é preciso ir além das dicas superficiais de "desligar o que não está em uso". A verdadeira otimização de custos no Kubernetes revela uma tensão fundamental entre três pilares: custo, confiabilidade e observabilidade. Cortar gastos indiscriminadamente, sem entender como isso afeta a estabilidade, é uma receita para o desastre. Este artigo é um guia para dominar esse equilíbrio.

Com base em uma extensa pesquisa do Google sobre o estado da otimização de custos no Kubernetes e nas melhores práticas do Google Kubernetes Engine (GKE), revelaremos cinco verdades contraintuitivas e impactantes. Essas verdades mudarão a maneira como você pensa sobre o gerenciamento de seus clusters, transformando sua abordagem de uma simples caça a reduções para uma estratégia inteligente de maximização de valor.

## Verdade 1: 'Requests' Não São Estimativas, São o Contrato de Serviço com o Kubernetes

O primeiro passo para otimizar os custos no Kubernetes é também o mais negligenciado. "Workload rightsizing" é o processo de ajustar as solicitações (requests) de CPU e memória dos seus Pods para que correspondam ao seu uso real. Mas, estrategicamente, é muito mais do que isso: é o ato de definir deliberadamente o contrato de serviço do seu aplicativo com o orquestrador.

Essa definição de recursos determina a Classe de Qualidade de Serviço (QoS) de um Pod, um conceito crucial que o Kubernetes usa para priorizar cargas de trabalho sob pressão:

- **Guaranteed**: Quando requests e limits são idênticos. São os últimos Pods a serem terminados.
- **Burstable**: Quando os requests são menores que os limits. Têm prioridade intermediária.
- **BestEffort**: Quando não há requests nem limits. São os primeiros a serem eliminados.

Acertar no "rightsizing" é, portanto, o sinal mais crucial para uma otimização eficaz. A pesquisa também descobriu que o workload rightsizing tem a maior oportunidade de reduzir o desperdício de recursos.

Em essência, as solicitações de recursos são a moeda com a qual você negocia estabilidade e densidade com o orquestrador. Defini-las incorretamente é como ir a um leilão sem entender o valor do que está sendo ofertado. O Kubernetes usa essa informação para tomar decisões críticas sobre agendamento, autoescalonamento e quais Pods devem ser terminados sob pressão. Ignorar isso não é apenas desperdiçar dinheiro; é comprometer a estabilidade de todo o sistema.

## Verdade 2: A Zona de Perigo 'At Risk' — Onde a Economia Cega Sabota a Confiabilidade

Nem toda otimização é benéfica. Na tentativa de economizar, muitas equipes caem em uma armadilha perigosa. A pesquisa do Google identificou um segmento de clusters chamado "At Risk" — clusters que, ao tentar otimizar, criam graves riscos de confiabilidade para suas aplicações.

A causa raiz, diretamente ligada ao nosso primeiro ponto, é o uso excessivo de Pods da classe de QoS BestEffort (sem nenhuma solicitação) e de Pods Burstable com subprovisionamento de memória (solicitações de memória muito abaixo do uso real). Para o Kubernetes, esses Pods são classificados como de baixa prioridade e, portanto, os primeiros na fila para serem eliminados quando um nó fica sobrecarregado — sem aviso prévio ou período de encerramento gradual.

As consequências dessa prática são severas e, muitas vezes, silenciosas, manifestando-se como falhas difíceis de diagnosticar. A pesquisa aponta que há maior risco de problemas de confiabilidade intermitentes e difíceis de depurar, causados pela forma como o Kubernetes recupera recursos sob pressão no nó.

Na prática, isso se traduz em aplicações que param de funcionar sem um motivo claro, causando uma péssima experiência para o usuário final e um pesadelo de depuração para as equipes de desenvolvimento. É o exemplo clássico de uma economia que, no final, custa muito mais caro em instabilidade e horas de engenharia.

## Verdade 3: O Cluster Autoscaler Precisa da Sua Ajuda (e Não Faz Milagres Sozinho)

Existe uma crença comum no mundo Kubernetes: "Basta ativar o Cluster Autoscaler (CA) e meus custos diminuirão automaticamente". Embora o CA seja uma ferramenta poderosa, essa ideia é uma meia-verdade. Sozinho, ele não pode fazer milagres.

A pesquisa do Google desmistifica essa noção, mostrando que a eficácia do Cluster Autoscaler depende diretamente de outra camada de automação: o autoescalonamento das cargas de trabalho. Habilitar o CA não é suficiente para fazer um cluster reduzir de tamanho durante os períodos de baixa demanda. Para autoescalar um cluster, é necessário configurar corretamente o autoescalonamento de workloads (por exemplo, HPA e VPA).

Pense no Cluster Autoscaler como um gerente de hotel que só pode fechar andares inteiramente vazios. O Horizontal Pod Autoscaler (HPA) e o Vertical Pod Autoscaler (VPA) são os recepcionistas que primeiro precisam consolidar os hóspedes em menos quartos, esvaziando andares inteiros para que o gerente possa agir e economizar energia. Primeiro, o HPA ou o VPA precisam reduzir o número ou o tamanho dos Pods. Isso esvazia os nós. Só então o Cluster Autoscaler pode identificar esses nós ociosos e removê-los para efetivamente economizar dinheiro.

## Verdade 4: A Ilusão do Espaço Vazio — Por Que um Baixo 'Bin Packing' Pode Ser um Alarme Falso

"Cluster bin packing" é um termo técnico para a eficiência com que o Kubernetes consegue "empacotar" os Pods nos nós disponíveis, com base nos recursos que eles solicitam em seus manifestos, não no que realmente usam.

Aqui reside uma armadilha contraintuitiva. Um administrador de plataforma pode olhar para seu cluster, notar um "bin packing" baixo — ou seja, muito espaço aparentemente livre nos nós — e concluir que está desperdiçando recursos. A reação imediata seria tentar "compactar" o cluster, removendo nós para forçar um empacotamento mais denso.

Esta é uma armadilha porque o "bin packing" é calculado com base nas solicitações de recursos, não no uso real. Como vimos no perfil "At Risk", o espaço que parece vazio está sendo secretamente consumido por Pods BestEffort e Burstable que operam muito acima de suas solicitações. O espaço não está realmente vazio; ele está sendo ocupado por uma utilização "invisível" para o agendador.

O paradoxo é que a tentativa de otimizar esse "espaço livre" agrava o problema. Ao remover nós e forçar a compactação, a pressão sobre os recursos dos nós restantes aumenta drasticamente. Isso leva a mais interrupções de Pods por falta de memória ("OOMKilled"), resultando em maior instabilidade e degradação do serviço.

## Verdade 5: A Otimização Sustentável Não é Sobre YAML, é Sobre Cultura

Ferramentas e configurações são essenciais, mas a otimização de custos sustentável e em escala não vem apenas de ajustes técnicos. Ela nasce de uma mudança cultural. A pesquisa do Google reforça que a otimização é uma "jornada contínua" e uma "responsabilidade compartilhada" entre administradores de plataforma e desenvolvedores de aplicações.

Construir essa cultura de consciência de custos exige as ferramentas certas para capacitar as equipes. O GKE oferece recursos projetados para fomentar exatamente essa colaboração:

- **Impulsiona a Apropriação (Ownership)**: O GKE cost allocation transforma o custo da nuvem de um problema centralizado em uma responsabilidade distribuída. Ele permite atribuir os custos do cluster a namespaces ou labels específicos, possibilitando modelos de "showback" e "chargeback". No entanto, como a pesquisa aponta, a precisão desses modelos é comprometida se os Pods não definirem suas solicitações corretamente, ligando diretamente a cultura de custos ao "rightsizing".

- **Automatiza a Disciplina**: O Policy Controller codifica as melhores práticas de otimização como políticas não negociáveis. É possível, por exemplo, criar uma política que impeça a implantação de qualquer carga de trabalho que não tenha solicitações de CPU e memória definidas, garantindo que as melhores práticas sejam seguidas desde o início.

- **Cria uma Linguagem Comum**: Os painéis de otimização de custos integrados ao console do GKE fornecem uma fonte única da verdade. Eles mostram de forma clara a relação entre os recursos alocados (capacidade dos nós), solicitados (o que os Pods pedem) e usados (o consumo real), permitindo que todos tomem decisões informadas com base nos mesmos dados.

## Conclusão: Uma Nova Pergunta para Guiar a Otimização

A verdadeira otimização no Kubernetes, como os dados mostram, é um equilíbrio delicado entre custo e confiabilidade, e não uma simples caça a reduções. Passamos de uma visão de "requests" como meros números em um YAML para entendê-los como a linguagem fundamental que o Kubernetes usa para equilibrar custo e estabilidade. A jornada exige uma mudança de mentalidade, onde a eficiência se torna uma responsabilidade de todos, suportada por visibilidade, automação e uma cultura de colaboração.

Em vez de perguntar "Como podemos cortar nossa conta do Kubernetes?", que tal começarmos a perguntar: "Como podemos extrair o máximo de valor e confiabilidade de cada real que investimos?"
