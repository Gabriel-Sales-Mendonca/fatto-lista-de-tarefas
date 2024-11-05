require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const homeRoutes = require('./src/routes/homeRoutes')

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/', homeRoutes)
    }
}

module.exports = new App().app