const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Query {
  type: String
}
`

module.exports = typeDefs