const express = require('express')
const crypto =  require('node:crypto')
const z = require('zod')

const movies = require('./movies.json')

const app = express()
app.disable('x-power-by')
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Inicio del server'})
})

app.get('/movies', (req, res) => {
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

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`)
})

// Metodos post

app.post('/movies', (req, res) => {
  // Hacer un schema para validar la peticion
  const movieSchema = z.object({
    title: z.string({
      invalid_type_error: 'Movie title must be a string',
      required_error: 'Movie is required'
    }),
    genre: z.array(z.enum(
      ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Thiller', 'Sci-Fi']
    ), {
      invalid_type_error: 'Genre must be a correct genre',
      required_error: 'Genre is required'
    }),
    year: z.number().int().min(1900).max(2027),
    director: z.string({
      invalid_type_error: 'Director must be a string'
    }),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10),
    poster: z.string()
  })
  const {
    title,
     genre,
     year,
     director,
     duration,
     rate,
     poster
  } = req.body

  const newMovie = {
    id: crypto.randomUUID(),
    title,
    genre,
    year,
    director,
    duration,
    rate: rate ?? 0,
    poster
  }

  movies.push(newMovie)

  res.status(201).json(newMovie)
})