const fs = require('fs')

// 1. access
// fs.access('a.txt', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('有权限')
//   }
// })

// 2. start
fs.stat('data.txt', (err, statObj) => {
  console.log(statObj.size)
  console.log(statObj.isFile())
  console.log(statObj.isDirectory())
})


// 3. mkdir 创建目录
// fs.mkdir('a/b/c', {recursive: true} , (error) => {

// })

// 4. rmdir 删除目录
// fs.rmdir('a/b/c', {recursive: true} , (error) => {

// })


// 5. readdir 读取文件

// 6.unlink 文件的删除
