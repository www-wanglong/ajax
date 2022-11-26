const { MongoDataSource } = require('apollo-datasource-mongodb')

class Users extends MongoDataSource {
  findBy () {
    return this.model.find()
  }

  count (email) {
    return this.model.countDocuments()
  }

  findByEmail (email) {
    return this.model.findOne({
      email
    })
  }

  findByUsername (username) {
    return this.model.findOne({
      username
    })
  }

  saveUser (args) {
    console.log('args', args)
    const user = new this.model(args)
    return user.save()
  }

  findById (userId) {
    return this.findOneById(userId)
  }

  updateUser (userId, data) {
    return this.model.findOneAndUpdate(
      { _id: userId }, // 条件
      data,
      {
        new: true // 默认返回更新之前的数据，配置为 true 返回更新之后的数据
      }
    )
  }
}

module.exports = Users
