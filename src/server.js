// esta const recebe o express e todas suas funcionalidades
const express = require("express");

// método que cria um caminho para ser usado como url, pois muda o endereço conforme windows IOS etc...
const path = require('path');

//puxando os modules que foram exportados na pages.js
const pages = require('./pages.js')

//o express se tornou uma function, passando a function para o server
const server = express()
server

// o método abaixo, indica para o express que todos os arquivos dentro da pasta public são estáticos, ou seja, não vão mudar dinamicamente
.use(express.static('public'))

//Configurando a template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine','hbs')

//um dos métodos do server é o get, que recebe uma rota e uma função que fará uma request e esperará uma response
.get("/", pages.index)
.get("/createOrphanage", pages.createOrphanage)
.get("/hope", pages.hope)
.get("/orphanages", pages.orphanages)

//a porta onde o servidor estará dirigindo os dados (escutando)
server.listen(5500)



/* http://127.0.0.1:5500/ */