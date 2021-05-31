// 函数组合 调试
// NEVER SAY DIE
const _ = require('lodash')
const fp = require('lodash/fp')

const log = (v) => {
  console.log(v)
  return v
}

const track = _.curry((tag, v) => {
  console.log(tag, v)
  return v
})

// _.split
const split = _.curry((sep, str) => _.split(str, sep))
const map = _.curry((fn, array) => _.map(array, fn))

const join = _.curry((sep, array) => _.join(array, sep))


const f = fp.flowRight(fp.join('-'), track('map'), fp.map(_.toLower), track('split'), fp.split(' '))
console.log(f('NEVER SAY DIE'))

