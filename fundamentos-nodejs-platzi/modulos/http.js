const http = require('http')
const url = require('url')


const PORT = 8080

const router = (req, res) => {
    const { pathname } = url.parse(req.url, true)
    
    switch(pathname) {
        case '/':
            res.write('Bienvenido')
            res.end()
            break;
        case '/users':
            res.write('Pagina de usuarios')
            res.end()
            break;
        default:
            res.write('Page not found | 404 error')
            res.end()           
    }
}

const server = http.createServer(router)

server.listen(PORT, 'localhost', function(error) {
    if (error) {
        console.log(error.code)
    }

    console.log(`Listening at localshot:${PORT}`)
})