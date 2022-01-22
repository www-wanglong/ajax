const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON()

    const token = await jwt.sign({
      userId: user._id
    }, jwtSecret, {
      expireIn: 60 * 60 * 24
    })

    delete user.password
    res.status(200).json({
      ...user,
      token
    })
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    console.log(req.body.user)

    let user = new User(req.body.user)

    await user.save()

    user = user.toJSON()
    delete user.password

    res.status(201).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

exports.getCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user
    })
  } catch (err) {
    next(err)
  }
}

exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}