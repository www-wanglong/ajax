// pipe的实现原理

const fs = require('fs')

const rs = fs.createReadStream('test.txt', {
  highWaterMark: 4
})

// 可写流
const ws = fs.createWriteStream('test1.txt', {
  highWaterMark: 1
})

let flag = true

rs.on('data', (chunk) => {
  flag = ws.write(chunk, () => {
    console.log('write success')
  })
  if (!flag) {
    // 暂停
    rs.pause()
  }
})

// 有新的空间了
ws.on('drain', () => {
  rs.resume()
})

rs.pipe(ws)