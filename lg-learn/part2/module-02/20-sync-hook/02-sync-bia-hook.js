const { SyncBailHook } = require('tapable')

// 实例化
let hook = new SyncBailHook(['name', 'age'])

// 注册监听
hook.tap('fn1', function (name, age) {
  console.log('fn1-->', name, age)
})

// 返回的是非undefined
hook.tap('fn2', function (name, age) {
  console.log('fn2-->', name, age)
  return undefined
})

hook.tap('fn3', function (name, age) {
  console.log('fn3-->', name, age)
})

//触发
hook.call('long', 19)