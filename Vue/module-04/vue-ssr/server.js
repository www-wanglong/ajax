const Vue = require('vue')
const express = require('express')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')
const setupDevServer = require('./build/setup-dev-server')

const server = express()

server.use('/dist', express.static('./dist'))

const isProd = process.env.NODE_ENV === 'product'

let renderer;
let onReady;

if (isProd) {
  // 生产环境
  const serverBundle = require('./dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  const template = fs.readFileSync('./index.template.html', 'utf-8')

  renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest,
  })
} else {
  // 开发环境： 监视打包构建 -> 重新生成renderer渲染器
  onReady = setupDevServer(server, (serverBundle, template, clientManifest) => {
    renderer = createBundleRenderer(serverBundle, {
      template,
      clientManifest,
    })
  })
}

const render = (req, res) => {
  renderer.renderToString({
    title: 'test',
    meta: `
      <meta></meta>
    `
  }, (err, html) => {
    if (err) {
      return res.status(500).end('Inter Server Error')
    }
    //res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(html)
  })

}

server.get('/', isProd ? render : async (req, res) => {
  // 等待有renderer渲染器 有了以后render
  await onReady
  render(req, res)
})

server.listen(3000, () => {
  console.log('server running at 3000')
})
