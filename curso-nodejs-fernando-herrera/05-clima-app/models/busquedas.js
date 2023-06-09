const axios = require('axios')

class Busquedas {
    historial = ['Bogotá']

    constructor() {

    }

    async ciudad( lugar = '' ) {
        // peticion http
        const resp = await axios.get('https://reqres.in/api/users?page=2')

        console.log(resp.data)

        return [] //lugares encontrados
    }
}

module.exports = Busquedas