const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  let arr = []

  req.on('data', (data) => {
    arr.push(data)
  })

  req.on('end', (data) => {
    console.log(Buffer.concat(arr).toString())
    res.end('客户端数据')
  })
})

server.listen(1234, () => {
  console.log('server is running...')
})