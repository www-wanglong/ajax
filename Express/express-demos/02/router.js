// 路由模块

const express = require('express')

// 配置路由
const router = express.Router()

router.get('/foo', (req, res) => {
  res.send('get /foo')
})


module.exports = router

