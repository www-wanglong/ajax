if (true) {
  var foo = 'zoo'
}
console.log(foo)
var elements = [{}, {}, {}]

for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = (function (i) {
    return function () {
      console.log(i)
    }
  })(i)
}

elements[2].onclick()

for (var i = 0; i < 3; i++) {
  let i = 'foo'
  console.log(i)
}


const arr = [100, 300, 900]
const [,,w] = arr

console.log(w)

const [foo1, ...rest] = arr
console.log(foo1, rest)


const obj = {
  name: 's'
}

let name = 'xixi'
//  标签函数
function templateS (stringS, name) {
  console.log(stringS)
  console.log(name)
  return `template string result ${name}`
}

const result = templateS`hello ${name}world`
console.log(result)

const message = 'Error foo is not defined'
console.log(message.includes('Error'))

function de(b = 2, a) {
  console.log(b)
}

function foo4 (...args) {
  console.log(args === 'w')
}
foo4(1,2,3)


const person = {
  name: 'tom',
  sayHi1: function () {
    console.log(`nam ${this.name}`)
  },
  sayHi: () => {
    console.log(`name ${this.name}`)
  }
}
person.sayHi1()
person.sayHi()

// proxy
const person2 = {
  name: 'zce',
  age: 20
}

const personProxy = new Proxy(person2, {
  get (target, property) {
    return property in target ? target[property] : 'default'
  },
  set (target, property, value) {
    console.log(22)
    if (property === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('error age')
      }
    }
    target[property] = value
  }
})
personProxy.age = 12
console.log(personProxy.name)


const list = []

const listProxy = new Proxy(list, {
  set () {

  }
})



const personProxy2 = new Proxy(person2, {
  get (target, property) {
    console.log('watch logic')
    return Reflect.get(target, property)
  },
})
console.log(personProxy2.name)

function Point(x, y) {
  this.x = x
  this.y = y

}

// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// }

// let p = new Point(1,2)
// console.log(p.toString())