/* Uso de fs con async / await */

// Se puede hacer de la forma normal
// usando mjs

const fs = require('node:fs/promises');

/** Forma de realizar con recursividad IIFE (Inmediatly Invoked Function Expression) 
(
  async () => {
    const text = await fs.readFile('./archivo.txt', 'utf-8')
    console.log('primer texto --> ' + text)
    
    console.log('Ejecutando codigo mientras se ejecuta otra cosa')
    
    const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto --> ' + text2)
})()

*/    

/** Otra forma de hacerla con una funcion */

async function init () {
  const text = await fs.readFile('./archivo.txt', 'utf-8')
    console.log('primer texto --> ' + text)
    
    console.log('Ejecutando codigo mientras se ejecuta otra cosa')
    
    const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto --> ' + text2)
}

init()

