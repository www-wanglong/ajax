const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'reject'

class MyPromise {
  constructor (executor) {
    executor(this.resolve, this.reject)
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
      this.successCallback.shift()(this.value)
    }
  }

  reject = (reason) => {
    if (this.status !== PENDING) return
    this.reason = reason
    this.status = REJECTED
    //this.failCallback && this.failCallback(this.reason)
    while(!!this.failCallback.length) { //
      this.failCallback.shift()(this.reason)
    }
  }

  /**
   * 返回Promise对象
   * @param {*} successCallback
   * @param {*} failCallback
   */
  then (successCallback, failCallback) {
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        let x = successCallback(this.value)
        // 判断x的值是普通值是promise对象
        resolvePromise(x, resolve, reject)
      } else if (this.status === REJECTED) {
        failCallback(this.reason)
      } else { // 异步执行
        this.successCallback.push(successCallback)
        this.failCallback.push(failCallback)
      }
    })

    return promise2

  }
}

function resolvePromise (x, resolve, reject) {
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

module.exports = MyPromise