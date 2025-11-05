---
title: 'L de SOLID: Substituições Sem Surpresas com o Princípio de Liskov'
description: 'Já tentou trocar uma classe por outra e tudo quebrou? O Princípio da Substituição de Liskov evita isso: subclasses devem poder substituir suas superclasses sem causar erros. Isso garante uma hierarquia de classes coerente, confiável e fácil de manter e evoluir.'
date: 2025-07-18
image: /assets/s-de-solid-o-poder-da-responsabilidade-unica-no-codigo.png
author:
  name: Carlos Alexandre
  avatar: /avatar.jpg
---

Introdução
O Princípio da Substituição de Liskov foi idealizado pela cientista da computação Barbara Liskov, em 1987. Ela propôs esse conceito como uma maneira formal de garantir que a herança em sistemas orientados a objetos seja usada de forma segura e previsível.

A definição original é bastante teórica e pode parecer confusa à primeira vista:

“Seja q(x) uma propriedade que se pode provar do objeto x do tipo T. Então, q(y) também deve ser possível provar para o objeto y do tipo S, sendo S um subtipo de T.”
Traduzindo: se você tem uma função ou propriedade que funciona com objetos do tipo T, ela deve continuar funcionando corretamente mesmo que receba objetos do tipo S, que é uma subclasse de T.

Se isso ainda parece abstrato, não se preocupe. A seguir, vamos explorar o que esse princípio realmente significa na prática — com exemplos claros e situações comuns onde ele é frequentemente ignorado (e os problemas que isso pode causar).

🔁 Liskov Substitution: Substituições sem surpresas
Aplicar o princípio Liskov Substitution significa garantir que subclasses possam ser usadas no lugar de suas superclasses sem alterar o comportamento do sistema.

Quando esse princípio é ignorado, criamos relações de herança frágeis e inconsistentes, que causam falhas inesperadas, dificultam a manutenção e comprometem a confiabilidade do código.

Algumas das principais consequências incluem:

Comportamento inesperado em tempo de execução: métodos sobrescritos podem introduzir exceções, retornar valores diferentes ou alterar regras de negócio de forma silenciosa.
Testes quebrando sem motivo aparente: um teste que passa para a superclasse pode falhar para a subclasse, mesmo que o código pareça estar “correto”.
Contratos violados: se um código depende de um comportamento específico da superclasse, e a subclasse o ignora ou altera, o sistema perde consistência.
Herança mal utilizada: subclasses que “quebram” o funcionamento esperado são um sinal claro de que talvez o relacionamento de herança não deva existir.
Esses problemas tornam o sistema difícil de evoluir, e o uso de herança — que deveria trazer reutilização e flexibilidade — acaba sendo fonte de bugs difíceis de identificar e resolver.

Nos próximos tópicos, vamos ver como identificar violações ao LSP e como criar hierarquias de classes mais seguras e previsíveis, na prática.

❌ Exemplo de violação do Liskov Substitution Principle
Imagine que estamos modelando um sistema simples de aves. Todas as aves podem comer, e muitas delas podem voar. Então criamos a seguinte classe base:

class Ave {
voar() {
console.log("Voando...");
}
}
Agora, criamos uma subclasse para representar uma Avestruz:

class Avestruz extends Ave {
voar() {
throw new Error("Avestruzes não voam!");
}
}
A ideia parece funcionar — até que usamos essa classe em algum ponto do sistema:

function fazerVoar(ave: Ave) {
ave.voar();
}

const ave1 = new Ave();
const ave2 = new Avestruz();

fazerVoar(ave1); // "Voando..."
fazerVoar(ave2); // 💥 Erro: Avestruzes não voam!
O código compila sem problemas, mas falha em tempo de execução. Isso acontece porque Avestruz não respeita o contrato da classe base Ave. A função fazerVoar espera que qualquer Ave possa voar, o que não é verdade para a avestruz.

✅ Exemplo que respeita o Liskov Substitution Principle
Vamos reestruturar o exemplo anterior com o uso de interfaces separadas para comportamentos distintos. Assim, apenas as aves que realmente voam terão o método voar().

Definindo as abstrações corretas:

interface Ave {
comer(): void;
}

interface AveQueVoa extends Ave {
voar(): void;
}
Agora, vamos implementar as classes de forma coerente:

class Pardal implements AveQueVoa {
comer() {
console.log("Pardal comendo sementes...");
}

voar() {
console.log("Pardal voando...");
}
}

class Avestruz implements Ave {
comer() {
console.log("Avestruz comendo frutas...");
}
}
Utilizando corretamente no sistema:

function alimentarAve(ave: Ave) {
ave.comer();
}

function soltarParaVoar(ave: AveQueVoa) {
ave.voar();
}

const pardal = new Pardal();
const avestruz = new Avestruz();

alimentarAve(pardal); // ✅ OK
alimentarAve(avestruz); // ✅ OK

soltarParaVoar(pardal); // ✅ OK
// soltarParaVoar(avestruz); // ❌ Erro de compilação — e é exatamente isso que queremos!
🧩 Liskov e Interface Segregation caminham juntos
Este exemplo também mostra como o Princípio da Segregação de Interface (Interface Segregation Principle — ISP) ou seja, a letra I de SOLID está diretamente ligado ao LSP.

