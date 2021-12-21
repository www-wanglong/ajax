const fs = require('fs')
const path = require('path')

// 自定义函数 接收一个路径执行删除目录
// 1. 判断当前传入的路径是否为一个文件

function myRmDir (dirPath, cb) {
  fs.stat(dirPath, (err, statObj) => {
    if (statObj.isDirectory()) { // 目录
      fs.readdir(dirPath, (err, files) => {
        let dirs = files.map(item => {
          return path.join(dirPath, item)
        })
        let index = 0
        function next () {
          if (index === dirs.length) {
            return fs.rmdir(dirPath, cb)
          }
          let current = dirs[index++]
          myRmDir(current, next)
        }

        next()

      })
    } else { //文件
      fs.unlink(dirPath, cb)
    }
  })
}

myRmDir('data.txt', () => {})