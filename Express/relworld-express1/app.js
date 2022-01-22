const express = require('express')
const morgan = require('morgan')
const router = require('./router')
const path = require('path')
const errorhandler = require('errorhandler')
require('./model')

const app = express()


app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
// 配置文件的存储目录
app.set('views', path.join(__dirname, 'views'));
// 可以省略的后缀名
app.set('view engine', 'html');

const PORT = process.env.PORT || 30000

app.use(router)

// 统一处理异常
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
