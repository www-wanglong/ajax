const { gql } = require('apollo-server-express')

const typeDefs = gql`
  directive @upper on FIELD_DEFINITION
  directive @auth on FIELD_DEFINITION

  type User {
    email: String!
    username: String! @upper
    bio: String
    image: String
    token: String
  }


  type UserPayload {
    user: User!
  }

  type UsersPayload {
    users: [User!]
    count: Int!
  }

  type Query {
    foo: String @auth
    currentUser: User @auth
    users: UsersPayload
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    username: String
    email: String
    password: String
    bio: String
    image: String
  }

  type Mutation {
    login(user: LoginInput): User
    createUser(user: CreateUserInput): User
  }
`

module.exports = typeDefs