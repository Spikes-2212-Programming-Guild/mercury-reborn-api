import express from "express"
import bodyParser from "body-parser"
import api from "./api"
import config from "./config.json"
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/login", api.login)
app.use("/config", api.config)

app.listen(config.http.port, () => {
  console.log("started web server for mercury on port " + config.http.port)
})
