const jwt = require('jsonwebtoken')
const { promisify } = require('util')

exports.sign = promisify(jwt.sign)
exports.verify= promisify(jwt.verify)
exports.decode = promisify(jwt.decode)

// 生成 jwt
// const token = jwt.sign({
//   foo: 'bar'
// }, 'shhh')
// console.log(token)

// const token = jwt.sign({
//   foo: 'bar'
// }, 'shhh', (err, token) => {
//   if (err) {
//     return console.log('生成token失败')
//   }
//   console.log(token)
// })


// 验证jwt
// const res = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NDI2ODI5ODh9.k4So2_x2yhcWnoH40IrO-u2bU78wQo7UVI6gdLpJkRM', 'shhh', (err, ret) => {
//   if (err) {
//     return console.log('token验证失败')
//   }
// })
// console.log(res)
