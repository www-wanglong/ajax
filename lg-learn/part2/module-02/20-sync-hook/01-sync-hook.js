const { SyncHook } = require('tapable')

// 实例化
let hook = new SyncHook(['name', 'age'])

// 注册监听
hook.tap('fn1', function (name, age) {
  console.log('fn1-->', name, age)
})

hook.tap('fn2', function (name, age) {
  console.log('fn2-->', name, age)
})

//触发
// hook.call('long', 19)