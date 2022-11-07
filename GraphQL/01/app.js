const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')

const app = express()
app.use(cors())

const articles = [
  { id: '1', title: 'article 1', body: 'article 1 body' },
  { id: '2', title: 'article 2', body: 'article 2 body' },
  { id: '3', title: 'article 3', body: 'article 3 body' }
]

// Query是所有查询的入口点
const schema = buildSchema(`
  type Article {
    id: ID!
    title: String!
    body: String!
    tagList: [String!]
  }
  type User {
    name: String,
    age: Int,
    hobbies: [String]
  }
  type Query {
    articles: [Article]
    article(id: ID!): Article
  }

`)

const rootValue = {
  articles() {
    return articles
  },
  article({ id }) {
    return articles.find(a => a.id === id)
  }

}

// 3. 挂载 Graphql
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true // 开始浏览器 Graphql IDE 工具
}))

// 4. 启动
app.listen(4000, () => {
  console.log('graphql Server is running at http://localhost:4000')
})
// 3.查询
// graphql(scheme, '{ foo, count }', root).then(res => {
//   console.log(res)
// })