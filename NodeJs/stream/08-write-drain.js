const fs = require('fs')

let ws = fs.createWriteStream('test.txt', {
  highWaterMark: 3
})

let flag = ws.write('1')

console.log(flag)
flag = ws.write('2')
console.log(flag)

// 如果flag为false 并不是说明当前数据不能被执行写入
// 数据的生产者（生成数据）  可写流（文件的缓存区）

// 第一次调用write方法时是将数据直接写入到文件中
// 第二次开始write方法就是将数据写入至缓存
// 生产速度和消费速度时不一样的， 一般情况下生成数据要比消费速度快很多
// 当flag为false后并不意味着当前不能
// 当数据生产者暂停之后，消费者会慢慢的消化它内部缓存中的数据，直到可以再次被执行写入操作
// 当缓冲区可以继续写入数据时如何让生产者知道
flag = ws.write('3')
console.log(flag)

ws.on('drain', () => {
  console.log('drain')
})
