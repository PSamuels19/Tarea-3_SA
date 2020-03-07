const http = require('http')
const host = '127.0.0.1'
const port = '15888'
// espero la respuestas de la orden
var clnt = http.createServer(function (req, res) {
  // Actualización de estado de la petición
  if (req.url === '/') {
    console.log('Tu orden ya va en camino!')
    res.end()
    return
  } else if (req.url !== '/') {
    console.log('Orden No. ' + req.url + ' entregada al motorista')
    res.end()
    return
  }
  clnt.close()
})

clnt.listen(port, host)
