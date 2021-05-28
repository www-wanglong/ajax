// 简答题一、
//   Event loop：从消息队列中取出任务来执行
//   消息队列：用来存放异步任务对应的回调函数，等待被执行
//   宏任务：js内部的任务，如：setTimeout、setInverter
//   微任务: 当前任务结束之后立即执行的任务。如：promise
const fp = require('lodash/fp')
const { Maybe, Container } = require('./functor')
// 代码题一、
let p1 = new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve('hello')
  }, 2000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve('lagou')
  }, 2000)
})
let p3 = new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve('I ❤ U')
  }, 2000)
})
let values = []
p1.then( (value) => {
  values.push(value)
  return p2
}).then( (value) => {
  values.push(value)
  return p3
}).then( (value) => {
  values.push(value)
  console.log(values.join(' '))
})

// 二
const cars = [
  { name: 'Fer', horsepower: 660, dollar_value: 1, in_stock: true },
  { name: 'Fer2', horsepower: 6600, dollar_value: 2, in_stock: 'false' }
]
// 1
const result1 = fp.flowRight(fp.prop('in_stock'), fp.last)
console.log(result1(cars))
//2
const result2 = fp.flowRight(fp.prop('name'), fp.first)
console.log(result2(cars))
//3
const _average = (xs) => fp.reduce(fp.add, 0, xs) / xs.length
const averageDollarValue = fp.flowRight(_average, fp.map(fp.prop('dollar_value')))
console.log(averageDollarValue(cars))
//4 ['Hello World'] -> ['hello_world']
const _underscore = fp.replace(/\W+/g, '_')
const sanitizeNames = fp.flowRight(fp.map(fp.flowRight(_underscore, fp.toLower)))
console.log(sanitizeNames(['Hello World']))

// 三
//1.使用fp.add(x,y)和fp.map(f,x)创建一个能让functor里的值增加的函数
let maybe = Maybe.of([5, 6, 1])
let ex1 = () => maybe.map(fp.map(fp.add(2)))._value
console.log('三.1输出', ex1())

//2. 实现一个函数ex2，能够使用fp.first获取列表的第一个元素
let xs = Container.of(['do', 'ray', 'me'])
let ex2 = () => xs.map(fp.first)._value
console.log('三.2输出', ex2())

//3. 找到user的名字首字母
let safeProp = fp.curry(function(x, o) {
  return Maybe.of(o[x])
})

let user = {
  id: 2,
  name: 'Albert'
}

let ex3 = () => safeProp('name', user).map(fp.first)._value
console.log('三.3输出', ex3())
//4
let ex4 = function (n) {
  if (n) {
    return parseInt(n)
  }
}

let myExt4 = (n) => Maybe.of(n).map(parseInt)._value
console.log('三.3输出', myExt4(5.3))


// 四、手写promise
/**
 *  1.Promise是一个类， 需要传入一个执行器立即执行
 *  2.Promise有三种状态pending, fulfilled, rejected
 *    状态的转化
 *     pending -> fulfilled
 *     pending -> rejected
 *    一旦状态发生变化便不可更改、
 *  3.resolve和reject用来改变promise的状态, 进来记录执行的值
 *  4.then方法需要传递两个参数，根据状态执行相应的函数，
 *  5.then方法异步执行(需要在pending状态记录传递的参数，然后在resolve/reject执行)
 *  6.then方法可以被同时多次调用
 *  7.then方法可以链式调用 上个返回的结果会给下个then 异步执行
 *  8.promise不能自己返回调用自己;
 *  9.promise的then方法如果传入值 会成功回调到下个;可以不传值
 *  10.all、resolve静态方法
 *  11.finally catch实例方法
 */
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECT = 'reject'
class MyPromise {

  constructor (executor) {
    executor(this.resolve, this.reject)
  }

  status = PENDING
  successCallbacks = []
  failCallbacks = []

  resolve = (value) => {
    const { status, successCallbacks } = this
    // 状态只能从pending -> fulfilled或 pending -> rejected
    if (status !== PENDING) {
      return
    }
    this.value = value
    this.status = FULFILLED
    while (!!successCallbacks.length) {
      successCallbacks.shift()(this.value)
    }
  }

  reject = (reason) => {
    const { status, failCallbacks } = this
    if (status !== PENDING) {
      return
    }
    this.reason = reason
    this.status = REJECT
    while (!!failCallbacks.length) {
      failCallbacks.shift()(this.reason)
    }
  }

  then = (successCallback, failCallback) => {
    const { status, value, reason, successCallbacks, failCallbacks } = this
    successCallback = successCallback ? successCallback : value => value
    failCallback = failCallback ? failCallback : reason => { throw reason }
    // then方法需要返回promise对象
    let promise2 = new MyPromise((resolve, reject) => {
      if (status === FULFILLED) {
        setTimeout( () => {
          try {
            let result = successCallback(value)
            resolvePromise(promise2, result, resolve, reject)
            resolve(result)
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else if (status === REJECT) {
        setTimeout( () => {
          try {
            let reason1 = failCallback(reason)
            resolvePromise(promise2, reason1, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)

      } else {
        successCallbacks.push(() => {
          try {
            let v = successCallback(this.value)

            resolvePromise(promise2, v, resolve, reject)
          } catch (e) {
            reject(e)
          }

        })
        failCallbacks.push( () => {
          try {
            let r = failCallback(this.reason)
            resolvePromise(promise2, r, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
    })
    return promise2
  }

  finally (callback) {
    return this.then( value => {
      return MyPromise.resolve(callback()).then( () => value )
      // callback()
      // return value
    }, reason => {
      return MyPromise.resolve(callback()).then( () => { throw reason } )
      // callback()
      // throw reason
    })
  }

  catch (failCallback) {
    return this.then( undefined, failCallback)
  }


  /**
   * all方法
   * @param {Array} array
   */
  static all (array) {
    let result = []
    let index = 0

    return new MyPromise((resolve, reject) => {
      function addData (key, value) {
        result[key] = value
        index++;
        if (index === array.length) {// 保证每一项都执行完成 然后返回
          resolve(result)
        }
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i]
        if (current instanceof MyPromise) {
          current.then( value => addData(i, value), reason => reject(reason))
        } else {
          // 普通值
          addData(i, current)
        }
      }
    })
  }

  static resolve (value) {
    if (value instanceof MyPromise) {
      return value
    }
    return new MyPromise(resolve => resolve(value))
  }

}

function resolvePromise (promise2, result, resolve, reject) {
  if (result === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (result instanceof MyPromise) {
    result.then(resolve, reject)
  } else {
    resolve(x)
  }
}

// let mp1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
//   //resolve('success')
//   // reject('fail')
// })
// let mp2 = mp1.then( (value) => {
//   console.log(value)
//   return 'haohao'
// }, (error) => {
//   console.log(error)
//   return 'error'
// })

// mp2.then( (value) => {
//   console.log(value)
// })

let p5 = new MyPromise( (resolve, reject) => {
  resolve(2)
})

// let pppp = p5.then( (value) => {
//   return pppp
// }, (error) => {
//   console.log(error)
// }).then( () => {}, (reason) => { console.log() })