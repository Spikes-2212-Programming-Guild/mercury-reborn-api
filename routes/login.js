const router = require('express').Router()
const passwords = require('../passwords.json')

Object.keys(passwords).forEach((loginOption) => {
  router.get(`/${loginOption}`, (req, res) => {
    if (req.body.password) {
      const password = req.body.password
      if (password === passwords[loginOption].password) {
        res.end(passwords[loginOption].key)
      } else {
        res.end('no password')
      }
    } else {
      res.end('no password')
    }
  })
})

module.exports = router
