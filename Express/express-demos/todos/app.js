const express = require('express')
const morgan = require('morgan')

const router = require('./router')

const app = express()
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// 配置解析表单解析体 application/json
app.use(express.json())
// application/x-www-form-urlencode
//app.use(express.urlencoded())

app.use('/todos', router)

// 404内容处理
app.use((req, res, next) => {
  res.status(404).send('404 Not Fount')
})

// 错误处理
app.use((err, req, res, next) => {
  console.log('error', err)
  res.status(500).json({
    error: err.message
  })
})


app.listen(30000, () => {
  console.log('server running at http://localhost:30000')
})