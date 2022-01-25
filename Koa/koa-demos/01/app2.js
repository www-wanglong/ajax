/**
 * 中间件
 */
const Koa = require('koa')
const fs = require('fs')
const util = require('util')
const compose = require('koa-compose')

const app = new Koa()

/** 异常处理 在最外层添加 */
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.throw(500)
  }
})

/** 异步处理 */
app.use(async (ctx, next) => {
  const data = await util.promisify(fs.readFile)('./views/index.html', 'utf8')
  ctx.type = 'html'
  ctx.body = data
  next()
})

const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  next();
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

// app.use(one);
// app.use(two);
// app.use(three);
// 合并中间件
app.use(compose([one, two, three]))

app.listen(30000, () => {
  console.log('http://localhost:30000')
})

