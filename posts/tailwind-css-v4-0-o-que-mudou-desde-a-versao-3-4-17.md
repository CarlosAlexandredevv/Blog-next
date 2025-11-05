---
title: 'Tailwind CSS v4.0: O Que Mudou Desde a Versão 3.4.17?'
description: O Tailwind CSS 4 trouxe diversas melhorias e mudanças em relação à versão 3, incluindo otimizações de desempenho, remoção de classes antigas e novas funcionalidades para facilitar o desenvolvimento. Neste artigo, exploramos as principais diferenças e como essa atualização impacta seus projetos!
date: 2025-02-27
image: /assets/tailwind-css-v4-0-o-que-mudou-desde-a-versao-3-4-17.png
author:
  name: Carlos Alexandre
  avatar: /avatar.jpg
---

Introdução
Neste artigo, vamos explorar as novidades do Tailwind CSS 4.0 e como essa atualização impacta a maneira como desenvolvemos interfaces modernas e performáticas.

O Tailwind CSS 4.0 traz um novo mecanismo de build altamente otimizado, tornando a geração de estilos até 100 vezes mais rápida. Além disso, a nova versão adota tecnologias avançadas do CSS moderno, como camadas de cascata, propriedades registradas e a função color-mix(), permitindo maior flexibilidade e personalização.

Com menos dependências, instalação simplificada e novos utilitários, essa versão promete um fluxo de trabalho mais eficiente. Vamos entender essas mudanças e como atualizar seus projetos para aproveitar ao máximo o Tailwind CSS 4.0!

Otimizações de Desempenho
O Tailwind CSS 4.0 introduziu um novo mecanismo de build que melhora significativamente o desempenho. A principal vantagem é que a geração de estilos é até 100 vezes mais rápida em comparação com a versão anterior. Isso foi alcançado com a implementação de um processo de tree-shaking mais eficiente, que remove automaticamente o CSS não utilizado de forma mais agressiva, resultando em builds mais rápidos e em arquivos finais menores.

Essa otimização beneficia especialmente grandes projetos, onde o tempo de compilação pode se tornar um gargalo. A velocidade da build permite uma experiência de desenvolvimento mais fluida e ágil, além de reduzir o tempo de espera entre as modificações e a atualização da página, melhorando a produtividade no processo de desenvolvimento.

Mudanças na Instalação e configuração
O Tailwind CSS 4.0 simplifica ainda mais o processo de instalação. Não é mais necessário configurar uma série de dependências complicadas ou arquivos de configuração extensivos. Agora, basta adicionar uma única linha de código no seu arquivo CSS para começar a utilizar o framework. Isso torna o processo mais direto e acessível, ideal para quem está começando a utilizar o Tailwind ou para quem quer um setup rápido.

Nova forma de realizar a instalação:
Utilizando PostCSS:
Instale o Tailwind CSS.
npm i tailwindcss @tailwindcss/postcss;
Adicione o plugin PostCSS no arquivo postcss.config.mjs.
export default {
plugins: ["@tailwindcss/postcss"],
};
Importe o Tailwind em seu CSS
@import "tailwindcss";
Para o Vite:
Instale o Tailwind CSS.
npm install tailwindcss @tailwindcss/vite
Se você for um usuário do Vite, agora você pode integrar o Tailwind usando @tailwindcss/vite em vez do PostCSS:
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
plugins: [
tailwindcss(),
],
})
Importe o Tailwind em seu CSS
@import "tailwindcss";
Você pode consultar diferentes métodos de instalação acessando o link da documentação abaixo https://tailwindcss.com/docs/installation/framework-guides

Suporte para Variáveis de Tema
O Tailwind CSS 4.0 introduziu um suporte mais robusto para variáveis CSS, permitindo maior flexibilidade e personalização no design. Agora, você pode definir valores dinâmicos diretamente no seu CSS usando variáveis registradas, tornando a personalização ainda mais poderosa.

Antes, a personalização no Tailwind era feita principalmente por meio do arquivo tailwind.config.js, onde você definia temas, cores e espaçamentos personalizados. Com o suporte a variáveis CSS, é possível ajustar estilos dinamicamente sem precisar modificar a configuração do Tailwind ou recompilar o projeto.

@import "tailwindcss";
@theme {
--font-display: "Satoshi", "sans-serif";
--breakpoint-3xl: 1920px;
--color-avocado-100: oklch(0.99 0 0);
--color-avocado-200: oklch(0.98 0.04 113.22);
--color-avocado-300: oklch(0.94 0.11 115.03);
--color-avocado-400: oklch(0.92 0.19 114.08);
--color-avocado-500: oklch(0.84 0.18 117.33);
--color-avocado-600: oklch(0.53 0.12 118.34);
--ease-fluid: cubic-bezier(0.3, 0, 0, 1);
--ease-snappy: cubic-bezier(0.2, 0, 0, 1);
/_ ... _/
}
O :root pode ser utilizado para definir variáveis globais no CSS, o que facilita a reutilização desses valores como estilos inline ou ao passá-los para bibliotecas como o Motion, permitindo a animação dessas variáveis.

