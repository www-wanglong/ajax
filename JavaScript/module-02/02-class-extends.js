class Person {
  constructor (name) {
    this.name = name
  }

  say () {
    console.log(`hi, my name is ${this.name}`)
  }
}

const s = new Set()
s.add(2).add(4)
console.log(s)


const obj = {}
obj[true] = 'value'
obj[123] = 'value'
obj[{a: 1}] = 'value'
console.log(Object.keys(obj))

const m = new Map()
const tom = { name: 'tom' }
m.set(tom, 90)
console.log(m)

const cache = {}
cache['foo'] = 'h'
cache['foo'] = '123'
console.log(cache)

const sy = Symbol('foo')
console.log(sy)

// 私有属性
const name = Symbol()
const person = {
  [name]: 'zce',
  say () {
    console.log(this[name])
  }
}

const s1 = Symbol.for('foo')
const s2 = Symbol.for('foo')
console.log(s1 === s2)

const o4 = {
  [Symbol()]: 'symbol value',
  foo: 'normal value'
}
for (var key in o4) {
  console.log(key)
}

const m2 = new Map()
m2.set('foo', 'q3')
for (let [k, v] of m2) {
  console.log(k, v)
}


const set = new Set(['foo', 'bar'])
const it = set[Symbol.iterator]()


console.log(it.next())
console.log(it.next())
console.log(it.next())

const obj4 = {
  store: ['foo', 'bar'],
  [Symbol.iterator]: function () {
    let index = 0
    const self = this
    return {
      next: function () {
        const result = {
          value: self.store[index],
          done: index >= self.store.length
        }
        index++
        return result
      }
    }
  }
}

for (const item of obj4) {
  console.log('item')
}

const todos = {
  life: ['吃饭', '睡觉', '打豆豆'],
  life1: ['吃饭1', '睡觉1', '打豆豆1'],
  [Symbol.iterator]: function * () {
    const all = [...this.life, ...this.life1]
    for (const todo of all) {
      yield todo
    }
  }
}
for (const todo of todos) {
  console.log(todo)
}


// Generator函数
function* foo () {
  console.log('foo')
  return 100
}

const generatorResult = foo()
console.log(generatorResult.next())