Ao separar os comportamentos em interfaces específicas (Ave e AveQueVoa), garantimos que cada classe só implemente o que realmente faz sentido para ela. Assim:

Avestruz não é forçada a implementar um método voar() que ela nunca usaria (respeitando o ISP).
E como consequência, ela também não quebra o comportamento esperado ao ser usada como uma Ave (respeitando o LSP).
➡️ Ou seja, seguir bem o ISP ajuda naturalmente a seguir o LSP, criando hierarquias de classes mais seguras, coesas e reutilizáveis.

📌 Como identificar violações do Princípio da Substituição de Liskov no seu código
Entender o Liskov Substitution Principle na teoria é importante — mas saber identificar quando seu código está violando esse princípio é essencial para garantir uma hierarquia de classes segura, previsível e reutilizável.

O princípio diz que “subtipos devem ser substituíveis por seus tipos-base sem alterar o comportamento esperado do sistema”. Ou seja: se um código funciona com uma classe base, ele também deve funcionar com qualquer subclasse — sem precisar de adaptações ou gerar erros inesperados.

🚨 Sinais comuns de violação do Liskov Substitution:
Sobrescritas que lançam exceções onde a superclasse não lançaria: subclasses que “quebram” funcionalidades esperadas da classe base.
Métodos sobrescritos com comportamento diferente: a subclasse altera o resultado, lógica ou efeitos colaterais de um método da superclasse, confundindo quem usa a classe base.
Necessidade de verificações com instanceof ou typeof: se o código precisa saber “qual subclasse está sendo usada” para funcionar corretamente, é sinal de que a substituição não é transparente.
Testes que passam para a superclasse, mas falham para a subclasse: indica que a subclasse não respeita o mesmo contrato esperado.
Herdar apenas por reuso de código: subclasses que não representam um real “é um” da superclasse costumam gerar substituições problemáticas.
💡 Dica prática:
Procure por métodos sobrescritos que mudam radicalmente o comportamento esperado ou que exigem comentários como "essa classe não faz isso, então lança erro". Agora pergunte:

“Se eu passar essa subclasse no lugar da classe base, o sistema vai continuar funcionando normalmente?”
Se a resposta for não, é provável que seu código esteja violando o LSP — e a herança está sendo usada de forma incorreta.

💡 Benefícios de aplicar o Princípio da Substituição de Liskov (LSP)
Adotar o LSP transforma a maneira como modelamos herança e polimorfismo, tornando o código mais seguro, previsível e coerente com a lógica do domínio. Quando seguimos esse princípio, criamos estruturas onde cada classe cumpre o que promete — sem surpresas desagradáveis durante a execução.

Os principais benefícios incluem:

Previsibilidade no uso de subclasses: qualquer parte do sistema que espera uma classe base pode usar uma subclasse sem medo de falhas inesperadas. Isso torna o comportamento do sistema mais estável e confiável.
Herança com propósito real: as relações de herança passam a fazer sentido conceitual, representando corretamente o famoso “é um” da orientação a objetos.
Redução de exceções e comportamentos não tratados: evitamos a criação de subclasses que precisam lançar erros ou ignorar funcionalidades herdadas, o que melhora a integridade e a legibilidade do código.
Facilidade de testes e manutenção: como o comportamento é consistente entre superclasse e subclasses, os testes não precisam ser duplicados ou ajustados caso mude a implementação.
Melhor uso de polimorfismo: o sistema se torna verdadeiramente polimórfico, permitindo a criação de componentes reutilizáveis, desacoplados e mais alinhados com boas práticas de design.
Se uma subclasse precisa sobrescrever métodos de forma que altere a lógica esperada ou quebrar o comportamento da superclasse, esse é um alerta claro de que o LSP está sendo violado — e que o design precisa ser repensado.

✨ Conclusão
O Princípio da Substituição de Liskov (LSP) vai além de uma boa prática — ele é um pilar para o uso correto de herança e polimorfismo. Quando respeitado, garante que nossas abstrações sejam sólidas, nossas hierarquias de classes sejam consistentes e que o sistema funcione de forma confiável mesmo à medida que cresce.

Os ganhos são visíveis e duradouros:

Coerência no comportamento das classes: substituir uma superclasse por uma subclasse não gera efeitos colaterais.
Confiança na reutilização: o sistema se torna mais previsível e confiável, mesmo com o uso intenso de herança.
Modelagem mais clara e fiel ao domínio: cada classe cumpre apenas o que realmente representa, sem herdar responsabilidades que não fazem sentido.
Base sólida para polimorfismo real: o código ganha flexibilidade sem sacrificar estabilidade.
Neste artigo, vimos como identificar estruturas que violam o LSP e como refatorá-las com base em boas abstrações, como a separação de interfaces e o uso de hierarquias bem definidas.

Dominar o LSP é fundamental para desenvolver sistemas orientados a objetos robustos e que possam evoluir com segurança, sem que o crescimento do projeto represente um risco à sua confiabilidade. É uma escolha arquitetural que reflete maturidade técnica e visão de longo prazo.
