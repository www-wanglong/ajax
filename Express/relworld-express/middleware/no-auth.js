const { jwtSecret } = require('../config/config.default')
const { verify } = require('../util/jwt')

// 验证用户信息
module.exports = async (req, res, next) => {
  // 检查有没有session user
  const sessionUser = req.session.user
  if (sessionUser) {
    return res.redirect('/')
  }
  next()
}