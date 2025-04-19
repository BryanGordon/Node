const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')

// Todo el middleware de abajo se puede resumir
// con la siguiente linea de codigo

app.use(express.json())

/*
app.use((req, res, next) => { // middleware
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''

  req.on('data', chunk => {
    body += chunk
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // Dentro de un middleware no se puede responder
    // hay que mutar la request y guardar la
    // informacion en el req.body, porque
    // la request es unica para cada peticion
    // res.status(201).json(data)
    req.body = data
    next()
  })
})
*/
app.get('/', (req, res) => {
  res.json(ditto)
})

// Forma de hacer un peticion POST con express

app.post('/pokemon', (req, res) => {
  // No hace falta este codigo debido a que
  // es tratado por el middleware
  /*
  let body = ''
  req.on('data', chunk => {
    body += chunk
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
  */
  // Solo reusaremos la linea de respuesta
  // porque la request ha sido tratada en
  // middleware y la informacion guardada
  // en el req.body
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404 not found</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
