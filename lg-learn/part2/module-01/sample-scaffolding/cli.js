#!/usr/bin/env node
// 修改权限为755


console.log('cli working')
// 脚手架的工作过程
// 1.通过命令行交互

const fs = require('fs')
const path = require('path')
const inquirer  = require('inquirer')
const ejs = require('ejs')

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Project name?'
  }
]).then( answer => {
  console.log(answer)
  // 模板目录
  const tmpDir = path.join(__dirname, 'templates')
  // 目标目录
  const destDir = process.cwd()

  // 读取文件
  fs.readdir(tmpDir, (err, files) => {
    if (err) throw err
    files.forEach( file => {
      console.log(file)
      // 模板引擎渲染
      ejs.renderFile(path.join(tmpDir, file), answer, (error, result) => {
        if (error) throw error
        // 将文件写到目标目录
        fs.writeFile(path.join(destDir, file), result, () => {

        })
      })
    })
  })
})