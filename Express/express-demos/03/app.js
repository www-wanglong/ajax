const express = require('express')
const fs = require('fs')
const template = require('art-template')
const path = require('path')

const app = express()

// 当渲染.art结尾的资源文件的时候使用 express-art-template
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
// 配置文件的存储目录
app.set('views', path.join(__dirname, 'views'));
// 可以省略的后缀名
app.set('view engine', 'art');

const todos = [
  { id: 1, title: '吃饭1' },
  { id: 2, title: '吃饭2' },
  { id: 3, title: '吃饭3' },
]
// app.use(express.static('./public'))

// app.use('/public', express.static('./public'))

// 绝对路径
console.log(__dirname)
// app.use('/public', express.static(path.join(__dirname, './public'), {
//   index: false
// }))

// 多个资源 (如果没有添加前缀 优先匹配)
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))

app.get('/', (req, res) => {
  // 普通文本
  // res.send('Hello World!')

  //res.send('<h1>Hello World</h1>')
  // fs.readFile('./views/index.html', 'utf8', (err, data) => {
  //   if (err) {
  //     return res.status(404).send('404 Not Found')
  //   }
  //   let str = ''

  //   todos.forEach((todo) => {
  //     str += `<li>${todo.title}</li>`
  //   })

  //   const ret = data.replace('^_^', str)

  //   res.end(ret)
  // })

  // fs.readFile('./views/index.html', 'utf8', (err, templateStr) => {
  //   if (err) {
  //     return res.status(404).send('404 Not Found')
  //   }
  //   let str = ''

  //   // 模版引擎 - 根据规则进行字符串替
  //   const ret = template.render(templateStr, {
  //     foo: 'bar',
  //     todos
  //   })
  //   res.end(ret)
  // })

  res.render('index', {
    foo: 'bar',
    todos
  })
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
