const express = require('express')
require('express-group-routes')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const { heatlhRoutes } = require('./src/app/routes')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.group('/api', (router) => {
  router.group('/health', (health) => {
    health.use('/', heatlhRoutes)
  })
})

module.exports = app
