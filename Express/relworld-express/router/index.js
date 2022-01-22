const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.html')
})

router.use(require('./user'))

module.exports = router