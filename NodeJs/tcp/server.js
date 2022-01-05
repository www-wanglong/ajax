const net = require('net')

// 创建服务端实例
const server = net.createServer()

const HOST = 'localhost'
const PORT = 1234

server.listen(PORT, HOST)

server.on('listening', () => {
  console.log(`服务端已经开启在 ${HOST}: ${PORT}`)
})

// 接收消息
server.on('connection', (socket) => {
  socket.on('data', (chunk) => {
    const msg = chunk.toString()
    console.log(msg)

    socket.write(Buffer.from('您好' + msg))
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