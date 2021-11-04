import express from 'express'

const app  = express()
// 作为静态文件资源
app.use(express.static('dist'))

const template = `
  <html>
    <head>
      <title>React Fiber</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="bundle.js"></script>
    </body>
  </html>
`

app.get('*', (req, res) => {
  res.send(template)
})

app.listen('30000', () => console.log('server is running') )