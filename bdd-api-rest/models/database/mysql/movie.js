import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'moviebd'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static getAll = async ({ genre }) => {
    const [result] = await connection.query(
      'SELECT * FROM movie;'
    )

    return result
  }

  static getById = async ({ id }) => {
    const [movies] = await connection.query(
      'SELECT * FROM movie WHERE id = ?;', [id]
    )

    if (movies.length === 0) return null

    return movies[0]
  }

  static create = async ({ object }) => {
    const {
      title,
      year,
      director,
      duration,
      poster,
      rate
    } = object

    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult
    try {
      await connection.query(
        'INSERT INTO movie VALUE(UUID_TO_BIN(?), ?, ? , ?, ?, ?, ?);', [uuid, title, year, director, duration, poster, rate]
      )
    } catch (e) {
      throw new Error('Error creating new movie')
    }

    const [movie] = await connection.query('SELECT * FROM movie WHERE id = ?;', [uuid])

    return movie[0]
  }

  static delete = async ({ id }) => {
    // To do + To do search by genre
  }

  static update = async ({ id, object }) => {
    // To do
  }
}
