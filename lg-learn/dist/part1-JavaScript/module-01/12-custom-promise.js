// Promise 基本示例
/**
 * 1. Promise是个类，在执行这个类的时候 需要传递一个执行器立即执行
 * 2. Promise中的三种状态哦 pending fulfilled rejected
 *  pending -> fulfilled
 *  pending -> rejected
 *  一旦状态确定不能改变
 * 3. resolve和reject用来改变函数的状态
 *   resolve： fulfilled
 *   reject： rejected
 * 4. then:需要两个参数，定义在原型链上，根据状态的判断执行相应的函数
 * 5. then可以多次调用
 * 6. 异步执行 同一个then方法可以执行多个
 * 7. then方法可以链式调用, 上个返回的结果返回给下个
 */

const MyPromise = require('./MyPromise')

const promise = new MyPromise((resolve, reject) => {
  //resolve('成功')
  setTimeout( () => {
    resolve('成功....')
  }, 2000)
  reject('失败')
  // throw new Error('executor error')
})

function other () {
  return new MyPromise((resolve, reject) => {
    resolve('成功other')
    // reject('失败')
  })
}

// promise.then().then().then( value => {
//   console.log(value)
// }, error => {
//   console.log(error)
// })
// let p1 = promise.then( (value) => {
//   console.log(value)
//   return 'aaa'
// }, (error) => {
//   return 1000
// }).then( function (value) {
//   console.log(value)
// }, function (error) {
//   console.log(error.message)
// })

// promise.then( (value) => {
//   console.log(2)
//   console.log(value)
// }, (error) => {
//   console.log(error)
// })

// promise.then( (value) => {
//   console.log(3)
//   console.log(value)
// }, (error) => {
//   console.log(error)
// })

// console.log(then)
/**
 * Promise.all方法
 * 静态方法
 * 返回一个promise对象
 * 处理普通值和promise对象
 * 返回的结果按照数组传入的顺序
 */
var p1 = new MyPromise((resolve, reject) => {
  setTimeout( () => {
    resolve(2)
  }, 1000)
})

var p2 = new MyPromise((resolve, reject) => {
  resolve('ewe')
})

MyPromise.all(['1', p1, p2]).then( value => {
  console.log(value)
}, error => {
  console.log(error)
})

MyPromise.resolve(10).then( value => console.log(value) )

p2.finally( () => {
  console.log('finally')
  return p1
}).then( value => {
  console.log(value)
}, reason => {
  console.log(reason)
})