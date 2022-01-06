const http = require('http')

const server = http.createServer((req, res) => {
  res.end('hello world')
})

server.listen(1234, () => {
  console.log('server is running...')
})