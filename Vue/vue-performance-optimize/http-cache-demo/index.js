const http = require('http')
const fs = require('fs')
const etag = require('etag')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url

  console.log(url)
  if (url === '/') {
    const data = fs.readFileSync('./index.html')
    return res.end(data)
  } else if (url === '/login') {
    return res.end('login')
  } else if (url === '/a.js') {
    res.writeHead(200, {
       Expires: new Date('2023-02-26 21:34').toUTCString(), // 强制缓存
    })
    return res.end(fs.readFileSync('./a.js'))
  } else if (url === '/b.js') {
    res.writeHead(200, {
      'Cache-Control': 'max-age=10'
    })
    return res.end(fs.readFileSync('./a.js'))
  } else if (url === '/c.js') {
    // 获取文件的更新时间
    const { mtime }  = fs.statSync('c.js')

    const ifModifiedSince = req.headers['if-modified-since']

    if (ifModifiedSince === mtime.toUTCString()) {
      res.statusCode = 304
      res.end()
      return
    }

    // 第一次请求
    const data = fs.readFileSync('./c.js')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('last-modified', mtime.toUTCString())
    return res.end(data)
  }else if (url === '/d.js') {
    // 获取文件的更新时间
    const data = fs.readFileSync('./c.js')

    const etagContent = etag(data)

    const ifNoneMatch = req.headers['if-none-match']


    if (ifNoneMatch === etagContent) {
      res.statusCode = 304
      res.end()
      return
    }

    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('etag', etagContent)
    return res.end(data)
  }


  res.statusCode = 404
  res.end('404')
})

server.listen(3000, () => {
  console.log('running')
})
