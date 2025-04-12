/*
  Se puden utilizar dos modulos en node cjs (common js) y mjs(ES js)
  - El primero utiliza el modulo module.export y require para consumir el archivo importado/exportado
  - El segundo utiliza el modulo export y el export default (con el primero se puede modificar el nombre de
    la funcion que se importa y de la segunda manera (nombrada) no se pude modificar (se coloca {} para diferenciarlo))
*/

/* Uso de node para acceder a info del sistema operativo */
const os = require('node:os')

console.log('Informacion del sistema operativo')
console.log('---------------------------------')

console.log('Nombre del sistema operativo: ' + os.platform())
console.log('Version del sistema operativo: ' + os.release())
console.log('Arquitectura: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('Memoria libre: ', os.freemem() / 1024 / 1024)
console.log('Memoria total: ', os.totalmem() / 1024 / 1024)
console.log('Uptime: ', os.uptime() / 60 / 60)


