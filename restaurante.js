const http = require('http')
const input = require('readline-sync')
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// lee la información que viene en json desde la pagina
var url = require('url')
var queryString = require('querystring')

const host = '127.0.0.1'
const puerto = '48101'

var order
var tt = true

var rst = http.createServer(function (req, res) {
  tt = true
  // para poder reconocer mi json que me manda la pagina
  var theUrl = url.parse(req.url)
  var queryObj = queryString.parse(theUrl.query)
  var obj = JSON.parse(queryObj.jsonData)

  var json = '{ \"res\": \"' + obj.res + '\", \"menu\": \"' + obj.menu + '\" ,\"bebi\":\"' + obj.bebi + '\"}'
  while (tt) {
    order = input.question('Tienes un pedido de: ' + obj.res + '\n La quiere atender (S/n)?\n')
    if (order === 'S') {
      // mando información al microservicio del cliente
      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':48102/' + aleatorio() + '?jsonData=' + json, true)
      xhr.send()
      res.end()
      break
    } else {
      tt = false
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('okay')
      break
    }
  }
  console.log('Bienvenido!!! esperando ordenes...')
})

function aleatorio () {
  return Math.floor(Math.random() * (999999 - 1)) + 1
}

rst.listen(puerto, host)
console.log('Bienvenido!!! esperando ordenes...')
