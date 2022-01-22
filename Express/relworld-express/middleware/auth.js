const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')
const { verify } = require('../util/jwt')

// 验证用户信息
module.exports = async (req, res, next) => {
  let token = req.headers['authorization']
  token = token ? token.split('Bearer ')[1] : null
  if (!token) {
    return res.status(401).end()
  }

  try {
    const decodedToken = await verify(token, jwtSecret)
    req.user = await User.findById(decodedToken.userId)
    next()
  } catch (err) {
    return res.status(401).end()
  }
}