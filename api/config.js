import { Router } from "express"
import gameConfig from "../config.json"

const forms = require(`../${gameConfig.data.forms}`)

const router = Router()

router.get("/event-name", (req, res) => {
  res.json(gameConfig.data.eventName)
})

router.get("/field-form", (req, res) => {
  res.json(forms.field)
})

router.get("/pit-form", (req, res) => {
  res.json(forms.pit)
})

router.get("/spectator-form", (req, res) => {
  res.json(forms.spectator)
})

router.get("/tba-key", (req, res) => {
  res.json(gameConfig.data.tbaKey)
})


export {router as config}