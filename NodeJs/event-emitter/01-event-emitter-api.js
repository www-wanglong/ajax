const EventEmitter = require('events')

const ev = new EventEmitter()

// 1. on
// ev.on('事件1', () => {
//   console.log('事件1执行了')
// })

// ev.on('事件1', () => {
//   console.log('事件1执行了 -- 2')
// })

// 2. emit
// ev.emit('事件1')
// ev.emit('事件1')

// 3. 对于emit只执行一次 once
// ev.once('事件1', () => {
//   console.log('事件1执行了')
// })

// ev.emit('事件1')
// ev.emit('事件1')

// 4. off
// let cbFn = (...args) => {
//   console.log('事件1执行了', args)
// }
// ev.on('事件1', cbFn)

// ev.emit('事件1', 1, 2)
// ev.off('事件1', cbFn)
// ev.emit('事件1')

// 5.
// ev.on('事件1', function () {
//   console.log('事件1执行了', this)
// })

// ev.emit('事件1')

const fs = require('fs')

const crt = fs.createReadStream()
crt.on('data')

