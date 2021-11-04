// 非函数式
let num1 = 2
let num2 = 3
let sum = num1 + num2
// 函数式编程 相同的函数始终要得到相同的输出
function add (n1, n2) {
  return n1 + n2
}
// [1,2].forEach( (index) => {
//   console.log(index)
// })
// 高阶函数 - 函数作为参数
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i)
  }
}

// forEach([1,2,3], function (item) { console.log(item) })

function filter(array, fn) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    fn(array[i]) && result.push(array[i])
  }
  return result
}

// filter([1,2,3], function (item) { return item === 1 })

// 高阶函数 - 函数作为返回值
function makeFn () {
  let msg = 'hello function'
  // 外部对内部有引用 内部的成员不能释放
  return function () {
    console.log(msg)
  }
}

// makeFn()()
function once (fn) {
  let done = false
  return function () {
    if (!done) {
      done = true
      return fn.apply(this, arguments)
    }
  }
}

let pay = once(function (money) {
  console.log(`支付${money}`)
})
// pay(5)
// pay(4)
// for of es6引进的
// 模拟常用高级函数：map、every、some
const map = (array, fn) => {
  let result = []
  for(let value of array) {
    result.push(fn(value))
  }
  return result
}
// console.log(map([1,2,3], (item) => { return item + 1 }))

const every = (array, fn) => {
  let result = true
  for (let value of array) {
    result = !fn(value)
    if (!fn(value)) {
      break
    }
  }
  return result
}

//console.log(every([1,2,3], (item) => { return item < 3 }))

const some = (array, fn) => {
  let result = false
  for (let value of array) {
    result = fn(value)
    if (result) {
      break
    }
  }
  return result
}

console.log(some([1,2,3], (item) => { return item < 0 }))



