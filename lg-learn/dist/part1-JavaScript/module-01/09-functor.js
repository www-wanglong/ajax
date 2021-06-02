// Functor 函子
// 维护一个不对外公布的值
// 提供一个map方法，处理值的函数， 返回一个新的函子
const fp = require('lodash/fp')
const fs = require('fs')
const _ = require('lodash')
const { compose, curry } = require('folktale/core/lambda')
const { task } = require('folktale/concurrency/task')
class Container {
  static of (value) {
    return new Container(value)
  }
  constructor (value) {
    this._value = value
  }

  map (fn) {
    return Container.of(fn(this._value))
  }
}

const c = Container.of(undefined)
  .map( x => x + 1)
  .map( x => x * x)

// console.log(c)

//MayBe

class MayBe {

  static of (value) {
    return new MayBe(value)
  }

  constructor (value) {
    this._value = value
  }

  map (fn) {
    return this.isNothing() ? null : MayBe.of(fn(this._value))
  }

  isNothing () {
    return this._value === null || this._value === undefined
  }
}

let s = MayBe.of('hello')
  .map( x => x.toUpperCase() )
  .map( x => null )
  .map( x => x.split('') )
  // console.log(s)

// Either函数 (准确的打出报错)
// 处理错误的构造函数
class Left {

  static of (value) {
    return new Left(value)
  }

  constructor (value) {
    this._value = value
  }

  map () {
    return this
  }
}

class Right {

  static of (value) {
    return new Right(value)
  }

  constructor (value) {
    this._value = value
  }

  map (fn) {
    return new Right(fn(this._value))
  }

}

function parseJSON (str) {
  try {
    return Right.of(JSON.parse(str))
  } catch (e) {
    return Left.of({error: e.message})
  }
}

console.log(parseJSON('{"name": "log"}'))


// IO函子 包装返回的结果到函数中
class IO {

  static of (value) {
    return new IO(function () {
      return value
    })
  }

  constructor (fn) {
    this._value = fn
  }

  map (fn) {
    return new IO(fp.flowRight(fn, this._value))
  }

  join () {
    return this._value()
  }

  flatMap (fn) {
    return this.map(fn).join()
  }
}

// 调用函数
let r = IO.of(process).map( p => p.execPath)
// console.log(r._value())

// folktale的compose和curry
let f = curry(2, (x, y) => x + y)
console.log(f(1)(2))

let f5 = compose(fp.toUpper, fp.first)
console.log(f5(['one', 'tow']))

// folktale的 Task函子
function readFile (filename) {
  return task(resolver => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        resolver.reject(err)
      }
      resolver.resolve(data)
    })
  })
}

readFile('package.json')
  .map(fp.split('\n'))
  .map(fp.find(x => x.includes('version')))
  .run()
  .listen({
    onRejected: err => {
      console.log(err)
    },
    onResolved: value => {
      console.log(value)
    }
  })



// Pointed函子

// IO函子问题

// 模拟cat 命令
// 读文件
let readFileSync = function (filename) {
  return new IO(function () {
    return fs.readFileSync(filename, 'utf-8')
  })
}
// 打印文件
let print = function (x) {
  return new IO(function () {
    return x
  })
}

let cat = fp.flowRight(print, readFileSync)
//console.log(cat('package.json')._value()._value())

// monad函子是可以变扁的,可以解决嵌套的问题
let r4 = readFileSync('package.json')
          .map(fp.toUpper)
          .flatMap(print)
console.log(r4.join())
