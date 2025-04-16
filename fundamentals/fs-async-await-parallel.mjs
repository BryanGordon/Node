/* Uso de fs con async / await */

// Se puede hacer de la forma normal
// usando mjs

import { readFile } from 'node:fs/promises';

// Funcion asincrona paralela

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
  console.log('primer texto --> ' + text),
  console.log('segundo texto --> ' + text2)
})

/** Funcion asincrona secuencial  

async function init () {
  const text = await fs.readFile('./archivo.txt', 'utf-8')
    console.log('primer texto --> ' + text)
    
    console.log('Ejecutando codigo mientras se ejecuta otra cosa')
    
    const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto --> ' + text2)
}

init()
*/