:root {
--font-display: "Satoshi", "sans-serif";
--breakpoint-3xl: 1920px;
--color-avocado-100: oklch(0.99 0 0);
--color-avocado-200: oklch(0.98 0.04 113.22);
--color-avocado-300: oklch(0.94 0.11 115.03);
--color-avocado-400: oklch(0.92 0.19 114.08);
--color-avocado-500: oklch(0.84 0.18 117.33);
--color-avocado-600: oklch(0.53 0.12 118.34);
--ease-fluid: cubic-bezier(0.3, 0, 0, 1);
--ease-snappy: cubic-bezier(0.2, 0, 0, 1);
/_ ... _/
}
Valores de utilidade dinâmica e variantes
O Tailwind CSS 4.0 simplificou o uso de utilitários e variantes, permitindo que aceitem valores arbitrários diretamente, sem a necessidade de configuração extra. Agora, é possível criar grids de qualquer tamanho de forma rápida e prática, sem precisar recorrer a configurações adicionais ou à sintaxe de valores arbitrários.

<div class="grid grid-cols-15">
  <!-- ... -->
</div>
Você também pode direcionar atributos de dados booleanos personalizados sem precisar defini-los.

<div data-current class="opacity-75 data-current:opacity-100">
  <!-- ... -->
</div>
Até utilitários de espaçamento como px-*, mt-*, w-*, h-* e outros agora são derivados dinamicamente de uma única variável de escala de espaçamento e aceitam qualquer valor de forma nativa.

@layer theme {
:root {
--spacing: 0.25rem;
}
}
@layer utilities {
.mt-8 {
margin-top: calc(var(--spacing) _ 8);
}
.w-17 {
width: calc(var(--spacing) _ 17);
}
.pr-29 {
padding-right: calc(var(--spacing) \* 29);
}
}
Design Moderno
O Tailwind CSS v4.0 aproveita ao máximo os avanços mais recentes do CSS para criar uma experiência de desenvolvimento mais eficiente e flexível. Veja os principais recursos:

Camadas de Cascata Nativas: Proporcionam mais controle sobre a interação das regras de estilo, facilitando a personalização e manutenção.
Propriedades Personalizadas Registradas: Permitem animações de gradientes e melhoram o desempenho em páginas grandes.
Função color-mix(): Ajusta a opacidade de cores, incluindo variáveis CSS e currentColor.
Propriedades Lógicas (RTL): Facilitam a criação de layouts para direções de texto da direita para a esquerda (RTL), reduzindo o tamanho do CSS.
@layer theme, base, components, utilities;
@layer utilities {
.mx-6 {
margin-inline: calc(var(--spacing) \* 6);
}
.bg-blue-500\\/50 {
background-color: color-mix(in oklab, var(--color-blue-500) 50%, transparent);
}
}
@property --tw-gradient-from {
syntax: "<color>";
inherits: false;
initial-value: #0000;
}
Container queries
O Tailwind CSS 4.0 agora suporta container queries diretamente no núcleo, o que significa que você não precisa mais do plugin @tailwindcss/container-queries:

<div class="@container">
  <div class="grid grid-cols-1 @sm:grid-cols-3 @lg:grid-cols-4">
    <!-- ... -->
  </div>
</div>
Também foi adicionado suporte para container queries com max-width usando a nova variante @max-*:

<div class="@container">
  <div class="grid grid-cols-3 @max-md:grid-cols-1">
    <!-- ... -->
  </div>
</div>
Assim como as variantes de ponto de interrupção padrão, você pode empilhar as variantes @min-* e @max-* para definir intervalos de container queries:

<div class="@container">
  <div class="flex @min-md:@max-xl:hidden">
    <!-- ... -->
  </div>
</div>
Saiba mais em nossa documentação totalmente nova sobre container queries.

https://tailwindcss.com/docs/responsive-design#container-queries

Melhorias no uso de Gradientes
Agora, é possível criar gradientes com ângulos específicos, como bg-linear-45, facilitando a criação de gradientes em ângulos personalizados.

<div class="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500"></div>

Com a versão 4.0, você pode controlar a interpolação de cores nos gradientes utilizando modificadores como bg-linear-to-r/srgb ou bg-linear-to-r/oklch, permitindo gradientes mais vívidos e personalizados

<div class="bg-linear-to-r/srgb from-indigo-500 to-teal-400">...</div>

Foram adicionadas novas utilidades para gradientes cônicos e radiais, permitindo efeitos mais complexos com a mesma facilidade dos gradientes lineares.

