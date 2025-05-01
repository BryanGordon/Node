import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static getAll = async ({ genre }) => {
    const result = await connection.query(
      'SELECT * FROM movie'
    )
    console.log(result)
  }

  static getById = async ({ id }) => {

  }

  static create = async ({ object }) => {

  }

  static delete = async ({ id }) => {

  }

  static update = async ({ id, object }) => {

  }
}
