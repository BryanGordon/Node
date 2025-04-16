/* Uso de fs con promises */

const fs = require('node:fs/promises')

fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto --> ' + text)
  })

console.log('Ejecutando codigo mientras se ejecuta otra cosa')

fs.readFile('./archivo2.txt', 'utf-8')
  .then(text2 => {
    console.log('segundo texto --> ' + text2)
  })