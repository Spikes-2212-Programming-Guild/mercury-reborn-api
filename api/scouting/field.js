import {Router} from "express"
import {addMatch} from "../../bl/field/add-match"

const router = Router()

router.post("/match/submit", (req, res) => {
  const {match} = req.body
  addMatch(match.team, match)
    .then(() => res.end())
})

export {router as field}