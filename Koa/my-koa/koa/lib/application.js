const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class Application {

  constructor () {
    this.middleware = []
    this.context = Object.create(context)
    this.request = Object.create(request)
    this.response = Object.create(response)
  }

  listen (...args) {
    const server = http.createServer(this.callback())
    server.listen(...args)
  }

  use (fn) {
    this.middleware.push(fn)
  }

  /** 异步递归遍历调用中间件 */
  compose (middleware) {
    return function (context) {
      const dispatch = (index) => {
        if (index >= middleware.length) {
          return Promise.resolve()
        }
        const fn = middleware[index]
        return Promise.resolve(
          // TODO
          fn(context, () => dispatch(index + 1))
        )
      }
      return dispatch(0)
    }
  }

  /**
   * 创建上线文对象
   */
  createContext (req, res) {
    const context = Object.create(this.context)
    const request = context.request = Object.create(this.request)
    const response = context.response = Object.create(this.response)

    context.app = request.app = response.app = this
    context.req = request.req = response.req = req
    context.res = request.res = response.res = this

    request.ctx = response.ctx = context
    request.response = response
    response.request = request
    return context
  }

  callback () {
    const fnMiddleware = this.compose(this.middleware)
    const handlerRequest = (req, res) => {
      // 每个请求都会创建
      const context = this.createContext(req, res)
      fnMiddleware(context).then(() => {
        res.end('my koa')
      }).catch((err) => {
        res.end(err.message)
      })
    }
    return handlerRequest
  }
}

module.exports = Application