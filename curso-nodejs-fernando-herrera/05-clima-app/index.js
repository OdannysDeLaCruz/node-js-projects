
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")
const Busquedas = require("./models/busquedas")

const main = async () => {
    let opt = null
    const busquedas = new Busquedas()
    
    do {
        opt = await inquirerMenu()
        
        switch( opt ) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ')

                // Buscar los lugares
                await busquedas.ciudad(lugar)

                // Seleccionar el lugar
                // Datos del clima
                //Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad:', )
                console.log('Lat:', )
                console.log('Lng:', )
                console.log('Temperatura:', )
                console.log('Mínima:', )
                console.log('Maxima:', )
        }

        opt !== 0 ? await pausa() : false
    } while (opt !== 0)
}

main()