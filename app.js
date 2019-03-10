import express from "express"
import bodyParser from "body-parser"
import api from "./api"
import config from "./config.json"
import {initializeConnection} from "./dal"


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api/login", api.login)
app.use("/api/config", api.config)
app.use("/api/scouting/field", api.scouting.field)
app.use("/api/scouting/pit", api.scouting.pit)
app.use("/api/scouting/spectator", api.scouting.spectator)
app.use("/api/tactics/field", api.tactics.field)
app.use("/api/tactics/pit", api.tactics.pit)
app.use("/api/tactics/spectator", api.tactics.spectator)

initializeConnection(config.mongo.url, config.mongo.db, config.mongo.collectionNames)
  .then(() => {
    app.listen(config.http.port, () => {
      console.log("started web server for mercury on port " + config.http.port)
    })
  })
  .catch(err => console.error(err))
