const http = require('node:http')

const dittoJson = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJson))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404</>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          req.on('data', chunk => {
            body += chunk
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }

        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404</>')
      }
  }
}

const server = http.createServer(processRequest)
server.listen(3000, () => {
  console.log('server listening on port http://localhost:3000')
})
