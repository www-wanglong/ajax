const Service = require('egg').Service;

class UserService extends Service {
  getUserList () {
    return [
      {
        name: 'egg'
      }
    ]
  }
}

module.exports = UserService;