### 🎯 Objetivo
A ideia desse projeto é criar uma aplicação que fará o cadastro dos pedidos de uma hamburgueria 

### 🚀 Principais Tecnologias utilizadas

- Node.Js
- Nodemon
- Express
- Uuid
- Insomnia (Para checkar a funcionalidade das rotas)
- Middlewares

### 📑 Proposta do projeto

Crie uma aplicação que fará o cadastro dos pedidos de uma hamburgueria, e você deve utilizar [Node](https://nodejs.org/en/) e [Express](https://expressjs.com/pt-br/).

##### Criar rotas

- `POST /order`: A rota deve receber o `pedido do cliente`, o `nome do cliente` e `o valor do pedido`, essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato: `{ id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", nameClient:"José", value: 44.50, status:"Em preparação" }`. Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o pedido é criado, você deve sempre colocar o status como "Em preparação".


- `GET /order`: Rota que lista todos os pedidos já feitos.

- `PUT /order/:id`: Essa rota deve alterar um pedido já feito. Pode alterar,um ou todos os dados do pedido.O `id` do pedido deve ser enviado nos parâmetros da rota.

- `DELETE /order/:id`: Essa rota deve deletar um pedido já feito com o `id` enviado nos parâmetros da rota.

- `GET /order/:id`: Essa rota recebe o `id` nos parâmetros e deve retornar um pedido específico.

- `PATCH /order/:id`: Essa rota recebe o `id` nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".

### 🔨 Como baixar o projeto

- Clonar repositorio
`# git clone https://github.com/ruann3res/First-API-NodeJS.git`

- Entrar no diretório
`# cd First-API-NodeJS`

- Instalar o as dependencias
`# npm install`

- Iniciar a API
`# npm run start`

- Pronto para Uso 


Qualquer duvida entre em contato por :
<div>
<a href="https://www.instagram.com/ruan_074/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" width="120px"></a>

<a hrefhttps://www.linkedin.com/in/ruan-neres/""><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"  alt="Instagram" width="120px"></a>

</div>


<strong>Desenvolvido por mim, Ruan P. A. Neres😀!  </strong>
