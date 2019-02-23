import {Router} from "express"
import {addMatch} from "../bl/add-match"

const router = Router()

router.post("/match/submit", (req, res) => {
  const {teamNumber, form} = req.data
  addMatch(teamNumber, form)
    .then(() => res.end())
})

export default router