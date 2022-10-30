var express = require('express')
require('express-group-routes')
var router = express.Router()

// V1 Register
const healthRoutes = require('./health')

router.group('/', (router) => {
  router.use('/health', healthRoutes)
})

module.exports = router
