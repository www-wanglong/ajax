const http = require('http')

//获取程序获取指定的网页内容
http.get('http://localhost:3000/', res => {
  let data = ''
  res.on('data', chunk => [
    data += chunk
  ])

  res.on('end', () => {
    console.log(data)
  })
})