// 自定义转换流 本质也是一个双工流
let { Transform } = require('stream')

class MyTransform extends Transform {
  constructor () {
    super()
  }

  _transform (chunk, en, cb) {
    this.push(chunk.toString().toUpperCase())
    cb(null)
  }
}

let t = new MyTransform()

t.write('a')

t.on('data', (chunk) => {
  console.log(chunk.toString())
})