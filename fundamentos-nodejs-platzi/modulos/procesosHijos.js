const { exec, spawn, spawnSync } = require('child_process')
// exec('node console.js', function(error, stdout) {
//     if ( error ) {
//         console.error(error)
//     }

//     console.log(stdout)
// })

function runScript(command, args) {
    const proceso = spawnSync(command, args)
    return proceso.stdout.toString()
}

console.log(runScript('ls', ['-lh']))

// console.log(proceso.pid)
// console.log(proceso.connected)

// proceso.stdout.on('data', function(data) {
//     console.log(`stdout: ${data}`)
//     // console.log(data.toString())
// })

// proceso.on('exit', function() {
//     console.log('El proceso terminó')
// })

// proceso.on('close', function(code) {
//     console.log(`child process exited with code ${code}`)
// })

