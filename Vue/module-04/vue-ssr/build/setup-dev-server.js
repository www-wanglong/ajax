const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const resolve = file => path.resolve(__dirname, file)

/**
 * 监听文件的变化
 * @param {*} server
 * @param {*} callback
 * @returns
 */
module.exports = (server, callback) => {
  let ready;
  const onRead = new Promise( r => ready = r)
  // 监视构建 -> 更新Renderer

  let template
  let serverBundle
  let clientManifest

  /** 更新 Renderer 渲染器 */
  const update = () => {
    if (template && serverBundle && clientManifest) {
      ready()
      callback(serverBundle, template, clientManifest)
    }
  }

  // 监视构建template -> 调用update
  const templatePath = path.resolve(__dirname, '../index.template.html')

  template = fs.readFileSync(templatePath, 'utf-8')

  // chokidar
  chokidar.watch(templatePath).on('change', () => {
    template = fs.readFileSync(templatePath, 'utf-8')
    update()
  })

  // 监视构建serverBundle -> 调用update
  const serverConfig = require('./webpack.server.config')
  const serverCompiler = webpack(serverConfig)

  // 将打包后的文件存在内存中
  const serverDevMiddleware = webpackDevMiddleware(serverCompiler, {
    logLevel: 'silent' // 关闭日志
  })

  // 每当打包完成后
  serverCompiler.hooks.done.tap('server', () => {
    serverBundle = JSON.parse(
      // 读取内存中的文件
      serverDevMiddleware.fileSystem.readFileSync(resolve('../dist/vue-ssr-server-bundle.json'), 'utf-8')
      // fs.readFileSync(resolve('../dist/vue-ssr-server-bundle.json'), 'utf-8')
    )

    update()
  })
  // serverCompiler.watch({}, (err, stats) => {
  //   if (err) {
  //     throw err
  //   }
  //   if (stats.hasErrors()) {
  //     return
  //   }

  //   serverBundle = JSON.parse(
  //     fs.readFileSync(resolve('../dist/vue-ssr-server-bundle.json'), 'utf-8')
  //   )

  //   console.log('serverBundle', serverBundle)
  //   update()

  // })
  // 监视构建clientManifest -> 调用update

  const clientConfig = require('./webpack.client.config')
  const clientCompiler = webpack(clientConfig)

  // 将打包后的文件存在内存中
  const clientDevMiddleware = webpackDevMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    logLevel: 'silent' // 关闭日志
  })

  // 每当打包完成后
  clientCompiler.hooks.done.tap('client', () => {
    clientManifest = JSON.parse(
      // 读取内存中的文件
      clientDevMiddleware.fileSystem.readFileSync(resolve('../dist/vue-ssr-client-manifest.json'), 'utf-8')
    )

    update()
  })

  // 将clientDevMiddleware 挂载到 Express
  server.use(clientDevMiddleware)
  return onRead
}