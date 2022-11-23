const { UserInputError } = require('apollo-server-express')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

const resolvers = {
  Query: {
    currentUser(parent, args, context, info) {
    },
    foo(parent, args, context, info) {
      return 'foo'
    }
  },

  Mutation: {
    async createUser(parent, { user }, { dataSources }) {
      const users = dataSources.users
      const user1 = await users.findByEmail(user.email)
      if (user1) {
        throw new UserInputError('邮箱已存在')
      }
      const result = await users.saveUser(user)
      const token = jwt.sign({
        userId: result._id
      }, jwtSecret, {
        expiresIn: 60 * 60 * 24
      })
      return {
        ...result.toObject(),
        token
      }
    },

    async login(parent, { user },  { dataSources }) {
      const users = dataSources.users
      const user1 = await users.findByEmail(user.email)
      return user1
    }
  }
}

module.exports = resolvers

