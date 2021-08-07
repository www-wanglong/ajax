## 学习笔记
https://www.javascriptc.com/docs/es6-tutorial/intro
## Iterator和for...of循环

### Iterator的作用
- 为各种数据结构，提供一个统一的、简便的访问接口
- 使得数据结构的成员能够按照某种次序排列
- ES6创造了一种新的遍历命令`for...of`循环，Iterator接口主要供`for...of`消费
### 默认的Iterator接口
ES6规定，默认的Iterator接口部署在数据结构的Symbol.iterator属性。一个数据结构只要具有Symbol.iterator属性，就可以认为是’可遍历的‘


原生具备Iterator接口的数据结构
+ Array
+ Map
+ Set
+ String
+ TypedArray
+ 函数的arguments对象
+ NodeList对象

一个对象如果具备for...of循环调用的Iterator接口，就必须在Symbol.iterator的属性上部署遍历其生成方法（原型链上的对象具有该方法也可）
```JavaScript
class RangeIterator {
  constructor(start, stop) {
    this.value = start
    this.stop = stop
  }

  [Symbol.iterator]() {
    return this
  }

  next() {
    var value = this.value
    if (value < this.stop) {
      this.value++;
      return {value: value, done: false}
    }
    return {value: undefined, done: true}
  }
}
```
### 调用Iterator接口的场合
**(1)解析赋值**
```JavaScript
let [...set]
```
***(2)扩展运算符***
***(3)yield****


`yield*`后面跟的是一个可遍历的结构，他会调用该结构的遍历器接口
```JavaScript
let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();

iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
```
### 字符串也有Iterator