// process es una variable global, no es necesario requirirla
// console.log(process)

// uncaughtException para excepciones que no han sido atrapadas por un try catch
process.on('uncaughtException', function(error, origen) {
    console.log('Exception atrapada')
})

// uncaughtRejection
process.on('unhandledRejection', function(error, origen) {
    console.log('Rejection atrapada')
})
// process.on("unhandledRejection")

process.on('beforeExit', function() {
    console.log('Casi termina el proceso')
})

process.on('exit', function() {
    console.log('Terminó el proceso')
})

function rejection() {
    return new Promise((resolve, reject) => {
        resolve('Ok')
        // reject('Error')
    })
}

function tryCatchRejection() {
    rejection()
    .then( res => {
        console.log(res)
    })
    // .catch( error => {
    //     console.log(error)
    // })
}

tryCatchRejection()

// try {
    // hola()
// } catch ( error ) {
//     console.log(error)
// }
