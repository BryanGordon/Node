/** Process proporciona informacion y  control 
 * del objeto actual de ejecucion  */

// Argumentos de entrada

// console.log(process.argv)

// Controlar el proceso y su salida
// 0 es para indicar que el proceso continua y ha salido bien
// 1 es para indicar que ha habido un error y tiene que salir

// process.exit(1)

// Controlar eventos del proceso
/*
process.on('exit', () => {
  // limpiar recursos/consola
})
*/

// Current working directory
// Permite saber desde que carpeta se ejecuta el proceso

// console.log(process.cwd())

// Uso en plataforma
// Variables de entorno

console.log(process.env.NODE_ENV)
