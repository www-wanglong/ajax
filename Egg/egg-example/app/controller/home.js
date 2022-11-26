const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this.ctx.helper.hello())
    await this.ctx.render('index.tpl', {
      message: 'word'
    })
    //this.ctx.body = 'Hello world';
  }
  async users() {
    const users = this.service.user.getUserList()
    this.ctx.body = users;
  }
}

module.exports = HomeController;