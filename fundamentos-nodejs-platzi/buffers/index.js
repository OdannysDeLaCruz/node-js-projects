// alloc permite definir cuantos espacios tiene el buffer
// let buffer = Buffer.alloc(1)

// from permite ocupar espacios en el buffer a partir de los datos pasados
// let buffer = Buffer.from([1,2,3,1])
// let buffer = Buffer.from('Hola')
// let buffer = Buffer.from(['Hola', 'Mundo'])

let abc = Buffer.alloc(2)
abc[0] = abc[0] + 65
abc[1] = abc[1] + 66
console.log(abc.toString())