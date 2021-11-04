const express = require('express')
const template = require('art-template')
const fs = require('fs') // 读文件

const app = express()

app.get('/', (req, res) => {
  // 1. 获取页面模板
  const templateStr = fs.readFileSync('./index.html', 'utf-8')

  // 2. 获取数据
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
  // 3. 渲染： 数据 + 模版 = 最终结果
  const html = template.render(templateStr, data)

  // 4. 把渲染结果
  res.send(html)
})
app.listen(3000, () => console.log('http://localhost:3000'))