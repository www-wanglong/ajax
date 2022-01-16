const express = require('express')
const { MongoClient } = require('mongodb')

const connectUrl = 'mongodb://localhost:27017'
const dbClient = new MongoClient(connectUrl)

const app = express()

// 配置解析请求数据
app.use(express.json())

app.get('/', (req, res) => {
  res.end('hello world')
})

app.post('/articles', async (req, res, next) => {
  try {
    const { article } = req.body
    if (!article) {
      res.status(422).json({
        error: '请求参数不符合'
      })
    }

    await dbClient.connect()

    const collection = dbClient.db('test').collection('articles')
    article.createdAt = new Date()
    article.updatedAt = new Date()
    const ret = await collection.insertOne(article)
    article._id = ret.insertedId
    res.status(201).json({
      article
    })
  } catch (error) {
    next(error)
  }
})

app.get('/articles', (req, res) => {
  res.end('hello world')
})

app.get('/articles/:id', (req, res) => {
  res.end('hello world')
})

app.patch('/articles/:id', (req, res) => {
  res.end('hello world')
})

app.delete('/articles/:id', (req, res) => {
  res.end('hello world')
})

// 他之前的所有理由中调用next()就会进入这里
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message
  })
})

app.listen(30000, () => {
  console.log('app running...')
})