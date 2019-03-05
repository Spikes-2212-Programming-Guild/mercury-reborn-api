import {Router} from "express"
import {addMatch} from "../../bl/field"

const router = Router()

router.post("/match/submit", (req, res) => {
  const {match} = req.body
  addMatch(match.team_id, match)
    .then(() => res.end())
})

export {router as field}