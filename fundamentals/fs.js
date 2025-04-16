/* File sistem with node */

/* File stats */
const fs = require('node:fs')

/*
const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // saber si es un fichero
  stats.isDirectory(), // saber si es directorio
  stats.isSymbolicLink(), // saber si es un enlace simbolico
  stats.size, // Peso en bytes
)
*/
/** Read files */

// const text = fs.readFileSync('./archivo.txt', 'utf-8')

// Forma async usando callbacks

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log(text)
})

console.log('Ejecutando codigo mientras se ejecuta otra cosa')

fs.readFile('./archivo2.txt', 'utf-8', (err, text2) => {
  console.log(text2)
})
