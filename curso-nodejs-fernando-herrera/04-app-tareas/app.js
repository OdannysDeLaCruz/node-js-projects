
require('colors')
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')
const { saveDB, readDB } = require('./helpers/saveFile')

const main = async () => {
    let opt = ''
    const tareas = new Tareas()
    const tareasDB = readDB()

    if ( tareasDB ) {
        tareas.crearTareasFromArray( tareasDB )
    }

    do {
        opt = await inquirerMenu()

        if ( opt == 1 ) {
            const tarea = await leerInput('¿Que quieres hacer?')
            tareas.crearTarea( tarea )
        } else if( opt == 2 ) {
            tareas.renderTarea()
        } else if( opt == 3 ) {
            tareas.listarCompletadas()
        } else if( opt == 4 ) {
            tareas.listarCompletadas( false )
        } else if( opt == 5 ) {

        } else if( opt == 6 ) {
            const id =  await listadoTareasBorrar( tareas.listadoArr )
            console.log(id)
        }

        saveDB( tareas.listadoArr )

        await pausa()
    } while ( opt !== 0 )    
}

main()