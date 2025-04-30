import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)

moviesRouter.get('/:id', MovieController.getById)

// Post
moviesRouter.post('/', MovieController.create)

// Delete
moviesRouter.delete('/:id', MovieController.delete)

// Patch
moviesRouter.patch('/:id', MovieController.update)
