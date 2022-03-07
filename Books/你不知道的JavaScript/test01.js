
const RATE = 0.2
const PHONE_PRICE = 99.99
const ACCESS_PRICE = 9.9

let balance = 8675
let amount = 0

function calRate(amount) {
  return amount * RATE
}

function formatPrice(amount) {
  return '$' + amount.toFix(2)
}

function foo() {
  console.log('foo')
}

var someFoo = foo
var myObject = {
  someFoo: foo
}

console.log(foo)

console.log(someFoo)
console.log(myObject.someFoo)


