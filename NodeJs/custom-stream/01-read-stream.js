const fs = require('fs')
const EventEmitter = require('events')
const { threadId } = require('worker_threads')

class MyFileReadStream extends EventEmitter {
  constructor (path, options = {}) {
    super()
    this.path = path
    this.flags = options.flags || 'r'
    this.mode = options.mode || 438
    this.authClose = options.authClose || true
    this.start = options.start || 0
    this.end = options.end
    this.highWaterMark = options.highWaterMark || 64 * 1024
    this.readOffset = 0

    this.open()
    this.on('newListener', (type) => {
      if (type === 'data') {
        this.read()
      }
    })
  }

  open () {
    // 原生的open方法
    fs.open(this.path, this.flags, this.mode, (error, fd) =>{
      if (error) {
        this.emit('error', error)
      } else {
        this.fd = fd
        this.emit('open', fd)
      }
    })
  }

  read () {
    if (typeof this.fd !== 'number') {
      return this.once('open', this.read)
    }
    let buf = Buffer.alloc(this.highWaterMark)
    let howMuchToRead
    if (this.end) {
      howMuchToRead = Math.min(this.end - this.readOffset + 1, this.highWaterMark)
    } else {
      howMuchToRead = this.highWaterMark
    }

    fs.read(this.fd, buf, 0, howMuchToRead, this.readOffset, (err, readBytes) => {
      if (readBytes) {
        this.readOffset += readBytes
        this.emit('data', buf.slice(0, readBytes))
        this.read()
      } else {
        this.emit('end')
        this.close()
      }
    })
  }

  close () {
    fs.close(this.fd, () => {
      this.emit('close')
    })
  }
}

let rs = new MyFileReadStream('test.txt', {
  highWaterMark: 3,
  end: 7,
})

rs.on('open', (fd) => {
  // fd数据存储的文件
  //console.log('open', fd)
})

rs.on('error', (error) => {

})

rs.on('data', (chunk) => {
  console.log('chunk', chunk)
})

rs.on('end', () => {
  console.log('end')
})

rs.on('close', () => {
  console.log('close')
})