const { SchemaDirectiveVisitor } = require('apollo-server-express')
const { defaultFieldResolver } = require('graphql')

module.exports = class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    field.resolve = async function(parent, args, context, info) {
      const result = await resolve(parent, args, context, info)
      if (typeof result === 'string') {
        console.log(result)
        return result.toUpperCase()
      }
      return result
    }
  }
}