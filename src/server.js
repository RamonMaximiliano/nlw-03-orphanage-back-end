// esta const recebe o express e todas suas funcionalidades
const express = require("express");

// método que cria um caminho para ser usado como url, pois muda o endereço conforme windows IOS etc...
const path = require('path');

//o express se tornou uma function, passando a function para o server
const server = express()
server

// o método abaixo, indica para o express que todos os arquivos dentro da pasta public são estáticos, ou seja, não vão mudar dinamicamente
.use(express.static('public'))

//um dos métodos do server é o get, que recebe uma rota e uma função que fará uma request e esperará uma response
.get("/", (request,response)=>{
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//a porta onde o servidor estará dirigindo os dados (escutando)
server.listen(5500)

