// npm run dev
const http = require('http')
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// lee la información que viene en json desde la pagina
var url = require('url')
var queryString = require('querystring')

const host = '127.0.0.1'
const puerto = '48102'

var tt = true

var rst = http.createServer(function (req, res) {
  tt = true
  // para poder reconocer mi json que me manda la pagina

  var url2 = req.url.substr(0, 2)
  console.log(url2)
  // console.log(json)
  while (tt) {
    if (url2 === '/1') {
      // mando información al restaurante
      var theUrl = url.parse(req.url)
      var queryObj = queryString.parse(theUrl.query)
      var obj = JSON.parse(queryObj.jsonData)
      // armo el json 
      var json = '{ \"res\": \"' + obj.res + '\", \"menu\": \"' + obj.menu + '\" ,\"bebi\":\"' + obj.bebi + '\"}'
      console.log('Petición al restaurante')
      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':48101/1?jsonData=' + json, true)
      xhr.send()
      break
    } else if (url2 === '/3') {
      // enviamos confirmación al cliente
      xhr = new XMLHttpRequest()
      console.log('Confirmación del repartidor')
      console.log('Confirmación al cliente')
      xhr.open('POST', 'http://' + host + ':15888/', true)
      xhr.send()
      res.end()
      break
    } else if (url2 !== '/1') {
      // mando la orden al repartido
      theUrl = url.parse(req.url)
      queryObj = queryString.parse(theUrl.query)
      obj = JSON.parse(queryObj.jsonData)
      json = '{ \"res\": \"' + obj.res + '\", \"menu\": \"' + obj.menu + '\" ,\"bebi\":\"' + obj.bebi + '\"}'
      console.log('Enviada a repartidor')
      xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':18007/' + url2, true)
      xhr.send()
      console.log('Enviar número de orden al cliente')
      xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':15888' + url2, true)
      xhr.send()
      res.end()
      break
    } else {
      tt = false
      console.log('Algo Salió mal')
    }
  }
  console.log('Bienvenido!!! esperando ordenes...')
})

rst.listen(puerto, host)
console.log('Bienvenido!!! esperando ordenes...')
// http://localhost:8080/ jenkis

// "start": "node ESB.js",
// "dev": "nodemon --watch ESB.js",
// "test": "echo \"Error: no test specified\" && exit 1"
//  "main": "ESB.js",