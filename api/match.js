import {Router} from "express"
import {addMatch} from "../bl/add-match"

const router = Router()

router.post("/submit", (req, res) => {
  const {teamNumber, match} = req.body
  addMatch(teamNumber, match)
    .then(() => res.end())
})

export {router as match}