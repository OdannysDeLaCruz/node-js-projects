const inquirer = require('inquirer')
require('colors')

const inquirerMenu = async () => {
    const menuOpt = {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices: [
            { 
                value: 1, 
                name: `${ '1.'.green } Crear tarea`, 
            },
            { 
                value: 2, 
                name: `${ '2.'.green } Listar tareas`, 
            },
            { 
                value: 3, 
                name: `${ '3.'.green } Listar tareas completadas`, 
            },
            { 
                value: 4, 
                name: `${ '4.'.green } Listar tareas pendientes`, 
            },
            { 
                value: 5, 
                name: `${ '5.'.green } Completar tarea(s)`, 
            },
            { 
                value: 6, 
                name: `${ '6.'.green } Borrar tarea`, 
            },
            { 
                value: 0, 
                name: `${ '0.'.green } Salir`, 
            },
        ]
    }
    console.clear()
    console.log('==========================='.green)
    console.log('   Seleccione una opción')
    console.log('===========================\n'.green)

    const { option } = await inquirer.prompt(menuOpt)
    return option
}

const pausa = async () => {
    const menuOpt = {
        type: 'input',
        name: 'enter',
        message: `Presiona ${ 'ENTER'.green } para continuar`,
    }
    console.log('\n')
    await inquirer.prompt(menuOpt)
}

const leerInput = async ( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if ( value.length == 0 ) { 
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc
}

const renderListCheck = async ( choices ) => {
    const opt = [
        {
            type: 'checkbox',
            message: 'Select toppings',
            name: 'toppings',
            choices,
            validate(answer) {
                if (answer.length < 1) {
                    return 'You must choose at least one topping.';
                }

                return true;
            },
        },
    ]
    const res = await inquirer.prompt(opt)
    console.log(res)
    return res   
}

const listadoTareasBorrar = async ( tareas = [] ) => {
    const choices = tareas.map( ( tarea, i ) => {
        const index = `${ i + 1 }`.green
        return {
            value: tarea.id,
            name: `${ index } ${ tarea.desc }`,
        }
    })

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(question)
    return id
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    renderListCheck,
    listadoTareasBorrar
}