const express = require('express');
const { handle } = require('express/lib/application');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});

const handler = app.getRequestHandler();

// 自定义服务器

// 准备next应用
app.prepare().then(() => {
  const server = express();

  server.get('/hello', (req, res) => {
    res.send('hello nextjs')
  });

  server.get('*', (req, res) => {
    // 匹配内部路由
    handler(req, res)
  });

  server.listen(3000, () => {
    console.log('启动成功')
  })
});