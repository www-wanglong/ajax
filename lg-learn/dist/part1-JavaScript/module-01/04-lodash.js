const _ = require('lodash')
const array = ['jack', 'lucy']
// console.log(_.first(array))

// console.log(_.toUpper(_.first(array)))

// console.log(_.reverse(array))
// console.log(_.reverse(array))

const r = _.each(array, (item, index) => {
  //console.log(item, index)
})
// console.log(r)

// 记忆函数
function getArea(r) {
  console.log(r)
  return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4))

// 模拟memoize
function memoize (f) {
  let cache = {

  }
  return function() {
    console.log(arguments)
    let key = JSON.stringify(arguments)
    cache[key] = cache[key] || f.apply(f, arguments)
    return cache[key]
  }
}

//let getAreaWithMemory = memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))

// 柯里化
// 普通的纯函数
// function checkAge(min, age) {
//   return age > min
// }

// console.log(checkAge(18, 20))
// console.log(checkAge(18, 24))


// function checkAge (min) {
//   return function(age) {
//     return age >= min
//   }
// }


let checkAge = min => ( age => age >= min)
let checkAge18 = checkAge(18)
let checkAge20 = checkAge(20)

// console.log(checkAge18(30))
// console.log(checkAge18(5))

//lodash中的柯里化函数 curry (可以把任意多元的函数转化为一元)

function getSum (a, b, c) {
  return a + b + c
}

const curried = _.curry(getSum)
// console.log(curried(1,2,3))
// console.log(curried(1)(2)(3))

//柯里化案例

const match = _.curry(function (reg, str) {
  return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)
// console.log(haveSpace('hello words'))
// console.log(haveNumber('1hello words'))

const filter = _.curry(function (func, array) {
  return array.filter(func)
})

// console.log(filter(haveSpace, ['wqe', 'wq e']))

const findSpace = filter(haveSpace)

// console.log(findSpace)

// 模拟实现lodash中的curry方法
const getSum1 = (a, b, c) => a + b + c

// console.log(curries(1)(2)(3))

function curry (func) {
  return function curriedFn(...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}

const curries = curry(getSum1)
console.log(curries(1)(2, 3))
