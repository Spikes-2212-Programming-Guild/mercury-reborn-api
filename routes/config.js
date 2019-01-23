import { Router } from "express"
import gameConfig from "../config.json"

const scoutingForm = require(`../${gameConfig.data.form}`)

const router = Router()

router.get("/event-name", (req, res) => {
  res.json(gameConfig.data.eventName)
})

router.get("/form", (req, res) => {
  res.json(scoutingForm)
})

router.get("/tba-key", (req, res) => {
  res.json(gameConfig.data.tbaKey)
})


export {router as config}