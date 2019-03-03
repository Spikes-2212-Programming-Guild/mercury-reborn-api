import {Router} from "express"
import { getAllSavedMatchNames, getFieldScouting } from "../../bl/field"

const router = Router()

router.get("/match-names", (req, res) => {
  getAllSavedMatchNames().then(matchNames => res.json(matchNames))
})

router.get("/match/:team_id/:match_name", (req, res) => {
  const {team_id, match_name} = req.params

  getFieldScouting(team_id, match_name)
    .then(match => res.json(match))

})


export {router as field}