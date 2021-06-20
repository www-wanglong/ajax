#!/usr/bin/env node
// 修改权限为755


console.log('cli working')
// 脚手架的工作过程
// 1.通过命令行交互
const path = require('path')
const inquirer  = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Project name?'
  }
]).then( answer => {
  console.log(answer)
})