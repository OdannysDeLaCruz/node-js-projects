const express = require('express')
const router = express.Router()

const books =  [
    { "id": 1, "name": "Book 1" },
    { "id": 2, "name": "Book 2" },
    { "id": 3, "name": "Book 3" },
]

// Meddleware
router.use(express.json())

router.get('/:id?', ( req, res ) => {
    const { id = null } = req.params
    if ( id ) {
        const book = books.filter( book => book.id == Number(id) )
        res.json(book)
    } else {
        res.json(books)
    }
})

router.post('/', ( req, res ) => {
    const { id, name } = req.body

    if ( !id || !name ) {
        res.status(400).json({ "msg": 'Faltan campos obligatorios'})
    }
    if ( typeof id !== "number" ) {
        res.status(400).json({ "msg": 'Id debe ser de tipo numero '})
    }
    if ( typeof name !== "string" ) {
        res.status(400).json({ "msg": 'name debe ser de tipo string '})
    }
    res.json({ id, name })
})

module.exports = router