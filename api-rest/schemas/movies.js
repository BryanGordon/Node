import z from 'zod'

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
    rate: z.number().min(0).max(10).default(0),
    poster: z.string()
  })

  export function validateMovie (object) {
    return movieSchema.safeParse(object)
  }

  export function validatePartialMovie (object) {
    return movieSchema.partial().safeParse(object)
  }
