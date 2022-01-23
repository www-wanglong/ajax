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
    const user = new User(req.body.user)
    await user.save()
    // 保存登陆状态
    req.session.user = user
    res.status(200).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

exports.login = async (req, res, next) => {
  try {
    const user = req.user
    req.session.user = user
    res.status(200).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

exports.logout = async (req, res, next) => {
  try {
    req.session.user = null
    res.redirect('/')
  } catch(err) {
    next(err)
  }
}

exports.showSetting = async (req, res, next) => {
  try {
    res.render('settings')
  } catch (err) {
    next(err)
  }
}