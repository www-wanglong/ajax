const fs = require('fs')
// copy文件

/**
 * 1. 打开a文件， 利用read将数据保存在buffer中
 * 2. 打开b
 */

let buf = Buffer.alloc(10)

// fs.open('data.txt', 'r', (err, rdf) => {
//   fs.open('b.txt', 'w', (err, wfd) => {
//     fs.read(rdf, buf, 0, 10, 0, (err, readBytes, buffer) => {
//       fs.write(wfd, buf, 0, 10, 0, (error, writeBytes) => {
//         console.log('write success')
//       })
//     })
//   })
// })

//  数据完全copy
const BUFFER_SIZE = buf.length
let readOffset = 0
fs.open('data.txt', 'r', (err, rfd) => {
  fs.open('b.txt', 'a+', (err, wfd) => {
    function next() {
      fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes, buffer) => {

        if (!readBytes) {
          // 读取完成
          fs.close(rfd, () => {})
          fs.close(wfd, () => {})
          console.log('copy success')
          return
        }

        readOffset += readBytes

        fs.write(wfd, buf, 0, readBytes, (error, writeBytes) => {
          next()
        })
      })
    }

    next()

  })
})

