const express = require('express')

const app = express()

const router = require('./router')

// next下一个中间件
// 不做任何限定的中间件
// app.use((req, res, next) => {
//   console.log(req.method, req.url, new Date())
//   next()
// })

// 限定请求路径
// app.use('/user/:id', (req, res, next) => {
//   console.log('Request Type', new Date())
//   next()
// })

// 多个处理函数
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type', new Date())
  next()
}, (req, res, next) => {
  console.log('Request Type2', new Date())
  next()
})

// 限定请求方法 + 请求路径
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about')
})

app.use('/api', router)

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
