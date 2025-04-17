const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.NODE_PORT ?? 3000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Bienvenido a la página</h1>')
  } else if (req.url === '/landscape') {
    fs.readFile('./g9qs6xez97871.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
})

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
