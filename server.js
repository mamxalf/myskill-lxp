const express = require('express')
// const cookieParser = require('cookie-parser')
// const logger = require('morgan')

const v1 = require('./src/app/routes/v1')

const app = express()

// app.use(logger('dev'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())

app.get('/', function (req, res, next) {
  res.send('Hi!')
})
// app.group('/api', (router) => {
//   router.group('/v1', (router) => {
//     router.use('/', v1)
//   })
// })

const port = process.env.port || 8080
app.listen(port, () => {
  console.log(`listen on ${port}....`)
})

module.exports = app
