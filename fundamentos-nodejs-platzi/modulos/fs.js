const { writeFile, readFile, unlink } = require('fs').promises
// const { promisify } = require('util')

// const write = promisify(writeFile)
// const read = promisify(readFile)

async function getData() {
    try {
        const fileName = 'file1.txt'
        await writeFile(fileName, 'Mi texto de prueba')
        // Read file
        const content = await readFile(fileName, 'utf-8')
        console.log(content)
        // Delete file
        setTimeout(async () => {
            await unlink(fileName)
        }, 3000)
    } catch ( error ) {
        console.log(error)
    }
}

// function getData() {
//     writeFile('file3.txt', 'Mi texto de prueba', () => {
//         console.log('ok')
//     })
// }

getData()

