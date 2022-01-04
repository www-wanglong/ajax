const fs = require('fs')
const EventsEmitter = require('events')
const Queue = require('../linked/01-one-way-linked')


class MyWriteStream extends EventsEmitter {
  constructor (path, options) {
    super()
    this.path = path
    this.flags = options.flags || 'w'
    this.mode = options.mode || 438
    this.authClose = options.authClose || true
    this.start = options.start || 0
    this.encoding = options.encoding
    this.highWaterMark = options.highWaterMark || 64 * 1024

    this.open()

    this.writeOffset = this.start
    this.writing = false
    this.writeLen = 0
    this.needDrain = false // 是否触发Drain事件
    this.cache = new Queue()
  }

  open () {
    console.log('open')

    fs.open(this.path, this.flags, (error, fd) => {
      if (error) {
        this.emit('error', error)
      }
      this.fd = fd
      this.emit('open', fd)
    })
  }

  write (chunk, encoding, cb) {
    chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)

    this.writeLen += chunk.length
    let flag = this.writeLen < this.highWaterMark
    this.needDrain = !flag

    if (this.writing) {
      // 当前正在执行写入 所以内容应该排队
      this.cache.enQueue({chunk, encoding, cb})
    } else {
      // 执行写入
      this.writing = true
      this._write(chunk, encoding,  () => {
        cb()
        this._clearBuffer()
      })
    }
    return flag
  }

  _clearBuffer () {
    let data = this.cache.deQueue()
    console.log('data', data)
    if (data) {
      this._write(data.element.chunk, data.element.encoding, () => {
        data.element.cb && data.element.cb()
        this._clearBuffer()
      })
    } else {
      if (this.needDrain) {
        this.needDrain = false
        this.emit('drain')
      }
    }
  }

  _write (chunk, encoding, cb) {
    if (typeof this.fd !== 'number') {
      return this.once('open', () => {
        return this._write(chunk, encoding, cb)
      })
    }

    fs.write(this.fd, chunk, this.start, chunk.length, this.writeOffset, (error, written) => {
      this.writeOffset += written
      this.writeLen -= written
      cb && cb()
    })
  }
}

const ws = new MyWriteStream('./f9.txt', {})

ws.on('open', (fd) => {
  console.log('open---->', fd)
})

let flag = ws.write('11234', 'utf-8', () => {
  console.log('ok1')
})


flag = ws.write('5', 'utf-8', () => {
  console.log('ok2')
})

flag = ws.write('6', 'utf-8', () => {
  console.log('ok3')
})

ws.on('drain', () => {
  console.log('drain')
})
console.log(flag)
