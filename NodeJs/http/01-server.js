const net = require('net')

let server = net.createServer()


server.listen(1234, () => {
  console.log('server running')
})

server.on('connection', (socket) => {
  socket.on('data', (data) => {
    console.log(data.toString())
  })

  socket.end('test')
})