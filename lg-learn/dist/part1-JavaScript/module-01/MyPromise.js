const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'reject'

class MyPromise {
  constructor (executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (e) { // 异常处理
      this.reject(e)
    }

  }

  status = PENDING
  successCallback = []
  failCallback = []

  resolve = (value) => {
    if (this.status !== PENDING) return
    this.value = value
    this.status = FULFILLED
    //this.successCallback && this.successCallback(this.value)
    while(!!this.successCallback.length) {
      this.successCallback.shift()()
    }
  }

  reject = (reason) => {
    if (this.status !== PENDING) return
    this.reason = reason
    this.status = REJECTED
    //this.failCallback && this.failCallback(this.reason)
    while(!!this.failCallback.length) { //
      this.failCallback.shift()()
    }
  }

  /**
   * 返回Promise对象
   * @param {*} successCallback
   * @param {*} failCallback
   */
  then (successCallback, failCallback) {
    // 处理没有参数的情况
    successCallback = successCallback ? successCallback : value => value
    failCallback = failCallback ? failCallback : reason => { throw reason }
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout( () => {
          try {
            let x = successCallback(this.value)
            // 判断x的值是普通值是promise对象
            // promise2需要异步处理
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }

        }, 0)

      } else if (this.status === REJECTED) {
        setTimeout( () => {
          try {
            let x = failCallback(this.reason)
            // 判断x的值是普通值是promise对象
            // promise2需要异步处理
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }

        }, 0)

      } else { // 异步执行
        this.successCallback.push( () => {
          setTimeout( () => {
            try {
              let x = successCallback(this.value)
              // 判断x的值是普通值是promise对象
              // promise2需要异步处理
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }

          }, 0)
        })
        this.failCallback.push( () => {
          setTimeout( () => {
            try {
              let x = failCallback(this.reason)
              // 判断x的值是普通值是promise对象
              // promise2需要异步处理
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }

          }, 0)
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
  }
}

function resolvePromise (promise2, x, resolve, reject) {
  if (promise2 == x) { // 不能自己调用自己
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

module.exports = MyPromise