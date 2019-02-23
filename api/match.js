import {Router} from "express"
import {addMatch} from "../bl/add-match"

const router = Router()

router.post("/match/submit", (req, res) => {
  const {teamNumber, form: match} = req.data
  addMatch(teamNumber, match)
    .then(() => res.end())
})

export default router