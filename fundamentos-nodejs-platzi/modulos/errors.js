// syncronous errors
// function seRompe() {
//     return 3 + z
// }

// try {
//     seRompe()
// } catch (error) {
//     console.log(error.message)
// }

// console.log('Script end')

// Asyncronous erros

function seRompeAsyncronous(cb) {
    setTimeout(() => {
        try {
            return 3 + x
        } catch ( error ) {
            cb(error)
        }
    }, 1000)
}

try {
    seRompeAsyncronous((error) => {
        if ( error ) {
            console.log(error.message)
        }
    })
} catch ( error ) {
    console.log(error.message)
}
