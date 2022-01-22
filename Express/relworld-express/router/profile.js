const express = require('express')

const router = express.Router()

// 登获取用户资料
router.post('/:username', async (req, res, next) => {
  try {
    res.send('/:username')
  } catch (err) {
    next(err)
  }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    res.send('/profiles/:username')
  } catch (err) {
    next(err)
  }
})

// 取消关注用户
router.delete('/:username/follow', async (req, res, next) => {
  try {
    res.send('/profiles/:username')
  } catch (err) {
    next(err)
  }
})


module.exports = router