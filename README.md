# API - Agenda de Contatos

## Descrição
A API de Agenda de Contatos é um serviço que permite gerenciar e organizar informações de contatos, como nomes, números de telefone, endereços de e-mail e outros detalhes relevantes. Ela oferece funcionalidades para criar, atualizar, visualizar e excluir contatos.

Com a API de Agenda de Contatos, você pode criar um aplicativo ou site que permita aos usuários armazenar e gerenciar seus contatos de forma eficiente. Além disso, você pode implementar recursos avançados, como autenticação de usuários, permissões de acesso, sincronização com outros serviços e integração com sistemas de terceiros.

Esta API foi desenvolvida utilizando tecnologias modernas, como Node.js, Express.js e Banco de Dados Relacional (por exemplo, PostgreSQL). Ela segue princípios RESTful, oferecendo endpoints bem definidos e respostas em formato JSON para facilitar a integração com diferentes clientes, como aplicativos web e mobile.

Ao utilizar a API de Agenda de Contatos, você terá a flexibilidade para personalizar e adaptar o serviço de acordo com suas necessidades específicas. Você pode adicionar campos personalizados aos contatos, implementar recursos de busca avançada, aplicar validações adicionais nos dados e muito mais.

No README, você encontrará instruções detalhadas sobre como configurar e usar a API, juntamente com exemplos de solicitações e respostas. Siga as orientações fornecidas para começar a utilizar a API de Agenda de Contatos e criar uma aplicação incrível para gerenciar contatos de forma eficiente.

## 🚀 Principais Tecnologias
<div>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> 
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" /> 
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> 
    <img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" /> 
</div><br>

## 🛠 Pré-requisitos

#### Node.js
Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente do Node.js em https://nodejs.org.
### Banco de Dados PostgreSQL
Certifique-se de ter um banco de dados PostgreSQL instalado e configurado. Você precisará fornecer as informações de conexão corretas no arquivo .env (como descrito abaixo).

## ⚙ Configurações

Após garantir que os pré-requisitos sejam atendidos, você pode prosseguir com as configurações:


  - Clone o repositório do projeto: `git clone git@github.com:JuniorSantos05/Cadastro-Clientes-BackEnd.git`.

  - Acesse o diretório do projeto: `cd Cadastro-Clientes-BackEnd`.

  - Instale as dependências do projeto: `yarn install`.

  - Renomeie o arquivo `.env.example` para `.env`.

  - Edite o arquivo `.env` e atualize a variável `DATABASE_URL` com as informações corretas de conexão com o banco de dados PostgreSQL.
  
  - Certifique-se de fornecer o nome de usuário, senha, host, porta e nome do banco de dados corretos.

  - Execute o comando para criar as tabelas do banco de dados e executar as migrações: `yarn typeorm migration:run`.

  - Inicie o servidor de desenvolvimento: `yarn dev`.

Após executar essas etapas, o servidor estará em execução e você poderá fazer solicitações à API de Agenda de Contatos.

Certifique-se de que todas as dependências estejam instaladas corretamente e que o arquivo `.env` esteja configurado corretamente para evitar problemas de execução.

## 🎯 EndPoints

A API de Agenda de Contatos possui os seguintes endpoints:

#### Usuários (/users)

- POST `/users`: Cria um novo usuário.
- GET `/users`: Obtém as informações do usuário logado.
- PATCH `/users`: Edita as informações do usuário logado.
- DELETE `/users`: Deleta o usuário logado.

#### Contatos (/contacts)

- POST `/contacts`: Cria um novo contato associado ao usuário logado.
- GET `/contacts`: Lista todos os contatos do usuário logado.
- GET `/contacts/:id`: Obtém as informações de um contato específico do usuário logado.
- PATCH `/contacts/:id`: Edita as informações de um contato específico do usuário logado.
- DELETE `/contacts/:id`: Deleta um contato específico do usuário logado.

#### Login (/login)

- POST `/login`: Cria um token de autenticação com base nas credenciais fornecidas.

Certifique-se de enviar as solicitações corretas para cada endpoint, incluindo os dados necessários no corpo da solicitação, como parâmetros ou payload, quando aplicável.

Por exemplo, para criar um novo usuário, faça uma solicitação POST para `/users` com os dados do usuário no corpo da solicitação. Para obter os contatos do usuário logado, faça uma solicitação GET para `/contacts`. E assim por diante.

Certifique-se de tratar corretamente as respostas e os possíveis erros retornados pela API para garantir o bom funcionamento e a integridade dos dados.

## Autor

#### 🙋🏾‍♂️ Junior Santos
Para mais detalhes, fique à vontade para se conectar comigo no [LinkedIn](https://www.linkedin.com/in/durvalsantos/) para discussões adicionais ou qualquer dúvida. Vamos manter contato!


