const net = require('net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Forma de buscar otro puerto pasando el 0
        // como argumento para el server
        // findAvailablePort(0).then(port => resolve(port))

        // Forma de buscar otro puerto pasando el desiredPort
        // como argumento y sumando 1 al puerto.
        findAvailablePort(desiredPort + 1).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
