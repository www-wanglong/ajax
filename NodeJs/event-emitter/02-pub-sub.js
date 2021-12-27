class PubSub {
  constructor () {
    this._events = {}
  }

  // 注册
  subscribe (event, callback) {
    if (this._events[event]) {
      // 存在event，只需要后添加
      this._events[event].push(callback)
    } else {
      // 之前没有订阅过
      this._events[event] = [callback]
    }
  }

  // 发布
  publish (event, ...args) {
    const items = this._events[event]
    if (items && items.length) { // 数组
      items.forEach(function (callback) {
        callback.call(this, ...args)
      });
    }
  }
}

let ps = new PubSub()

ps.subscribe('事件1', () => {
  console.log('事件1执行了')
})
ps.subscribe('事件1', () => {
  console.log('事件1执行了--2')
})
ps.publish('事件1')
ps.publish('事件1')