const http = require('http')
const Router = require('./router')
const methods = require('methods')

function App () {
  this._router = new Router()
}

methods.forEach((method) => {
  App.prototype[method] = function (path, ...handlers) {
    this._router[method](path, handlers)
  }
})


App.prototype.listen = function (...args) {
  const server = http.createServer((req, res) => {
    this._router.handler(req, res)
  })

  server.listen(...args)
}

App.prototype.use = function (path, ...handlers) {
  this._router.use(path, handlers)
}

module.exports = App