## 学习笔记
https://www.javascriptc.com/docs/es6-tutorial/intro

# 14. Set和Map数据结构
## 14.1 Set
ES6提供的数据结构。类似于数组，但是成员的值都是唯一的，没有重复的值。

`Set`本身是一个构造函数，用来生成Set数据结构。

数组去重方法
```JavaScript
[...new Set([1,2,3,4,4,5])]
```

### 14.1.1 Set实例属性和方法
属性

- Set.prototype.constructor
- Set.prototype.size

操作方法：

- Set.prototype.add()
- Set.prototype.delete()
- Set.prototype.has()
- Set.prototype.clear()

遍历方法：

- Set.prototype.keys()
- Set.prototype.values()
- Set.prototype.entries()
- Set.prototype.forEach()

`Set`结构健名和健值是同一个



## 14.2 WeakSet
与Set有两个区别
- WeakSet的成员只能是对象，而不其他类型的值。
- WeakSet中的对象都是弱引用，即垃圾回收机制不考虑`WeakSet`对该对象的引用，也就是说，如果其他对象都不在引用该对象，那么垃圾回收机制会自动回收该对象所占的内存，不考虑该对象还存在于`WeakSet`之中。

> 这是因为垃圾回收机制根据对象的可达性来判断回收，如果对象还能被访问到，垃圾回收机制就不回释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，所以就不存在这个问题，因此，WeakSet适合临时存放一组对象，以及存放跟对象绑定的信息。
- WeakSet不能遍历
## 14.3 Map
JavaScript的对象，本质上是键值对的结合，传统上只能用字符串当当作键。

对于同于个对象的引用，Map结构才将其视为同一个键。

```JavaScript
const map = new Map()
map.set(['a'], 555)
map.get(['a']) // undefined
// ['a']是两个不同的数组实例
```

Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
## 14.4 WeakMap

`WeakMap`和`Map`区别
- `WeakMap`只接受对象作为键名（null除外）
- `WeakMap`的键名所指向的对象，不计入垃圾回收机制

`WeakMap`的专用场合，它的键所对应的对象，可能会在将来消失。`WeakMap`结构有助于防止内存泄露。

> `WeakMap`弱引用的只是键名，而不是键值。键值依然是正常的引用。
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

# 22. Class基本语法
## 22.1 简介
ES6的``