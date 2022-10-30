var express = require('express')
var router = express.Router()

router.get('/check', function (req, res, next) {
  res.send("It's Allive!")
})

module.exports = router
