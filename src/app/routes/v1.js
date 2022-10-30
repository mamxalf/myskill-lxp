var express = require('express')
var router = express.Router({ mergeParams: true })

// V1 Register
const healthRoutes = require('./health')
const pingRoutes = require('./ping')

router.use('/health', healthRoutes)
router.use('/ping', pingRoutes)

module.exports = router
