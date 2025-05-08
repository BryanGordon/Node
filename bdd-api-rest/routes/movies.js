import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

export const createMovieRouter = ({ movieModel }) => {
  const moviesRouter = Router()

  const movieController = new MovieController({ movieModel })

  moviesRouter.get('/', movieController.getAll)

  moviesRouter.get('/:id', movieController.getById)

  // Post
  moviesRouter.post('/', movieController.create)

  // Delete
  moviesRouter.delete('/:id', movieController.delete)

  // Patch
  moviesRouter.patch('/:id', movieController.update)

  return moviesRouter
}
