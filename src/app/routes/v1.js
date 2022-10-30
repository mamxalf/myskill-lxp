var express = require('express')
require('express-group-routes')
var router = express.Router()

// V1 Register
const heatlhRoutes = require('./health')

router.group('/', (router) => {
  router.use('/health', heatlhRoutes)
})

module.exports = router
