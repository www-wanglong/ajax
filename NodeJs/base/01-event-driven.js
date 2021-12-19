const EventEmitter = require('events')
// 事件
const myEvent = new EventEmitter()

myEvent.on('事件1', () => {
  console.log('事件1执行了')
})

myEvent.emit('事件1')
