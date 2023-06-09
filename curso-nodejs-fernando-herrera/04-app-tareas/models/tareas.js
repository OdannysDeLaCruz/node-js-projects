const { renderListCheck } = require('../helpers/inquirer')
const Tarea = require('./tarea')
require('colors')

/**
 * _listado:
 * { 'uuid-1234344-123232-12': { id: 12, desc: 'asd', compleadoEn: 988989 } }
 */

class Tareas {
    _listado = {}

    constructor() {
        this._listado = {}
    }

    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach( key => {
            listado.push( this._listado[key] )
        } )
        return listado
    }

    crearTarea ( desc = '' ) {
        const tarea = new Tarea()
        tarea.create(desc)
        this._listado[tarea.id] = tarea
    }
    
    crearTareasFromArray( tareas = [] ) {
        tareas.forEach( objectTarea => {
            const tarea = new Tarea()
            tarea.createFromObject(objectTarea)
            this._listado[tarea.id] = tarea
        })
    }

    async renderTarea() {
        this.listadoArr.forEach( ( tarea, index ) => {
            const i = `${ index + 1 }.`.green
            console.log(`${ i } ${ tarea.desc } :: ${ tarea.completadoEn ? 'Compleada'.green : 'Pendiente'.red }` )
        } )
    }

    listarCompletadas( completadas = true ) {
        let counter = 0;
        this.listadoArr.forEach( tarea => {
            if ( completadas ) {
                if ( tarea.completadoEn ) {
                    counter += 1
                    const i = `${ counter }.`.green
                    console.log(`${ i } ${ tarea.desc } :: ${ 'Compleada'.green }` )
                }
            } else {
                if ( !tarea.completadoEn ) {
                    counter += 1
                    const i = `${ counter }.`.green
                    console.log(`${ i } ${ tarea.desc } :: ${ 'Pendiente'.red }` )
                }
            }
        } )
    }
}

module.exports = Tareas