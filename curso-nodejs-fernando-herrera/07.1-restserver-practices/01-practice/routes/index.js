const { Router } = require('express')
const routesBooks = require('./books')

const router = Router()

router.use('/books', routesBooks)

module.exports = router