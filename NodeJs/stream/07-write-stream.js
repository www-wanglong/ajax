// 可写流
const fs = require('fs')

const ws = fs.createWriteStream('test.txt', {
  flags: 'w',
  mode: 438,
  fd: null,
  encoding: 'utf-8',
  start: 0,
  highWaterMark: 3 // 水平线
})
let buf = Buffer.from('abc')
// write消耗数据
// ws.write(buf, () => {
//   console.log('write success2')
// })

// ws.write('hello node ', () => {
//   console.log('write success1')
// })

// 常见的事件

// ws.on('open', (fd) => {
//   console.log('open', fd)
// })



// // 默认情况下不执行 数据写入操作全部完成之后再执行
// ws.on('close', () => {
//   console.log('close')
// })
ws.write('1')
// 写操作完成
ws.end('3')
// ws.write('2')
ws.on('error', (error) => {
  console.log('error1', error)
})



