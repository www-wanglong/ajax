const path = require('path')

console.log('__filename', __filename) // 绝对路径
// 1. 获取路径中基础名称(返回最后一个部分)
// console.log(path.basename(__filename))
// console.log(path.basename(__filename, '.js'))
// console.log(path.basename('/a/b/c'))

// // 2. 获取路径目录名(返回路径)
// console.log(path.dirname(__filename))

// // 3. 获取扩展名(最后一个点)
// console.log(path.extname(__filename))

// 4. 解析路径
// const obj = path.parse('/a/b/c')
// console.log(obj)

// 5. 序列化路径
// console.log(path.format(path.parse('/a/b/c')))

// 6. 判断当前是否为绝对路径
// console.log(path.isAbsolute('/foo'))

// 7. 拼接路径
// console.log(path.join('/a/b', 'c', '../', 'indx.html'))

// 8. 规范化路径
// console.log(path.normalize('1/1/1/\/\1//2'))

// 9. 返回决定路径(pwd)
console.log(path.resolve())
console.log(path.resolve('/a', '/b'))


