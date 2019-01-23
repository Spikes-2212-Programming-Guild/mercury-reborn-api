import express from "express"
import bodyParser from "body-parser"
import routes from "./routes"
import config from "./config.json"
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/login", routes.login)

app.listen(config.http.port, () => {
  console.log("started web server for mercury on port " + config.http.port)
})
