const { Router } = require('express')

const route = new Router()

route.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
})

module.exports = route