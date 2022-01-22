const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/login', userCtrl.showLogin)

router.get('/register', userCtrl.showRegister)

router.post('/register', userValidator.register, userCtrl.register)

module.exports = router