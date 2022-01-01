// drain事件控制写入速度

/**
 * 需求： ‘hello world’写入执行文件
 * 1. 一次性写入 or (文件加大操作消耗内存)
 * 2. 分批写入
 * 对比：
 *  分批操作
 */

const fs = require('fs')
const ws = fs.createWriteStream('test.txt', {
  highWaterMark: 3
})

// 1. 一次性写入
// ws.write('你好呀')
let source = '你好呀'.split('')

// 2. 分批 每一次的写入数据不同 使用drain实现限流
let num = 0
let flag = true
function executeWrite () {
  while (num !== source.length && flag) {
    flag = ws.write(source[num++])
  }
}

executeWrite()

ws.on('drain', () => {
  flag = true
  executeWrite()
})


// pipe方法可自行处理

