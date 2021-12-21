const fs = require('fs')
const path = require('path')
// 递归创建多层目录
// 1. 将来调用时 需要接收类似a/b/c
// 2. ['a', 'b', 'c']
// 3. 遍历数组

function makeDirSync (dirPath) {
  let items = dirPath.split(path.sep)
  for (let i = 1; i <= items.length; i++) {
    let dir = items.slice(0, i).join(path.sep)
    console.log(dir)
    try {
      fs.accessSync(dir)
    } catch (err) {
      console.log(err)
      fs.mkdirSync(dir)
    }
  }
}

makeDirSync('a/b/c')
