import {Router} from "express"
import { getAllSavedMatchNames } from "../../bl/field"

const router = Router()

router.get("/match-names", (req, res) => {
  getAllSavedMatchNames().then(matchNames => res.json(matchNames))
})

export {router as field}