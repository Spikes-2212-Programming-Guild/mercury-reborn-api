import {Router} from "express"
import { getPitScouting, savePitScouting } from "../../bl/pit"

const router = Router()

router.post("/team/submit", (req, res) => {
  savePitScouting(req.body.form).then(() => res.end())
})

router.get("/team/:team_id", (req, res) => {
  const {team_id} = req.params

  getPitScouting(team_id)
    .then(pitScouting => res.json(pitScouting))

})

export {router as pit}