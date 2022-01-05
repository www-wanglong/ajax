const net = require('net')

const client = net.createConnection({
  port: 1234,
  host: 'localhost'
})

let dataArr = [
  'hello1',
  'hello2',
  'hello3',
  'hello4',
  'hello5'
]

client.on('connect', () => {
  for (let i = 0; i < dataArr.length; i++) {
    (function(val, index) {
      setTimeout(() => {
        client.write(val)
      }, 1000 * (index + 1))
    })(dataArr[i], i)
  }
})

client.on('data', (chunk) => {
  console.log(chunk.toString())
})

client.on('error', (error) => {
  console.log('error', error)
})

client.on('close', () => {
  console.log('客户端关闭')
})

