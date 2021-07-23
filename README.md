<h1 align="center">Welcome to NLW valoriza 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/fah_ds" target="_blank">
    <img alt="Twitter: https://twitter.com/fah_ds" src="https://img.shields.io/twitter/follow/fah_ds.svg?style=social" />
  </a>
</p>

> Projeto criado na NLW Together de 06/2021

<p align="center">
  <img alt="Preview" src="https://i.ibb.co/4RTZQQ4/Design-sem-nome.png">
</p>

## Instalação

Clone o projeto:

```sh
git clone https://github.com/fabioods/nlw-valoriza.git
```

Entre na pasta do projeto.

```sh
cd nlw-valoriza
```

Instale as dependências do projeto:

```sh
yarn install
```

Crie um banco no postgres e configure da seguinte forma:

```json
{
  "port": 5555,
  "username": "postgres",
  "password": "postgres",
  "database": "nlw-valoriza"
}
```

Por fim execute o seguinte comando para criar as tabelas no banco de dados:

```sh
yarn typeorm migration:run
```

## Uso

```sh
yarn start
```

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## Author

👤 **Fábio dos Santos**

- Website: https://www.linkedin.com/in/fabioods/
- Twitter: [@https:\/\/twitter.com\/fah_ds](https://twitter.com/https://twitter.com/fah_ds)
- Github: [@fabioods](https://github.com/fabioods)
- LinkedIn: [@https:\/\/www.linkedin.com\/in\/fabioods\/](https://linkedin.com/in/https://www.linkedin.com/in/fabioods/)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
