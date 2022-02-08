const express = require('./express')

const app = express()

// 不验证请求方法
// app.use((req, res, next) => {
//   console.log('hello1')
//   next()
// }, (req, res, next) => {
//   console.log('hello2')
//   res.end('h')
// })

// app.use('/foo', (req, res, next) => {
//   res.end('hello')
// })

app.get('/', (req, res, next) => {
  console.log('get 1')
  next()
}, (req, res, next) => {
  console.log('get 2')
  next()
}, (req, res, next) => {
  console.log('get 2')
  res.end('hello')
})


// app.get('/foo', (req, res, next) => {
//   console.log('foo 1')
//   setTimeout(() => {
//     next()
//   }, 1000)
// })

// app.get('/foo', (req, res, next) => {
//   console.log('foo 2')
//   next()
// })

// app.get('/foo', (req, res, next) => {
//   console.log('foo 3')
//   res.end('foo 3')
// })


// app.get('/ab?cd', (req, res) => {
//   res.end('/ab?cd')
// })

// app.get('/ab*cd', (req, res) => {
//   res.end('/ab*cd')
// })

// app.get('/user/:userId/books/:bookId', (req, res) => {
//   console.log(req.params)
//   res.end('/user/:userId/books/:bookId')
// })

// app.get('/about', (req, res) => {
//   res.end('get about')
// })


// app.post('/about', (req, res) => {
//   res.end('post about')
// })

console.log(app._router.stack[0])

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
