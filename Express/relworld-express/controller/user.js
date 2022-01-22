const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

exports.showLogin = async (req, res, next) => {
  try {
    res.render('login', {
      isLogin: true
    })
  } catch (err) {
    next(err)
  }

}

exports.showRegister = async (req, res, next) => {
  try {
    res.render('login')
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    // if (!req.body.emil) {
    //   return res.render('login', {
    //     isLogin: true,
    //     errors: ['邮箱不能为空']
    //   })
    // }
    res.send('post register')
  } catch (err) {
    next(err)
  }
}