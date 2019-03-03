import {Router} from "express"
import { getAllSavedMatchNames } from "../../bl/spectator"

const router = Router()

router.get("/match-names", (req, res) => {
  getAllSavedMatchNames().then(match_names => {
    res.end(match_names)
  })
})

export {router as spectator}