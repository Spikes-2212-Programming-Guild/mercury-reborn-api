import {Router} from "express"
import {savePitScouting} from "../../bl/pit"

const router = Router()

router.post("/team/submit", (req, res) => {
  savePitScouting(req.body.match).then(() => res.end())
})

export {router as pit}