const bcrypt = require('bcrypt')
const password = "1234segura"
const saltOrRound = 5
let passwordEncripted = null

// Callback
// bcrypt.hash(password, saltOrRound, (error, encripted) => {
//     if ( error ) {
//         return error
//     }

//     passwordEncripted = encripted
// })

// Then
// bcrypt.hash(password, saltOrRound)
// .then(encripted => passwordEncripted = encripted)
// .catch(error => console.log(error))

// Async await
async function passwordEncript(password, salt) {
    try {
        const result = await bcrypt.hash(password, salt)
        return result
    } catch( error ) {
        console.log(error)
    }
}

async function savePasswordEncripted() {
    passwordEncripted = await passwordEncript(password, saltOrRound)

    // Compare passwords encripted
    bcrypt.compare(password, passwordEncripted)
    .then(res => console.log(res))
    .catch(error => console.error(error))
}

savePasswordEncripted()
