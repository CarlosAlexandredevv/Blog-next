---
title: 'Como Resolver Problemas de Cache e Requisições com React Query e Axios'
description: Cansado de gerenciar estados assíncronos e lidar com atualizações de cache manualmente? Descubra como React Query e Axios podem revolucionar sua experiência no consumo de APIs!
date: 2025-02-03
image: /assets/como-resolver-problemas-de-cache-e-requisicoes-com-react-query-e-axios.png
author:
  name: Carlos Alexandre
  avatar: /avatar.jpg
---

Cansado de gerenciar estados assíncronos e lidar com atualizações de cache manualmente? Descubra como React Query e Axios podem revolucionar sua experiência no consumo de APIs!

## Introdução

Neste artigo, vamos explorar como o Axios e o React Query podem melhorar a forma como você lida com requisições de API e gerenciamento de dados em suas aplicações React.

O Axios é uma biblioteca simples e poderosa para fazer requisições HTTP, enquanto o React Query oferece soluções avançadas para otimizar o cache, sincronização e o estado de dados assíncronos.

Juntas, essas ferramentas tornam o processo de consumo de APIs mais eficiente, com menos código e maior desempenho. Vamos entender como elas funcionam individualmente e como você pode combiná-las para criar aplicações React ainda mais rápidas e escaláveis.

Instalação e Configuração do Axios e React Query

Neste projeto, utilizaremos a **JSONPlaceholder API**, uma API de teste que fornece dados fictícios como usuários, posts e fotos, para demonstrar como essas bibliotecas podem ser configuradas e usadas juntas.

1. Faça a instalação das bibliotecas.

```bash
npm i axios
npm i @tanstack/react-query@4
```

1. Crie uma variável para ser exportada passando a URL base.

```tsx
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
});
```

1. Crie uma variável para ser exportada realizando a inicialização do contexto do React Query.

```tsx
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();
```

1. Envolva sua aplicação com o provider do React Query passando a variável criada anteriormente como parâmetro no atributo client.

```tsx
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import { Home } from './pages/Home';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout /> // Minha aplicação
    </QueryClientProvider>
  );
}
```

## Sugestão para organizar as requisições

Esse tópico é uma sugestão de como podemos organizar as requisições utilizando o Axios, você pode organizar da maneira que acha melhor.

1. Crie uma pasta chamada api onde será armazenado todas as suas funções de requisições.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/33a1c836-2764-46a2-b017-6a7062c95911/fddf42ba-f0a2-4b0f-b685-14f2990a8112/image.png)

## **Implementando Requisições com React Query e Axios na Prática**

1. Importe o useQuery e a sua requisição no componente, nesse caso estou importando o getUser.

```tsx
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../api/get-user';
```

1. Crie uma variável e faça a desestruturação do data vinda do Hook useQuery e nomeie para o nome que achar melhor(nesse caso chamei de users).

```tsx
interface User
  id: number;
  name: string;
  email: string;
}

export function Home() {
  const { data: users } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUser,
  });
```

1. Dentro do Hook é passado a chave (queryKey) e a função para ser ativada (queryFn) que está recebendo a getUser que exportamos anteriormente,

```tsx
const { data: users } = useQuery<User[]>({
  queryKey: ['users'],
  queryFn: getUser,
});
```

1. Tudo feito, agora podemos consumir os dados retornados da requisição.

```tsx
return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users?.map((user: User) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
```

1.  🤔 Você pode achar que o funcionamento aconteceu igual o useEffect, mas não é bem assim que funciona! O segredo está no “staleTime” que pode ser passado no useQuery, ele permite passar o tempo em que os dados da requisição se manterão em cache, essa é uma boa abordagem quando os dados não são atualizado constatemente.

```
const { data: users } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 5, // 5 minutos
    // staleTime: Infinity // passando valor Infinity o valor ficará em cache até a request ser realizada novamente.
  });
```

1. Outra abordagem pode ser passando o “refetchOnWindowFocus” e o “refetchInterval”

```tsx
const { data: users } = useQuery<User[]>({
  queryKey: ['users'],
  queryFn: getUser,
  refetchOnWindowFocus: true, // é feita uma nova chamada quando a pagina volta a ser focada.
  refetchInterval: 10 * 1000, // nesse caso a chamada é feita a cada 10 segundos
});
```

## Conclusão

Embora o Axios e o React Query já ofereçam uma base sólida para gerenciar requisições de API e otimizar o cache em suas aplicações, essas bibliotecas possuem muitos outros recursos poderosos que podem levar seu desenvolvimento a um novo nível. Desde funcionalidades avançadas de cache até controle detalhado sobre o comportamento das requisições, há sempre algo mais a ser descoberto.

Por isso, recomendo que você explore a documentação oficial de ambas as bibliotecas. Ela traz exemplos completos, dicas valiosas e boas práticas para ajudá-lo a aproveitar ao máximo todo o potencial dessas ferramentas. Não deixe de se aprofundar e experimentar novos conceitos — você vai se surpreender com a flexibilidade e eficiência que elas podem proporcionar em seus projetos!

https://tanstack.com/query/v5/docs/framework/react/overview

https://axios-http.com/ptbr/docs/intro
