const fs = require('fs')
const path = require('path')

// 打开文件
fs.open(path.resolve('data.txt'), 'r', (err, fd) => {
  console.log(fd)
  fs.close(fd, err => {
    console.log('close success')
  })
})

