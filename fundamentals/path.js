/** Todo lo relacionado con extensiones, 
 * rutas (encontrar rutas, crear rutas), 
 * recurar extensiones */
const path = require('node:path')

// Devuelve el tipo de barras de carapetas que usa el sistema
// console.log(path.sep)


// unir rutas con path.join
// const filePath = path.join('content', 'subfolder', 'test.txt')
// console.log(filePath)

// Obtener el nombre de un archivo a traves de la ruta
// const base = path.basename('/tmp/files/passwords.txt')
// console.log(base)

// Obtener el nombre de un archivo a traves de la ruta
// sin extension
// const filename = path.basename('/tmp/files/passwords.txt', '.txt')
// console.log(filename)

// Obtener la extension de un archivo
const extension = path.extname('image.jpg')
console.log(extension)