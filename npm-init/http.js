const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

// Poner el puerto 0 permite conectar el servidor en
// cualquier puerto que este disponible

/*
server.listen(0, () => {
  console.log(`Server listening on port http://localhost:${server.address().port}`)
})
*/

// Se puede colocar el puerto en una variable de entorno
// const desiredPort = process.env.PORT ?? 3000
// y pasarla como argumento a la funcion
// findAvailablePort

// Forma de crear un servidor HTTP
// con una funcion custom.

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
