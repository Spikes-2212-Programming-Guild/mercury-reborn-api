const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config.json')

const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/login', routes.login)

app.listen(config.http.port, () => {
  console.log('started web server for mercury on port ' + config.http.port)
})
