#!/usr/bin/env node

const Koa = require('koa')
const send = require('koa-send')
const path = require('path')
const compilerSfc = require('@vue/compiler-sfc')
const { Readable } = require('stream')

const app = new Koa()

// 把流换换成字符串
const streamToString = stream => new Promise((resolve, reject) => {
  const chunks = []
  stream.on('data', chunk => chunks.push(chunk))
  stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')))
  stream.on('error', reject)
})

// 把字符串转换成流
const stringToStream = text => {
  const stream = new Readable()
  stream.push(text)
  stream.push(null)
  return stream
}


// 3. 加载第三方模块 处理@modules
app.use(async (ctx, next) => {
  console.log(ctx.path)
  // ctx.path -->/@modules/vue
  if (ctx.path.startsWith('/@modules/')) {
    const moduleName = ctx.path.substring(10)
    const pkgPath = path.join(process.cwd(), 'node_modules', moduleName, 'package.json')
    const pkg = require(pkgPath)
    ctx.path = path.join('./node_modules', moduleName, pkg.module)
  }
  await next()
})

// 1. 开启静态文件服务器
app.use(async (ctx, next) => {
  await send(ctx, ctx.path, { root: process.cwd(), index: 'index.html' })
  await next()
})

// 4. 处理单文件组件
app.use(async (ctx, next) => {
  if (ctx.path.endsWith('.vue')) {
    const contents = await streamToString(ctx.body)
    const { descriptor } = compilerSfc.parse(contents)
    let code
    // 第一次请求
    if (!ctx.query.type) {
      code = descriptor.script.content
      code = code.replace(/export\s+default\s+/g, 'const __script = ')
      code += `
        import { render as __render } from "${ctx.path}?type=template"
        __render.render = __render
        export default __script
      `
    } else if (ctx.query.type === 'template') { // 第二次
      const templateRender = compilerSfc.compileTemplate({ source: descriptor.template.content })
      code = templateRender.code

    }

    ctx.type = 'application/javascript'
    ctx.body = stringToStream(code)
  }
  await next()
})


// 2. 修改第三方模块的路径
app.use(async (ctx, next) => {
  if (ctx.type === 'application/javascript') {
    const contents = await streamToString(ctx.body)
    // import vue from 'vue'
    // import App from './App.vue'
    // 匹配第三方路由
    ctx.body = contents
      .replace(/(from\s+['"])(?![\.\/])/g, '$1/@modules/')
      .replace(/process\.env\.NODE_ENV/g, '"development"')  // 替换process

  }
  await next()
})



app.listen(3000)
console.log('server running http://localhost/')