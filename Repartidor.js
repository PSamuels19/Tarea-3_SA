const http = require('http')
const input = require('readline-sync')
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const host = '127.0.0.1'
const puerto = '18007'

var order

// create a server for wait orders
var repartidor = http.createServer(function (req, res) {
  while (true) {
    order = input.question('Llevar el No de pedido: ' + req.url.substr(1) + '\n aceptas (S/n)?\n')
    if (order === 'S') {
      // actualizo el estado que corresponde al cliente
      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':48102/3', true)
      xhr.send()
      res.end()
      break
    }
  }
  console.log('Ordenes...')
})

repartidor.listen(puerto, host)
console.log('Esperando ordenes...')
