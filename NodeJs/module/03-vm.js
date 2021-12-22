const fs = require('fs')
const vm = require('vm')

let content = fs.readFileSync('test.txt', 'utf-8')

// console.log(content)

// eval(content)
// let fn = new Function('age', 'return age + 1')

// console.log(fn(age))

vm.runInThisContext(content)
console.log(age)