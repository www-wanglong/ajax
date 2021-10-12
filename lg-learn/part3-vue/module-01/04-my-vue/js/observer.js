class Observer {

  constructor (data) {
    this.walk(data)
  }

  //遍历data所有属性
  walk (data) {
    // 校验data
    if (!data || typeof data !== 'object') {
      return
    }

    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  // 把属性定义成 get set
  defineReactive(obj, key, value) {
    let that = this
    // 如果value是对象 转换成响应式对象
    that.walk(value)
    console.log('defineReactive', obj)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () {
        return value
      },
      set (newValue) {
        if (newValue === value) {
          return
        }
        that.walk(newValue)
        value = newValue
        // 发送通知
      }
    })
  }
}