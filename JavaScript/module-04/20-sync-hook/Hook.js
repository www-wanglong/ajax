class Hook {
  constructor(args = []) {
    this.args = args
    this.taps = [] //用于存放组装好的 {}
    this._x = undefined // 在代码工厂函数中会给_x = [f1, f2, f3]
  }

  tap(options, fn) {
    if (typeof options === 'string') {
      options = { name: options }
    }

    options = Object.assign({ fn }, options) // { fn: function, name: fn1 }

    // 将组装好烦的options添加至 []
    this._insert(options)
  }

  tapAsync(options, fn) {
    if (typeof options === 'string') {
      options = { name: options }
    }

    options = Object.assign({ fn }, options) // { fn: function, name: fn1 }

    // 将组装好烦的options添加至 []
    this._insert(options)
  }

  _insert(options) {
    // [{name: fq, fn: functions() {}}]
    this.taps[this.taps.length] = options
  }

  call(...args) {
    // 01 创建将来要具体执行的代码函数结构
    // 02 传参调上面的函数
    let callFn = this._createCall()
    return callFn.apply(this, args)
  }

  callAsync(...args) {
    console.log(args)
    // 01 创建将来要具体执行的代码函数结构
    // 02 传参调上面的函数
    let callFn = this._createCall()
    return callFn.apply(this, args)
  }

  _createCall() {
    return this.compile({
      taps: this.taps,
      args: this.args
    })
  }

}


module.exports = Hook