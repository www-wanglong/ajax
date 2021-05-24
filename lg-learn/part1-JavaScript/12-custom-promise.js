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
  resolve('成功')
  // reject('失败')
})

const then = promise.then( (value) => {
  return 2
}, (error) => {
  console.log(error)
}).then( value => {
  console.log(value)
})

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