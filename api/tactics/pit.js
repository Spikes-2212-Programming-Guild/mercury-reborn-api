import {Router} from "express"
import { getAllSavedTeamIds } from "../../bl/pit"

const router = Router()


router.get("/team-ids", (req, res) => {
  getAllSavedTeamIds().then(team_ids => res.end(team_ids))
})

export {router as pit}