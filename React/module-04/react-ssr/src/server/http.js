import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('http://localhost:3000')
});

// 添加静态资源
app.use(express.static('public'))


export default app;