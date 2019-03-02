import {Router} from "express"
import {addMatch} from "../../bl/field/add-match"

const router = Router()

router.post("/match/submit", (req, res) => {
  const {teamNumber, match} = req.body
  addMatch(teamNumber, match)
    .then(() => res.end())
})

export {router as field}