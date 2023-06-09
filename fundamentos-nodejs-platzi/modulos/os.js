const os = require('os')

// console.log(os.arch()) // architecture
// console.log(os.platform())
// console.log(os.cpus(), os.cpus().length) // cores
// console.log(os.constants)
const SIZE = 1024
const kb = bytes => bytes / SIZE
const mb = bytes => kb(bytes) / SIZE
const gb = bytes => mb(bytes) / SIZE

console.log(os.freemem())
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log('Memoria disponible en GB:', gb(os.freemem()))
console.log('Memoria total en GB:', gb(os.totalmem()))

console.log(os.homedir()) // directorio de usuario
console.log(os.tmpdir()) // directorio temporal
console.log(os.hostname()) // nombre de la maquina 


