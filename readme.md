
# Artigo Livre

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Firebase](https://img.shields.io/badge/Firebase-Enabled-yellow)](https://firebase.google.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v14.0.0+-green)](https://nodejs.org/)

Uma plataforma fácil e intuitiva para publicação e compartilhamento de artigos. O **Artigo Livre** oferece uma interface simples e amigável, permitindo que autores publiquem seus conteúdos com visuais personalizados e os leitores tenham acesso a artigos bem organizados.

---

## Sobre o Projeto

O **Artigo Livre** foi desenvolvido para facilitar a criação e compartilhamento de artigos em uma plataforma aberta e intuitiva. Com funcionalidades para personalização visual, os autores podem inserir capas personalizadas e banners, proporcionando uma experiência imersiva para os leitores.

Principais Funcionalidades:
- **Publicação Rápida:** Publique artigos de forma fácil, com suporte a customizações.
- **Personalização Visual:** Adicione capas e imagens personalizadas para dar destaque aos seus conteúdos.

## Tecnologias Utilizadas

- **HTML, CSS, JavaScript**: Para estrutura e interatividade da interface.
- **Node.js**: Utilizado para o ambiente de execução no backend.
- **Firebase**:
  - **Authentication**: Gerencia a autenticação de usuários de forma segura.
  - **Firestore Database**: Armazena os artigos com eficiência em uma coleção estruturada.
  - **Firebase Storage**: Gerencia o armazenamento de imagens em tempo real.

## Pré-requisitos

Antes de iniciar, você precisará ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (v14.0.0 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)
- [Firebase CLI](https://firebase.google.com/docs/cli) (para configurar o Firebase no projeto)

## Configurações do Firebase

O projeto utiliza **Firebase Authentication**, **Firestore** e **Firebase Storage**. Abaixo estão as etapas para configurar seu Firebase no projeto.

### 1. Criando o Projeto Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/).
2. Crie um novo projeto.
3. Habilite **Authentication** e configure o provedor de autenticação desejado (por exemplo, Google, Email/Password).
4. No menu lateral, ative o **Firestore Database** e crie uma coleção chamada `articles`.
5. Ative o **Firebase Storage** para armazenar imagens, crie um bucket de storage chamado `uploads`.

### 2. Adicionando o Firebase ao Projeto

No arquivo `firebase-init.js`, adicione a configuração gerada pelo Firebase:

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};
```

Certifique-se de que as regras de segurança do Firestore e do Storage estão configuradas para permitir o acesso necessário (especialmente se você estiver rodando em ambiente de desenvolvimento).

### 3. Configurando o Firestore

Dentro do **Firestore**, você deve ter a coleção `articles`, onde cada documento contém as seguintes propriedades:

- **title**: O título do artigo (tipo: `string`)
- **content**: O conteúdo do artigo (tipo: `string`)
- **bannerUrl**: O URL da imagem do banner (tipo: `string`)
- **createdAt**: Data de criação (tipo: `timestamp`)

### 4. Configurando o Firebase Storage

O **Firebase Storage** será utilizado para armazenar as imagens dos banners. Certifique-se de que seu bucket de storage esteja configurado corretamente com permissões adequadas para leitura e gravação.

---

## Instalação do Projeto

Siga as etapas abaixo para clonar e configurar o projeto localmente.

1. **Clone o repositório:**

```bash
$ git clone https://github.com/luismede/artigo-livre
$ cd artigo-livre
```

2. **Instale as dependências:**

```bash
$ npm install
```

3. **Configure o Firebase:**

Preencha o arquivo `firebase-init.js` com suas credenciais do Firebase, como mostrado anteriormente.

---

## Rodando o Projeto

Para rodar o projeto em ambiente local:

1. Execute o comando abaixo para iniciar o servidor local na porta `3000`:

```bash
$ npm start
```

2. Abra o navegador e acesse `http://localhost:3000`.

---

## Como Contribuir

Contribuições são sempre bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um **fork** do projeto.
2. Crie uma nova branch para sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça suas alterações e faça o commit: `git commit -m 'Adicionando nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um **Pull Request** e descreva suas mudanças.

Se você tiver qualquer dúvida, pode me contatar pelo e-mail ou LinkedIn:
- **Email**: luishenrique23h@hotmail.com
- **LinkedIn**: [Meu LinkedIn](https://www.linkedin.com/in/luismede/)

---

## Licença 

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT) - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
