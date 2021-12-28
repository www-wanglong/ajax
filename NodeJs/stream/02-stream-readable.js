const { Readable } = require('stream')
// 自定义可读流

// 模拟底层数据

let source = ['hello', 'world', 'hl']

class MyReadable extends Readable {
  constructor () {
    super()
    this.source = source
  }

  _read () {
    let data = this.source.shift() || null
    this.push(data)
  }

}

//
let myReadable = new MyReadable()

// myReadable.on('readable', () => {
//   let data = null
//   while ((data = myReadable.read()) !== null) {
//     console.log(data.toString())
//   }
// })

myReadable.on('data', (chunk) => {
  console.log(chunk.toString())
})