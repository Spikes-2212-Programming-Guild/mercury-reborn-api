import {Router} from "express"
import { getAllSavedMatchNames, getFieldScouting, summarizeMatchesForTeam, getAllTeamIds} from "../../bl/field"

const router = Router()

router.get("/match-names", (req, res) => {
  getAllSavedMatchNames().then(matchNames => res.json(matchNames))
})

router.get("/match/:team_id/:match_name", (req, res) => {
  const {team_id, match_name} = req.params

  getFieldScouting(team_id, match_name)
    .then(match => res.json(match))

})

router.get("/teams/", (req, res) => {
  getAllTeamIds().then(teams => res.json(teams))
})

router.get("/matches/:team_id", (req, res) => {
  const {team_id} = req.params

  summarizeMatchesForTeam(team_id)
    .then(summ => res.json(summ))
})


export {router as field}