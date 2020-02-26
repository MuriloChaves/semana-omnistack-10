# semanaOmniStack-10a-edicao

Repositório de códigos do projeto produzido durante a Semana OmniStack 10.0 realizado pela Rocketseat ministrada pelo professor e desenvolvedor Diogo Fernandes, abordando as linguagens Node.js, React e React Native.

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## Passos

### Preparação do Ambiente de Desenvolvimento

- Instalação do [Homebrew](https://brew.sh/);

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- Instalação do [Node.js](https://nodejs.org/en/) na versão mais **estável**, v. 12;

```sh
brew install node@12
```

> Para verificar a instalação do Node.js `node -v`

 - Instalação de um gerenciador de pacotes `[yarn](https://yarnpkg.com/lang/en/)`, melhor que o `npm` do `Node.js`;

```sh
brew install yarn --ignore-dependencies
```

> Para verificar a instalação do yarn `yarn -v`

- Instalação de uma IDE, no caso [vscode](https://code.visualstudio.com);

> Caso queira personalizar a IDE...

* Instalar o tema Dracula Official;
* Instalar Material Icon Theme;

> Caso facilite a visualização de arquivos JSON

* JSON Viewer

> Atualização automática de informações no Node.js

```sh
yarn add nodemon -D
yarn nodemon index.js
```

* Dentro do `package.json` podemos criar um atalho:

```js
"scripts": {
    "dev": "nodemon index.js"
}
```

> Para testar as rotas

- Instalar o [Insomnia](https://insomnia.rest/download/) ou [Postman](https://www.getpostman.com);

> Banco [MongoDB](https://www.mongodb.com/cloud/atlas)

- Instalar a dependência do mongo:

```sh
yarn add mongoose
```

> Para saber se está atrás de algum proxy

http://portquiz.net:27017, se aparecer algo You have reached this page on port 27017. está tudo OK.

> Chamadas para outras APIs

```sh
yarn add axios
```

> verificar informações do mongo

baixar o [MongoDB Compass](https://www.mongodb.com/products/compass) 

### Criando Projeto

> Parte do Back-end para o Node.js

```sh
mkdir backend
cd backend
yarn init -y
```

> Ele irá criar um pacote JSON

```sh
code package.json
```

> Bibliotecas

```sh
yarn add express
```

> Criar o index.js

```sh
touch index.js
```

> Startar o projeto web com react

```sh
yarn create react-app web
```

OU

```sh
npx create-react-app web
```

> Inicializar o projeto react

```sh
yarn start
```


## Arquitetura da Aplicação

### JS Back-end

- Regras de negócio;
- Conexão banco de dados;
- Envio de e-mail;
- Comunicaçnao com webservices;
- Autenticação do usuário;
- Criptografia e segurança;

> Comunicação via JSON

### Front-end

- Aplicação React Web;
- Aplicação mobile tipo React-native/Java/C/Swift;
- Serviços externos;

## Comentários em códigos apagados

```js
// Métodos HTTP: GET, POST, PUT, DELETE

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Paramns: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criaçnao ou alteração de um registro)

// MongoDB (não-relacional)
```

```js
// 3 conceitos principais do react

// componente: bloco isolado do html, css e js, o qual não interfere no restante da aplicação
// estado: informações que um componente PAI passa para o componente FILHO
// propriedade: informações mantidas pelo componente (lembrar: imutabilidade)
```
