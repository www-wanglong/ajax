/**
 * 使用Koa启动一个http服务
 */
const Koa = require('koa')
const Router = require('@koa/router')
const static = require('koa-static')
const path = require('path')
const mount = require('koa-mount')

const app = new Koa()
const router = new Router()

app.use(
  mount('/public', static(path.join(__dirname,  './public')))
)

router.get('/', (ctx, next) => {
  ctx.body = 'get'
})

router.get('/foo', (ctx, next) => {
  ctx.body = 'foo'
})

router.get('/bar', (ctx) => {
  // 重定向针对同步请求
  ctx.redirect('/foo')
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

