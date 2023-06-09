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

const id = 3
const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id == id)?.empleado
    if(empleado) {
        callback(null, empleado)
    } else {
        callback(`No existe empleado ${ id }`)
    }
}

const getSalario = ( id, callback ) => {
    const salario = salarios.find( (e) => e.id == id)?.salario
    if(salario) {
        callback(null, salario)
    } else {
        callback(`Usuario ${ id } no tiene salario`)
    }
}

getEmpleado(id, ( error, empleado ) => {
    if ( error ) {
        console.log('Error')
        return console.log(error)
    }

    getSalario( id, ( error, salario ) => {
        if ( error ) {
            console.log('Error')
            return console.log(error)
        }
    
        console.log('El empleado: ', empleado, ', tiene un salario de: ', salario)
    })
})






