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



export {router as config}