// let buf = Buffer.alloc(6)

// 1. 填充
// buf.fill('123')

// console.log(buf)
// console.log(buf.toString())

// 2. 写入 write
// buf.write('123')
// console.log(buf)
// console.log(buf.toString())

// 3. 提取数据 转换编码格式 toString()

// let buf = Buffer.from('你好啊')
// console.log(buf)
// console.log(buf.toString('utf-8'))

// 4. 截取操作 slice

// let buf = Buffer.from('你好啊')
// let b1 = buf.slice(0,6)
// console.log(b1)
// console.log(b1.toString())

// 5. 查找字节 indexOf
// let buf = Buffer.from('你好啊')
// console.log(buf)
// console.log(buf.indexOf('好'))

// 6. copy
// let b1 = Buffer.alloc(6)
// let b2 = Buffer.from('你好')

// b2.copy(b1)

// console.log(b1.toString())
// console.log(b2.toString())


// Buffer 静态方法

// 7. concat
let b1 = Buffer.from('你好')
let b2 = Buffer.from('世界')
console.log(Buffer.concat([b1, b2]).toString())

// 8.isBuffer
ArrayBuffer.prototype.split = function (sep) {
  let len = Buffer.from(sep).length
  let ret = []
  let start = 0
  let offset = 0

  while (offset = this.indexOf(sep, start) !== -1) {
    ret.push(this.slice(start, offset))
    start = offset + len
  }
  return ret
}

let buf = '的， 多少的啊， 十的是大，'
console.log(buf.split('的'))