const { SchemaDirectiveVisitor, AuthenticationError } = require('apollo-server-express')
const { defaultFieldResolver } = require('graphql');
const { jwtSecret } = require('../config/config.default');
const { verify } = require('../util/jwt')

module.exports = class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    field.resolve = async function(parent, args, context, info) {
      const { token, dataSources } = context
      if (!token) {
        throw new AuthenticationError('未授权')
      }
      try {
        const decodeData = await verify(token, jwtSecret)
        const user = await dataSources.users.findById(decodeData.userId)
        context.user = user
      } catch(err) {
        console.log(err)
        throw new AuthenticationError('未授权')
      }
      const result = await resolve(parent, args, context, info)
      return result;
    }
  }
}