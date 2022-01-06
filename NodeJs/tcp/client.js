const net = require('net')
const MyTransform= require('./my-transform.js')

let overageBuffer = null
let ts = new MyTransform()

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

// client.on('connect', () => {
//   for (let i = 0; i < dataArr.length; i++) {
//     (function(val, index) {
//       setTimeout(() => {
//         client.write(val)
//       }, 1000 * (index + 1))
//     })(dataArr[i], i)
//   }
// })

client.write(ts.encode('hello world'))
client.write(ts.encode('hello world'))
client.write(ts.encode('hello world'))
client.write(ts.encode('hello world'))

client.on('data', (chunk) => {
  if (overageBuffer) {
    chunk = Buffer.concat([overageBuffer, chunk])
  }

  let packageLen = 0
  while (packageLen = ts.getPackageLen(chunk)) {
    const packageCon = chunk.slice(0, packageLen)
    chunk = chunk.slice(packageLen)

    const result = ts.decode(packageCon)
    console.log(result)

    //socket.write(ts.encode(result.body, result.serialNum))
  }

  overageBuffer = chunk
})

client.on('error', (error) => {
  console.log('error', error)
})

client.on('close', () => {
  console.log('客户端关闭')
})

