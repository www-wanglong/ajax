const { AsyncParallelHook } = require('tapable')


// 异步钩子的使用 再添加事件监听时会存在三种方式： tap tapAsync tapPromise
let hook = new AsyncParallelHook(['name'])

// hook.tap('fn1', function (name) {
//   console.log('fn1 -> ', name)
// })

// hook.tap('fn2', function (name) {
//   console.log('fn2 -> ', name)
// })

// hook.callAsync('long', function () {
//   console.log('最后执行了回调')
// })
// console.time('time')
// hook.tapAsync('fn1', function (name, callback) {
//   setTimeout( () => {
//     console.log('fn1 -> ', name)
//     callback()
//   }, 1000)
// })

// hook.tapAsync('fn2', function (name, callback) {
//   setTimeout( () => {
//     console.log('fn2 -> ', name)
//     callback()
//   }, 2000)
// })

// hook.callAsync('wang', function () {
//   console.log('最后一个执行了')
//   console.timeEnd('time')
// })

// promise

console.time('time')
hook.tapPromise('fn1', function (name) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('fn1 ->', name)
      resolve()
    }, 1000)
  })
})

hook.tapPromise('fn2', function (name) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('fn2 ->', name)
      resolve()
    }, 2000)
  })
})

hook.promise('foo').then( () => {
  console.log('end 执行了')
  console.timeEnd('time')
})