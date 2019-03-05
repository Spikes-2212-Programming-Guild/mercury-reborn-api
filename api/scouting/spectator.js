import {Router} from "express"
import { saveSpectatorMatch } from "../../bl/spectator"

const router = Router()

router.post("/match/submit", (req, res) => {
  const {match} = req.body
  saveSpectatorMatch(match)
    .then(res.end())
})

export {router as spectator}