const fs = require('fs')
const path = require('path')
const marked = require('marked')
const browserSync = require('browser-sync')

/**
 * 01 读取md和css
 * 02 替换占位符
 * 03 将上述html字符写入到html中
 * 04 监听md变换
 * 05 使用browser-sync
 */
let mdPath = path.resolve('test.md')
let cssPath = path.resolve('github.css')
let htmlPath = mdPath.replace(path.extname(mdPath), '.html')


fs.watchFile(mdPath, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    fs.readFile(mdPath, 'utf-8', (err, data) => {
      let htmlStr = marked.marked(data)
      fs.readFile(cssPath, 'utf-8', (err, data) => {
        let retHtml = temp.replace('{{content}}', htmlStr)
        fs.writeFile(htmlPath, retHtml, (err) => {
          console.log('success s')
        })
      })
    })
  }
})

browserSync.init({
  browser: '',
  server: __dirname,
  watch: true,
  index: path.basename(htmlPath)
})

const temp = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
{{content}}
</body>
</html>
`