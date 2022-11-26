const { UserInputError } = require('apollo-server-express')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

const resolvers = {
  Query: {
    currentUser(parent, args, context, info) {
      return context.user
    },
    foo(parent, args, context, info) {
      return 'foo'
    },
    async users(parent, args, { dataSources }, info) {

      // const [users, count] = await Promise.all([
      //   dataSources.users.findBy(),
      //   dataSources.users.count()
      // ])
      // console.log('count', count)
      return {
      }
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
      const result = await users.findByEmail(user.email)
      return {
        ...result.toObject(),
        token: jwt.sign({
          userId: result._id
        }, jwtSecret, {
          expiresIn: 60 * 60 * 24
        })
      }
    }
  },
  UsersPayload: {
    async users(parent, args, { dataSources }) {
      console.log(11)
      const user = await dataSources.users.findBy();
      return user;
    },
    async count(parent, args, { dataSources }) {
      console.log(22)
      const count = await dataSources.users.count()
      return count;
    }
  }
}

module.exports = resolvers

