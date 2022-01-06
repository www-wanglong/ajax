const http = require('http')
const url = require('url')

let server = http.createServer((req, res) => {
  // 针对于请求和响应完成各自的操作
  console.log(11, req)
})

server.listen(1234, () => {
  console.log('server is running...')
})