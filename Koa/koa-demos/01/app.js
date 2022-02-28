/**
 * 使用Koa启动一个http服务
 */
const Koa = require('koa')
const Router = require('@koa/router')
const static = require('koa-static')
const path = require('path')
const mount = require('koa-mount')

const app = new Koa()


app.use(async (ctx, next) => {
  console.log(ctx.path)
  if (ctx.path === '/api/jsonp') {
    const { cb, msg } = ctx.query
    ctx.body = `${cb}(${JSON.stringify({ msg })})`
    return
  }
})


app.listen(3000, () => {
  console.log('http://localhost:3000')
})

