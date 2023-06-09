const express = require('express')
const router = require('./routes/index')
const app = express()
const port = 8080

app.use('/', router)

// Middleware final que se ejecuta despues de analizar todas las rutas y no encontrar la solicitada
app.use(function(req, res, next) {
    res.status(404).send(`Sorry cant find ${ req.url } with ${ req.method } method!`);
    next()
}, (req, res, next) => {
    console.log('End')
    next()
}, (req, res, next) => {
    console.log('End End')
});


app.listen(port, () => {
    console.log('puerto', port, 'abierto')
})