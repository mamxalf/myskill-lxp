const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const v1 = require('./src/app/routes/v1')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', function (req, res, next) {
  res.send('Hi!')
})

// Router V1
app.use('/api', v1)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})

module.exports = app
