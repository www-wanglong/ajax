const net = require('net')
const MyTransform= require('./my-transform.js')

// 创建服务端实例
const server = net.createServer()

let overageBuffer = null
let ts = new MyTransform()

const HOST = 'localhost'
const PORT = 1234

server.listen(PORT, HOST)

server.on('listening', () => {
  console.log(`服务端已经开启在 ${HOST}: ${PORT}`)
})

// 接收消息
server.on('connection', (socket) => {
  socket.on('data', (chunk) => {
    if (overageBuffer) {
      chunk = Buffer.concat([overageBuffer, chunk])
    }

    let packageLen = 0
    while (packageLen = ts.getPackageLen(chunk)) {
      const packageCon = chunk.slice(0, packageLen)
      chunk = chunk.slice(packageLen)

      const result = ts.decode(packageCon)
      console.log(result)

      socket.write(ts.encode(result.body, result.serialNum))
    }

    overageBuffer = chunk
    // const msg = chunk.toString()
    // console.log(msg)
    // socket.write(Buffer.from('您好' + msg))
  })


})

server.on('close', () => {
  console.log('服务端关闭了')
})

server.on('error', (error) => {
  if (error.code === 'EADDRIMUSR') {
    console.log('地址被使用')
  }
})