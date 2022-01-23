const express = require('express')
const morgan = require('morgan')
const router = require('./router')
const mongoose = require('mongoose')
const path = require('path')
const errorhandler = require('errorhandler')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const { dbUrl, sessionSecret } = require('./config/config.default')
require('./model')

const app = express()

// 配置使用session 中间件
// 默认存在内存中
//  存储 Session  req.session.xxx = xxx
//  获取 Session  req.session.xxx
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
    // secure: true
  }, // 保存cookie的配置,只有https设置才有
  store: MongoStore.create({
    mongoUrl: dbUrl
  })
}))

app.use((req, res, next) => {
  // 统一给模板添加数据
  app.locals.sessionUser = req.session.user
  next()
})

// 静态资源托管
app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

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
