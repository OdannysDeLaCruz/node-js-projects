const { v4: uuidv4 } = require('uuid');

class Tarea {
    id = ''
    desc = ''
    completadoEn = null
    
    create(desc) {
        this.id = uuidv4()
        this.desc = desc
        this.completadoEn = null
    }
    createFromObject(tarea) {
        this.id = tarea.id
        this.desc = tarea.desc
        this.completadoEn = tarea.completadoEn
    }

}


module.exports = Tarea