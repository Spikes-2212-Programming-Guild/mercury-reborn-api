import express from "express"
import passwords from "../passwords.json"

const router = express.Router()
Object.keys(passwords).forEach((loginOption) => {
  router.get(`/${loginOption}`, (req, res) => {
    const password = req.query.password
    if (password === passwords[loginOption].password) {
      res.end(passwords[loginOption].key)
    } else {
      res.status(401).send("incorrect password")
    }
  })
})
export { router as login }
