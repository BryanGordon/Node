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
    const result = await connection.query(
      'SELECT * FROM movie;'
    )
    console.log(result)
  }

  static getById = async ({ id }) => {
    const [movies] = await connection.query(
      'SELECT title, year, director, duration, poster, rate, id FROM movie WHERE id = id;'
    )

    if (movies.length === 0) return null

    return movies[0]
  }

  static create = async ({ object }) => {

  }

  static delete = async ({ id }) => {

  }

  static update = async ({ id, object }) => {

  }
}
