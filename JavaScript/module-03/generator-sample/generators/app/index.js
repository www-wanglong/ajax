// 此文件作为Generator的核心入口
// 需要导入一个继承自 Yeoman Generator的类型
// Yeoman Generator在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'you project name',
        default: this.appname
      }
    ]).then( answers => {
      this.answers = answers
    })
  }
  writing () {
    // this.fs.write(
    //   this.destinationPath('temp.txt'),
    //   Math.random().toString()
    // )

    const tmpPath = this.templatePath('bar.html')
    const output = this.destinationPath('bar.html')
    const context =  this.answers

    this.fs.copyTpl(tmpPath, output, context)
  }
}