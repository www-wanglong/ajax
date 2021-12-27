function MyEvent () {
  // 准备数据结构缓存数据
  this._events = Object.create(null)
}


MyEvent.prototype.on = function (type, callback) {
  if (this._events[type]) {
    this._events[type].push(callback)
  } else {
    this._events[type] = [callback]
  }
}

MyEvent.prototype.emit = function (type, ...args) {
  if (this._events && this._events[type].length) {
    this._events[type].forEach((cb) => {
      cb.call(this, ...args)
    })
  }
}

MyEvent.prototype.off = function (type, callback) {
  if (this._events && this._events[type]) {
    this._events[type] = this._events[type].filter((item) => item !== callback && item.link !== callback)
  }
}

MyEvent.prototype.once = function (type, callback) {
  let foo = function (...args) {
    callback.call(this, ...args)
    this.off(type, callback)
  }
  foo.link = callback
  this.on(type, foo)
}


let ev = new MyEvent()

ev.on('事件1', () => {
  console.log('事件1执行了')
})

ev.emit('事件1')

