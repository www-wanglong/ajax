const _ = require('lodash')
// 函数组合
function compose (f, g) {
  return function(value) {
    return f(g(value))
  }
}

// 反转数组
function reverse (array) {
  return array.reverse()
}

// 获取第一个元素
function first (array) {
  return array[0]
}

const toUpper = s => s.toUpperCase()


const last = compose(first, reverse)

// console.log(last([1,2,3]))

const f =_.flowRight(toUpper, first, reverse)
// console.log(f(['xixi', 'haha']))

// 模拟flowRight函数
function compose1 (...args) {
  return function (value) {
    return args.reverse().reduce(function (acc, fn) {
      return fn(acc)
    }, value)
  }
}

// es6

const compose2 = (...args) => value => args.reverse().reduce( (acc, fn) => fn(acc), value)

// 变量赋值 不会提升
const f2 = compose2(toUpper, first, reverse)
// console.log(f2(['xixi', 'haha']))

//
//const f3 = _.flowRight(_.toUpper, _.first, _.reverse)
const f3 = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse)
console.log(f3(['xixi', 'haha', 'ew']))

