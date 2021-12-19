// 提供一个服务，可以根据请求的接口返回相应的数据
import express from 'express'

import { DataStore } from './data';

const app = express()

console.log(DataStore.list)
app.get('/', (req, res) => {
  res.json(DataStore.list)
})

app.listen(8080, () => {
  console.log('http://localhost:8080')
})