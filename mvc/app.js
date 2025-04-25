const express = require('express')
const crypto =  require('node:crypto')
const z = require('zod')

const movies = require('./movies.json')
const { validateMovie, validatePartialMovie } = require('./schemas/movies')

const app = express()
app.disable('x-power-by')
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Inicio del server'})
})

app.get('/movies', (req, res) => {
  // Forma de solucionar el problema de cors
  // hay mejores formas de solucionarlo,
  // creando una lista con los origenes que
  // tienen acceso o instalando una dependencia (middleware)
  // llamada cors.
  res.header('Access-Control-Allow-Origin', '*') 
  // Cabecera para resolver problemas de cors cuando existe
  // una peticion fuera del endpoint principal o cuando
  // se requiera utilizar un metodo diferente al GET.
  // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE  ')

  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLocaleLowerCase() === genre.toLocaleLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found'})
})

// Metodos post

app.post('/movies', (req, res) => {
  // Hacer un schema para validar la peticion
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  }

  movies.push(newMovie)

  res.status(201).json(newMovie)
})

// Metodos patch (update)

app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body)
  
  if (result.error) { 
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found'})
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data
  }

  movies[movieIndex] = updateMovie

  res.json(updateMovie)
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`)
})
