# 1. 关于 this
## 1.1 为什么要用this

`this`提供了一种更优雅的方式来隐士‘传递对象’。

```JavaScript
function identify() {
  return this.name.toUpperCase()
}

function speak() {
  var greeting = "Hello " + identify.call(this)
}

var me = { name: 'wang' }

speak.call(me) //Hello WANG
```

如果不是使用`this`，则代码将会变成：

```JavaScript
function identify(context) {
  return context.name.toUpperCase()
}

function speak(context) {
  var greeting = "Hello " + identify(context)
}

var me = { name: 'wang' }

speak(me) //Hello WANG
```

## 1.2 误解

### 1.2.1 指向自身

误解：`this`并指向函数自身。

```JavaScript
function foo(num) {
  console.log( "foo: " + num );
  // 记录 foo 被调用的次数
  this.count++;
}
foo.count = 0;
var i;
for (i=0; i<10; i++) {
  if (i > 5) {
    foo( i );
  }
}

// foo 被调用了多少次？
console.log( foo.count ); // 0 -- WTF?
```

### 1.2.2 它的作用域

误解：this指向函数的作用域

## 1.3 this到底是什么

`this`实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

# 2. this全面解析

## 2.1 调用位置

```JavaScript
function baz() {
  // 当前调用栈时baz, 当前调用位置时全局作用域
  console.log('baz')
  bar()
}

function bar() {
  // 当前调用栈时baz -> bar, 当前调用位置在baz
  console.log('bar')
  foo()
}


function foo() {
  // 当前调用栈时baz -> bar -> foo, 当前调用位置在bar
  console.log('foo')
}

baz()

function foo() {
 console.log( this.a );
}
var obj = {
 a: 2,
 foo: foo
};
var bar = obj.foo; // 函数别名！
var a = "oops, global";
bar();
```

## 2.1 绑定规则

### 2.2.1 默认绑定
独立函数的调用，`this`执行全局对象
```JavaScript
function foo() {
  console.log(this.a)
}
var a = 2
foo() // 2
```
### 2.2.2 隐式绑定
调用的位置是否有上下文对象。
```JavaScript
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
obj.foo() // 2
```
### 2.2.3 显示绑定
- apply
- call
- bind
### 2.2.4 new绑定

## 2.3 优先级
默认 < 隐式 < 显式 < new

## 2.4 绑定例外
如果把`null`或者`undefined`作为this的绑定对象传入call、apply或者bind,就会被忽略。

一般可以使用apply展开数组，bind可以对参数柯里化。

```JavaScript
function foo(a,b) {
  console.log('a' + a + ',b' + b)
}
foo.apply(null, [2,3])

// 使用bind柯里化
var bar = foo.bind(null, 2)
bar(3)
```

一种更安全的做法传入一个特殊的对象（DMZ）：`var obj = Object.create(null)`

## 2.5 this词法
箭头函数根据当前的词法作用域来决定this的。

箭头函数会继承外层函数调用的`this`绑定

# 3. 对象
## 3.1 语法
`typeof null` 返回object
> 不同的对象在底层都表示为二进制，在JavaScript中二进制前三位为0都话会被判断为object类型，null的二进制表示全为0
## 3.2 内置对象
一些对象的子类型

原始值'i am a string'并不是一个对象，他只是一个字面量，如果在这个字面量上执行一些操作，
比如获取长度，那需要转换为String对象，在必要时语言会自动转换。

### 3.3.10 存在符
`in`操作符检查属性是否在对象及其原型链中。
`hasOwnProperty()`只会检查属性是否在myObject对象中。

所有的对象都可以通过`Object.prototype`委托来访问`hasOwnProperty()`，但是有的对象可能没有连接到`Object.create(null)`。
这种情况下，就需要使用`Object.prototype.hasOwnProperty.call(myObject, 'a')`来说判断。


枚举(enumerable)

可枚举就相当于可出现在对象属性的遍历中。

```JavaScript
var myObject = {}
Object.defineProperty(
  myObject,
  'a',
  {
    enumerable: true, value: 2
  }
)

Object.defineProperty(
  myObject,
  'b',
  {
    enumerable: false, value: 3
  }
)

Object.keys(myObject) // a

Object.getOwnPropertyNames( myObject ); // a b
```

enumerable不会出现在for...in循环中。（尽管in操作符来判断是否存在）。
## 3.4 遍历