const http = require('http')

let options = {
  host: 'localhost',
  port: 1234,
  path: '/',
  method: 'POST'
}

let server = http.createServer((request, response) => {
  let req =  http.request(options, (res) => {
    let arr = []

    res.on('data', (data) => {
      arr.push(data)
    })

    res.on('end', (data) => {
      response.setHeader('Content-type', 'text/html;charset=utf-8')
      response.end(Buffer.concat(arr).toString())
    })
  })

  req.end('hello world')
})

server.listen(1235, () => {
  console.log('agent server running...')
})


// http.get({
//   host: 'localhost',
//   port: 1234,
//   path: '/?a=1'
// }, (res) => {

// })

// let options = {
//   host: 'localhost',
//   port: 1234,
//   path: '/?a=1',
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   }
// }

// let req =  http.request(options, (res) => {
//   let arr = []
//   res.on('data', (data) => {
//     arr.push(data)
//   })

//   res.on('end', () => {
//     console.log(Buffer.concat(arr).toString())
//   })
// })
