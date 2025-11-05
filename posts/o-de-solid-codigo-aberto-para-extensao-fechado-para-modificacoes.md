---
title: 'O de SOLID: Código Aberto para Extensão, Fechado para Modificações'
description: Descubra como aplicar esse princípio pode tornar seu sistema mais flexível, seguro e preparado para evoluir com novas funcionalidades — sem precisar reescrever o que já funciona.
date: 2025-06-12
image: /assets/s-de-solid-o-poder-da-responsabilidade-unica-no-codigo.png
author:
  name: Carlos Alexandre
  avatar: /avatar.jpg
---

Introdução
Neste artigo, vamos explorar o segundo princípio da sigla SOLID: o Open/Closed Principle (Princípio Aberto/Fechado), fundamental para construir sistemas flexíveis e preparados para mudanças.

O Princípio Aberto/Fechado (OCP) defende que módulos, classes ou funções devem estar abertos para extensão, mas fechados para modificação. Em outras palavras, é possível adicionar novos comportamentos ao sistema sem alterar o código já existente.

Ao aplicar esse princípio corretamente, você evita efeitos colaterais indesejados e facilita a evolução do software de forma segura e previsível. Vamos entender como identificar pontos de melhoria e adotar estratégias que favoreçam a extensibilidade sem comprometer a estabilidade do seu código.

🧩 Open/Closed: Aberto para extensão, fechado para modificação
Seguir o princípio Open/Closed significa que nossos módulos, classes ou funções devem estar abertos para extensão, mas fechados para modificação. Ou seja, devemos conseguir adicionar novos comportamentos sem alterar o código existente.

Quando esse princípio é ignorado, surgem diversos problemas:

Alto risco de regressões: modificar código que já está funcionando pode quebrar funcionalidades que antes estavam estáveis.
Violação da responsabilidade única: para "encaixar" uma nova lógica, acabamos inchando estruturas que deveriam ter foco claro.
Dificuldade em escalar o sistema: A cada nova regra ou variação, precisamos alterar o mesmo bloco de código — o que se torna insustentável com o tempo.
Baixa adaptabilidade: O sistema se torna rígido, pois qualquer novo cenário exige mudanças diretas na base existente.
Aplicar o Open/Closed na prática envolve o uso de abstrações, interfaces e polimorfismo, permitindo que o sistema evolua por composição, sem comprometer o que já está funcionando. Isso resulta em um código mais estável, testável e preparado para crescer com segurança.

❌ Exemplo que viola o Open/Closed
Imagine um sistema que calcula o salário de diferentes tipos de funcionários. O código abaixo quebra o princípio, pois sempre que um novo tipo de funcionário é adicionado, precisamos alterar a estrutura calcularSalario():

function calcularSalario(funcionario) {
if (funcionario.tipo === 'desenvolvedor') {
return funcionario.salarioBase + 1000;
} else if (funcionario.tipo === 'designer') {
return funcionario.salarioBase + 500;
} else if (funcionario.tipo === 'gerente') {
return funcionario.salarioBase + 2000;
} else {
return funcionario.salarioBase;
}
}
Está errado, pois toda vez que um novo tipo de funcionário for adicionado (ex: "analista", "estagiário", etc.), o código dessa função precisa ser modificado.

✅ Exemplo que segue o Open/Closed
class Funcionario {
constructor(salarioBase) {
this.salarioBase = salarioBase;
}

calcularSalario() {
return this.salarioBase;
}
}

class Desenvolvedor extends Funcionario {
calcularSalario() {
return this.salarioBase + 1000;
}
}

class Designer extends Funcionario {
calcularSalario() {
return this.salarioBase + 500;
}
}

class Gerente extends Funcionario {
calcularSalario() {
return this.salarioBase + 2000;
}
}
Como usar:

const funcionarios = [
new Desenvolvedor(3000),
new Designer(2500),
new Gerente(5000)
];

funcionarios.forEach(f => {
console.log(f.calcularSalario());
});
Dessa forma podemos criar uma nova classe "Estagiario" com sua própria lógica, sem alterar o código existente.

📌 Como identificar violações do Princípio Aberto/Fechado no seu código
Entender o Open/Closed na teoria é importante — mas saber identificar quando seu código está violando esse princípio é essencial para criar sistemas realmente escaláveis e sustentáveis.

O princípio diz que “entidades de software devem estar abertas para extensão, mas fechadas para modificação”. Ou seja: você deve poder adicionar novos comportamentos sem precisar alterar o código existente.

🚨 Sinais comuns de violação do Open/Closed:
Uso excessivo de if, else if ou switch para definir comportamentos com base em tipos, status, papéis, cargos, etc. Cada novo caso exige editar a função, o que vai contra o princípio.
Funções que crescem a cada nova regra: toda vez que surge um novo requisito, você volta na mesma função para incluir mais um bloco condicional.
Necessidade constante de alterar código que já estava funcionando: qualquer novo comportamento exige modificar lógica antiga — o que aumenta o risco de bugs regressivos.
Dificuldade de reaproveitamento: o código não permite isolar apenas o que muda; você sempre precisa duplicar ou alterar a lógica central.
Falta de estratégias isoladas: não há separação clara entre o “o que fazer” e “como fazer”, dificultando a adição de novos comportamentos de forma plugável.
💡 Dica prática:
Procure por trechos do código com muitos blocos condicionais tratando “casos” diferentes. Agora imagine:

