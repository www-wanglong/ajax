const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const schema = require('./schema')
const dataSources = require('./data-sources')

const app = express()

const server = new ApolloServer({
  schema,
  dataSources,
  context ({ req }) {
    const token = req.headers.authorization
    return {
      token
    }
  },
})

server.applyMiddleware({ app })

app.listen({port: 4000}, () => {
  console.log('Server ready at http://locahost:4000')
})