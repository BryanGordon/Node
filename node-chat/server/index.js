import express from 'express'
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import dotenv from 'dotenv'
import { createClient } from '@libsql/client'

const PORT = process.env.PORT ?? 3000

dotenv.config()

const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
})

await db.execute(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT
  )
`)

const app = express()
app.use(logger('dev'))  

const server = createServer(app)
const io = new Server(server, {
  connectionStateRecovery: { }
})

io.on('connection', (socket) => {
  console.log('A user has connected!')
  console.log('An user has connected!')

  socket.on('disconnect', () => {
    console.log('An user has disconnected.')
  })

  socket.on('chat message',  async(msg) => {
    let results

    try {
      results = await db.execute({
       sql: 'INSERT INTO messages (content) VALUES (:content)',
       args: { content: msg }
      }) 
    } catch (e) {
      console.error(e)
    }

    io.emit('chat message', msg, results.lastInsertRowid.toString())
  })
})


app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})