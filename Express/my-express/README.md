# Express源码解析

## 0.伪码实现
```JavaScript
// 创建app实例 并且调用Router实例的use、get...
function Application {
  this._router = new Router()
  // use
  // 创建服务，并且监听端口
}
// 启用端口 调用Router实例的handler方法
App.prototype.listen
App.prototype.use
App.prototype.get


function Router {
  this.stack = [
    layer,
    layer,
    layer
  ] // 存储当前应用的全部路由
}
Router.prototype.handler
// 匹配路由（layer.match），
// 处理参数，
// 调用 layer.handler
Router.prototype.use
Router.prototype.get
```



## 1. use方法
一般用做中间件匹配任何路由
```
Router {
  stack: [
    Layer {
      path: '/',
      handler: Route {
                stack: [
                  Layer {
                    path: '/',
                    handler: [Function],
                    keys: [],
                    regexp: /^\/?$/i,
                    params: {},
                    method: 'get'
                  },
                  Layer {
                    path: '/',
                    handler: [Function],
                    keys: [],
                    regexp: /^\/?$/i,
                    params: {},
                    method: 'get'
                  },
                  Layer {
                    path: '/',
                    handler: [Function],
                    keys: [],
                    regexp: /^\/?$/i,
                    params: {},
                    method: 'get'
                  }
                ]
              },
      keys: [],
      regexp: /^\/?$/i,
      params: {}
    }
  ]
}
```



## 2. get、post、put ...方法
任何请求的调用
```JavaScript
app.use((req, res, next) => {
  console.log('hello1')
  next()
}, (req, res, next) => {
  console.log('hello2')
  res.end('h')
})
```

得到的数据结构
```
Router {
  stack: [
    Layer {
      path: '/',
      handler: [Function],
      keys: [],
      regexp: /^\/?$/i,
      params: {},
      isUseMiddleware: true
    },
    Layer {
      path: '/',
      handler: [Function],
      keys: [],
      regexp: /^\/?$/i,
      params: {},
      isUseMiddleware: true
    }
  ]
}
```