“Se amanhã surgir um novo caso, vou precisar alterar esse mesmo trecho de código?”
Se a resposta for sim, o código provavelmente não está seguindo o Open/Closed.

🧠 Reescrevendo código legado aplicando o Princípio Aberto/Fechado (OCP)
Refatorar código legado exige cuidado, mas aplicar o Open/Closed Principle é uma ótima maneira de tornar o sistema mais extensível e seguro contra regressões.

O objetivo aqui é evitar modificar código existente sempre que surge um novo requisito, permitindo extensões via composição ou novos módulos — e não edição direta da lógica central.

🔴 Código legado (violando o Open/Closed):
function calcularDesconto(pedido) {
if (pedido.tipo === 'comum') {
return pedido.total _ 0.05;
} else if (pedido.tipo === 'vip') {
return pedido.total _ 0.1;
} else if (pedido.tipo === 'funcionario') {
return pedido.total \* 0.15;
} else {
return 0;
}
}
Sempre que surge um novo tipo de cliente, é necessário voltar nessa função e modificar o código — o que vai contra o princípio de estar “fechado para modificação”.

✅ Refatorado com Open/Closed:
const regrasDesconto = {
comum: (pedido) => pedido.total _ 0.05,
vip: (pedido) => pedido.total _ 0.1,
funcionario: (pedido) => pedido.total \* 0.15,
};

function calcularDesconto(pedido) {
const regra = regrasDesconto[pedido.tipo];
return regra ? regra(pedido) : 0;
}
Agora, para adicionar um novo tipo de cliente, basta adicionar uma nova entrada em regrasDesconto, sem precisar tocar na função principal calcularDesconto.

💡 Benefícios de Aplicar o Princípio Aberto/Fechado (OCP)
Adotar o OCP transforma a maneira como o software evolui, tornando-o mais robusto e adaptável. Em vez de "cirurgias" arriscadas no código central, passamos a fazer "acoplamentos" seguros de novas peças. Os principais benefícios são:

Extensibilidade sem Riscos: A principal vantagem é poder adicionar novas funcionalidades (como um novo tipo de funcionário ou uma nova regra de desconto) sem tocar no código que já está testado e em produção. Isso reduz drasticamente o risco de quebrar o que já funciona.
Menor Risco de Regressões: Como o código existente não é modificado, a chance de introduzir bugs em funcionalidades antigas (regressões) diminui drasticamente. Os testes se concentram apenas na nova extensão.
Código Mais Limpo e Previsível: Estruturas complexas de if/else if/else ou switch são substituídas por arquiteturas mais limpas, como polimorfismo ou o padrão Strategy. Isso torna o código mais fácil de ler e entender.
Desacoplamento e Coesão: O princípio promove o desacoplamento, separando a lógica central (o "o quê") das implementações específicas (o "como"). Cada nova implementação é coesa e tem uma única responsabilidade.
Colaboração Facilitada em Equipes: Permite que diferentes desenvolvedores trabalhem em novas funcionalidades de forma paralela, criando novas classes ou módulos sem gerar conflitos de merge em um arquivo central.
Se adicionar uma nova regra de negócio exige alterar uma função ou classe que já existe, esse é o sinal de alerta para refatorar e aplicar o OCP.

✨ Conclusão
O Princípio do Aberto/Fechado (OCP) é mais do que uma regra; é uma filosofia que prepara seu software para o futuro. Ao estabelecer que o código deve ser fechado para modificação, mas aberto para extensão, construímos uma base sólida que resiste ao teste do tempo e às mudanças constantes de requisitos.

Os benefícios são diretos e impactantes:

Estabilidade e Segurança: Evitamos alterar código testado e funcional.
Flexibilidade para Evoluir: Adicionar novas funcionalidades se torna uma tarefa simples e de baixo risco.
Manutenção Simplificada: O código se torna mais legível e desacoplado.
Código Resiliente: O sistema fica menos propenso a quebrar com a adição de novos comportamentos.
Ao longo deste artigo, vimos como transformar condicionais complexos em arquiteturas plugáveis, seja por meio de herança e polimorfismo ou com estratégias de composição. A capacidade de identificar e corrigir violações do OCP é o que diferencia um sistema frágil de um sistema verdadeiramente escalável.

Dominar o OCP é um passo fundamental para construir software que não apenas funciona hoje, mas que pode crescer e se adaptar amanhã com o mínimo de atrito. É um investimento na longevidade do projeto, permitindo que a equipe adicione valor continuamente, em vez de consertar constantemente o que já foi construído.
