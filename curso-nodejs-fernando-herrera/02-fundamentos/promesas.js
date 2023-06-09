const empleados = [
    {
        id: 1,
        empleado: 'Luis',
    },
    {
        id: 2,
        empleado: 'Carlos',
    },
    {
        id: 3,
        empleado: 'Lily',
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    }
]

const getEmpleado = ( id ) => {
    return new Promise(( resolve, reject ) => {
        const empleado = empleados.find( (e) => e.id == id);

        ( empleado )  
            ? setTimeout(( ) => {
                resolve(empleado)
            }, 2000) 
            : reject(`No existe empleado ${ id }`)
    })
}

const getSalario = ( empleado ) => {
    return new Promise(( resolve, reject ) => {
        const salario = salarios.find( (s) => s.id == empleado.id)?.salario;

        ( salario )
            ? setTimeout(( ) => {
                resolve(salario)
            }, 0)
            : reject(`Usuario ${ empleado.empleado } no tiene salario`)
    })
}

const id = 3

// getEmpleado( id )
// .then(( empleado ) => {
//     console.log( empleado.empleado )
//     getSalario( empleado )
//     .then( salario => console.log( salario ) )
//     .catch( error => {
//         console.log(error)
//     })
// })
// .catch( error => {
//     console.log(error)
// })

// Promesas encadenadas
let nombre 

getEmpleado( id )
.then( empleado  => {
    nombre = empleado.empleado
    return getSalario( empleado )
})
.then( salario => {
    console.log('El empleado ', nombre, ', tiene un salario de: ', salario)
})
.catch( error => {
    console.log(error)
})

