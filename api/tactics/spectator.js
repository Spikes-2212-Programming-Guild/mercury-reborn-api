import {Router} from "express"
import { getAllSavedMatchNames, getMatch } from "../../bl/spectator"

const router = Router()

router.get("/match-names", (req, res) => {
  getAllSavedMatchNames().then(match_names => {
    res.json(match_names)
  })
})

router.get("/match/:match_name", (req, res) => {
  getMatch(req.params.match_name).then(match => res.json(match))
})

export {router as spectator}