<div class="bg-conic/[in_hsl_longer_hue] from-red-600 to-red-600"></div>
<div class="bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
Paleta de cores P3 modernizada
O Tailwind CSS 4.0 atualizou toda a paleta de cores padrão, passando de RGB para OKLCH, aproveitando o gamut mais amplo para tornar as cores mais vibrantes, especialmente nas áreas onde o espaço de cores sRGB limitava a intensidade. Tentamos manter o equilíbrio entre todas as cores, então, embora tenhamos renovado as cores, a mudança não deve ser disruptiva ao atualizar projetos existentes.

Novas Variantes e Utilitários
A versão 4 trouxe uma série de novas variantes e utilitários, ampliando ainda mais as possibilidades de personalização e controle sobre os elementos. Entre as novidades, destacam-se:

Novos utilitários inset-shadow-_ e inset-ring-_: Permitem empilhar até quatro camadas de sombras em um único elemento.
Novos utilitários field-sizing: Para redimensionamento automático de textareas sem precisar escrever uma única linha de JavaScript.
Novos utilitários color-scheme: Finalmente é possível remover aquelas barras de rolagem feias no modo escuro.
Novos utilitários font-stretch: Para ajustar com precisão fontes variáveis que suportam diferentes larguras.
Nova variante inert: Para estilizar elementos não interativos marcados com o atributo inert.
Novas variantes nth-_: Para fazer coisas realmente inteligentes (que você provavelmente vai se arrepender depois).
Nova variante in-_: Funciona como o group-_, mas sem a necessidade da classe group.
Destaque para o not-_ e Suporte a @starting-style
Entre os utilitários mais aguardados, destacam-se o not-\* e o suporte a @starting-style, que aumentam ainda mais a flexibilidade na manipulação de elementos, permitindo ajustes dinâmicos e complexos de forma mais intuitiva.

Explore a documentação relevante para mais detalhes sobre essas novas funcionalidades e descubra como aproveitá-las ao máximo!

<div class="not-hover:opacity-75">
  <!-- ... -->
</div>
.not-hover\\:opacity-75:not(*:hover) {
  opacity: 75%;
}
@media not (hover: hover) {
  .not-hover\\:opacity-75 {
    opacity: 75%;
  }
}
<div>
  <button popovertarget="my-popover">Check for updates</button>
  <div popover id="my-popover" class="transition-discrete starting:open:opacity-0 ...">
    <!-- ... -->
  </div>
</div>
Para detalhes mais completos e exemplos práticos de como utilizar essas novas variantes, confira a documentação oficial do Tailwind CSS

https://tailwindcss.com/docs/hover-focus-and-other-states

Como migrar seu projeto para a versão 4.0
O Tailwind CSS v4.0 é uma nova versão principal do framework. Embora a equipe de desenvolvimento tenha trabalhado para minimizar mudanças incompatíveis, algumas atualizações são necessárias. Neste guia, vamos explicar como realizar a migração de projetos da versão 3 para a versão 4.

Usando a Ferramenta de Atualização
Para aqueles que desejam atualizar seus projetos da versão 3 para a versão 4, a equipe do Tailwind criou uma ferramenta de atualização que pode automatizar grande parte do processo:

npx @tailwindcss/upgrade

Para a maioria dos projetos, a ferramenta de atualização realiza a migração automática, incluindo a atualização das dependências, a migração do arquivo de configuração para CSS e a adaptação de quaisquer mudanças nos arquivos de template.

Vale destacar que a ferramenta requer o Node.js versão 20 ou superior, portanto, é importante garantir que o ambiente esteja atualizado antes de executar o processo.

É recomendável executar a ferramenta de atualização em uma nova branch do projeto, revisar as alterações (diff) com atenção e testar o projeto no navegador para garantir que tudo esteja correto. Em projetos mais complexos, pode ser necessário fazer alguns ajustes manuais, mas a ferramenta economiza bastante tempo no processo.

Além disso, é importante revisar as mudanças incompatíveis da versão 4, para entender o que mudou e garantir que o projeto esteja totalmente ajustado. A ferramenta de atualização cobre a maioria, mas algumas mudanças podem não ser captadas automaticamente.

Com essa abordagem, a atualização para o Tailwind CSS v4.0 se torna mais ágil e segura, ajudando desenvolvedores a se adaptarem rapidamente às melhorias e novas funcionalidades do framework.

Conclusão
O Tailwind CSS 4 oferece um conjunto robusto de novas funcionalidades, melhorias de desempenho e personalização, tornando-o uma escolha ainda mais poderosa para o desenvolvimento de interfaces modernas. As mudanças de instalação, suporte a variáveis CSS e novas opções de personalização tornam a atualização um passo essencial para aqueles que desejam otimizar seus fluxos de trabalho e criar interfaces mais dinâmicas e responsivas.

Explore mais sobre o Tailwind CSS 4 e as novidades na documentação oficial.
