const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')
const noAuth = require('../middleware/no-auth')

const router = express.Router()

router.get('/login', noAuth, userCtrl.showLogin)

router.get('/register', noAuth, userCtrl.showRegister)

router.get('/logout', userCtrl.logout)

router.get('/setting', auth, userCtrl.showSetting)

router.post('/register', noAuth, userValidator.register, userCtrl.register)

router.post('/login', noAuth, userValidator.login, userCtrl.login)

module.exports = router