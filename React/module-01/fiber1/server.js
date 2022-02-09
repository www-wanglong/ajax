import express from 'express'

const app = express()

app.use(express.static('dist'))

const temp = `
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
  res.send(temp)
})

app.listen(30000, () => {
  console.log('http://localhost:30000 server is running')
})