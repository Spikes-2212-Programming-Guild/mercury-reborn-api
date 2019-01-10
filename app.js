const express = require('express')
const config = require('./config.json')

const app = express()

app.listen(config.http.port, () => {
  console.log('started web server for mercury on port ' + config.http.port)
})
