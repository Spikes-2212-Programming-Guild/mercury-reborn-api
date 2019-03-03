import {Router} from "express"
import { getPitScouting, savePitScouting } from "../../bl/pit"

const router = Router()

router.post("/team/submit", (req, res) => {
  savePitScouting(req.body.form).then(() => res.end())
})

export {router as pit}