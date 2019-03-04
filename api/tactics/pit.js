import {Router} from "express"
import { getAllSavedTeamIds, getPitScouting } from "../../bl/pit"

const router = Router()


router.get("/team-ids", (req, res) => {
  getAllSavedTeamIds().then(team_ids => res.json(team_ids))
})

router.get("/team/:team_id", (req, res) => {
  const {team_id} = req.params

  getPitScouting(team_id)
    .then(pitScouting => res.json(pitScouting))

})

export {router as pit}