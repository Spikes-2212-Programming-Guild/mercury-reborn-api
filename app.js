import express from "express"
import bodyParser from "body-parser"
import api from "./api"
import config from "./config.json"
import {initializeConnection} from "./dal"


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/login", api.login)
app.use("/config", api.config)
app.use("/scouting/field", api.scouting.field)
app.use("/scouting/pit", api.scouting.pit)

initializeConnection(config.mongo.url, config.mongo.db, config.mongo.collectionNames)
  .then(() => {
    app.listen(config.http.port, () => {
      console.log("started web server for mercury on port " + config.http.port)
    })
  })
  .catch(err => console.error(err))
