// lodash/fp  函数、数据优先  数据最后
// 接收的参数个数不同
const fp  = require('lodash/fp')
const _ = require('lodash')

// console.log(fp.map(fp.toUpper)(['a', 'b', 'c']))
console.log(_.map(['23', '8'], parseInt))
console.log(fp.map(parseInt, ['23', '4']))
console.log(fp.map(parseInt)(['23', '4']))