// 流操作文件
const fs = require('fs')
let rs = fs.createReadStream('./test.txt')
let ws = fs.createWriteStream('./text1.txt')

rs.pipe(ws)