// const http = require('http')
// const port = 5000

// const server = http.createServer((req, res) => {
//     res.end('Esta es la respuesta')
// })

// server.listen(port, () => console.log("funcionando"))
const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
    console.log(req.url)
    res.send('Esta es la respuesta')
})

app.post('/create', (req, res) => {
    console.log(req.body)

    const { name, last } = req.body
    if(!name || !last) {
        return res.redirect('/404.html')
    }

    fs.writeFile(`public/files/${name}.text`, last, (err) => {
        if(err) return res.send('Fallo al crea archivo')

        res.download(__dirname + `/public/files/${name}.text`)
    })
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})