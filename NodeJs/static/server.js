const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  let { pathname } = url.parse(req.url)
  pathname = decodeURIComponent(pathname)
  let absPath = path.join(__dirname, pathname)

  // 2. 判断当前是文件还是路径
  fs.stat(absPath, (err, statObj) => {
    if (err) {
      res.statusCode = 404
      res.end('Not Found')
    }
    if (statObj.isFile()) {
      // 文件
      fs.readFile(absPath, (err, data) => {
        res.setHeader('Content-type', 'text/html;charset=utf-8')
        res.end(data)
      })
    } else {
      fs.readFile(path.join(absPath, 'index.html'), (error, data) => {
        res.setHeader('Content-type', 'text/html;charset=utf-8')
        res.end(data)
      })
    }
  })
  // console.log(absPath)
  // res.end(pathname)
})

server.listen(1234, () => {
  console.log('server is running...')
})