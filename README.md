# Blogs API

## :page_with_curl: Sobre

O projeto Blogs API é um sistema de autenticação de pessoas usuárias utilizando JWT (JSON Web Token), permitindo que apenas pessoas usuárias autenticadas possam criar, editar e pesquisar posts no blog, consolidando a utilização das ferramentas Node.js, Sequelize e JSON Web Token (JWT) para a criação de uma API RESTful com CRUD completo e banco de dados.

## :woman_technologist: Habilidades desenvolvidas

- Node.js
- Sequelize
- API CRUD e banco de dados
- Autenticação com JWT

## 🛠️ Ferramentas Utilizadas

- Docker
- Node.js
- Sequelize
- JWT

## ⚙️ Como Executar

> :warning: &nbsp; _Para executar este projeto é necessário ter o Docker instalado_

<details>
  <summary> Como iniciar </summary>
  <br>

1. Clone o repositório em uma pasta de preferência

```
git clone git@github.com:JessicaLopesDev/project-blogs-api.git
```

2. Entre na pasta raíz do projeto e instale todas as dependências

```
npm install

3. É necessario executar o comando abaixo no diretório raiz do projeto para rodar o projeto.

```

docker-compose up -d

```

4. Para criar o bando de dados usamos o seguinte comando que versionar o schema do banco utilizando as <code>migrations</code> e popula o banco com uso dos <code>seeders</code>

```

npm run populate

```

5. Digite o comando abaixo para iniciar o servidor com live-reload.

```

npm run dev

```

6. Para visualização da interface da API podem ser utilizados o Thunder Client, Postman ou Insomnia.
</details>
```
