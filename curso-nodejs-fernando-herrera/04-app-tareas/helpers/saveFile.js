const fs = require('fs')

const file = './db/data.json'

const saveDB = ( data ) => {
    fs.writeFileSync( file, JSON.stringify(data) )
}

const readDB = () => {
    if ( !fs.existsSync(file) ) {
        return null
    }

    const info = fs.readFileSync(file, { encoding: 'utf-8' })
    if(info) {
        return JSON.parse(info)
    }
    return []
}

module.exports = {
    saveDB,
    readDB
}