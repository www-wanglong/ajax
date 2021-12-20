const fs = require('fs')
// 往缓冲区 里写数据
let buf = Buffer.alloc(10)

fs.open('data.txt', 'r', (err, rfd) => {
  console.log(rfd)
  //当前打开的文件 缓存区 开始写位置  写入长度  从文件的那个位置读取
  fs.read(rfd, buf, 0, 3, 0, (err, readBytes, data) => {
    console.log(readBytes)
    console.log(data)
    console.log(data.toString())
  })
})

// write 将缓冲区内入写入
buf = Buffer.from('123456789')