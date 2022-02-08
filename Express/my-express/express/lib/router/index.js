const url = require('url')
const methods = require('methods')
const Layer = require('./layer')
const Route = require('./route')

function Router () {
  this.stack = []
}

methods.forEach((method) => {
  Router.prototype[method] = function (path, handlers) {
    const route = new Route()
    const layer = new Layer(path, route.dispatch.bind(route))
    this.stack.push(layer)
    route[method](path, handlers)
    // const layer = new Layer(path, handler)
    // this.stack.push(layer)
    // layer.method = method
    // this.stack.push({
    //   path,
    //   method,
    //   handler
    // })
  }
})

Router.prototype.handler = function (req, res) {
  const { pathname } = url.parse(req.url)
  const method = req.method.toLowerCase()

  let index = 0
  const next = () => {
    if (index >= this.stack.length) {
      return res.end(`Can not get ${pathname}`)
    }
    const layer = this.stack[index++]
    const match = layer.match(pathname)
    if (match) {
      req.params = Object.assign(req.params || {}, layer.params)
    }
    // 只判定请求路径
    if (match) {
      return layer.handler(req, res, next)
    }
    next()
  }

  next()

  // const route = this.stack.find((layer) => {
  //   const match = layer.match(pathname)
  //   if (match) {
  //     req.params = Object.assign(req.params || {}, layer.params)
  //   }
  //   return match && layer.method === method
  // })
  // if (route) {
  //   return route.handler(req, res)
  // }
  // res.end('404 Not Found')
}

Router.prototype.use = function (path, handlers) {
  if (typeof path === 'function') {
    handlers.unshift(path)
    path = '/'
  }

  handlers.forEach((handler) => {
    const layer = new Layer(path, handler)
    layer.isUseMiddleware = true
    this.stack.push(layer)
  })
}

module.exports = Router