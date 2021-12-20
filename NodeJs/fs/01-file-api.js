const fs = require('fs')
const path = require('path')

// 1. 读文件
// fs.readFile(path.resolve('data.txt'), 'utf-8', (err, data) => {
//   if (!err) {
//     console.log(data)
//   }
// })

// 2. 覆盖的写操作
// fs.writeFile('data.txt', 'hao', {
//   mode: 438,
//   flag: 'r+',
//   encoding: 'utf-8'
// }, (err, data) => {

// })

// 3. 追加
// `fs.appendFile('data.txt', '你好', (err, data) => {

// })`

// 4. 复制
// fs.copyFile('data.txt', 'test.txt', (err) => {

// })

// 5. 监控文件
// fs.watchFile('data.txt', {interval: 20}, (curr, prev) => {
//   if (curr.mtime !== prev.mtime) {
//     console.log('change')
//     fs.unwatchFile('data.txt')
//   }
// })