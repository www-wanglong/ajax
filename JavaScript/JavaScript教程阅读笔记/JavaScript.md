# JavaScript学习笔记
https://www.javascriptc.com/books/javascript-tutorial/
# 1. 入门篇
## 1.1 什么是JavaScript语言？
JavaScript是一种轻量级的脚本语言。也是一种嵌入式语言。也是一种面向'模型语言'。

核心语法包括：基本的语法结构和标准库（Array、Date、Math）。还包括各宿主环境提供额外的API
## 1.2 基本语法
### 1.2.1 语句
`var a = 1 + 7`
### 1.2.2 变量声明
- 声明变量

  `var a = 1;`
  > 变量a声明然后赋值

- 声明多个变量
  `var a,b;`

- 多次赋值会被覆盖

### 1.2.3 变量提升
JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行的运行。导致所有的变量的声明语句被提升到代码的头部。
```JavaScript
console.log(a);
var a = 1;
```
### 1.2.4 区块
区块对于var命令不构成单独的作用域
```JavaScript
{
  var a = 1;
}
a // 1
```
# 2.  数据类型
## 2.1. 概念
### 2.1.1 JavaScript的六种数据类型
- 数值
- 字符串
- 布尔值
- `null`
- `undefined`
- 对象 （`object`、`array`、`function`）

### 2.1.2 确定一个值是什么类型
- `typeof`运算符
  + 数值、字符串、布尔值返回`number`、`string`、`boolean`

  + 函数返回`function`

  + `undefined`返回`undefined`
  + 对象返回`object`
    > `typeof [] // "object"`，数组本质只是一种特殊的对象。可以使用instanceof运算符区分。
    ```JavaScript
    var a = {};
    var b = []
    a instanceof Array // false
    a instanceof of Array // true
    ```
  + `null`返回`object`
- `instanceof`运算符
- `Object.prototype.toString`方法
## 2.1 null、undefined和布尔值
### 2.1.1 null和undefined区别
- `null`和`undefined`都可以表示'没有'
- `null`是表示一个'空'对象，转为数值时为0；`undefined`是一个表示'此处无定义'的原始值，转为数值时为`NaN`
### 2.1.2 布尔值

如果JavaScript预期某个位置应该是布尔值，会将该位置上现有的值自动转换为布尔值。
`undefined`、`null`、`false`、`0`、`NaN`、`""或''`会被转为`false`
## 2.3. 数值 number
- JavaScript内部所有的数字都是以64位浮点数形式存储，整数也是如此.
- NaN不是一个独立的数据类型，而是一个特殊的数值，它的数据类型依然属于Number
- `Infinity`无穷大

### 2.3.1 parseInt()
`parseInt`方法还可以接受第二个参数，表示被解析的值的进制，默认为10
### 2.3.2 parseFloat()
`parseFloat`将一个字符串转为浮点数
### 2.3.3 isNaN()
`isNaN`方法可以用来判断一个值是否为`NaN`
> `isNaN`只对数值有效，如果出入其他值，会被先转成数值。
```JavaScript
isNaN({})
//等同于
isNaN(Number({}))
```
对于空数组和只有一个数值成员的数组，`isNaN`返回`false`
```JavaScript
isNaN([]) // false
isNaN([12]) // false
isNaN(['12']) // false
```

判断`NaN`更靠谱的方法
```JavaScript
function myIsNaN (value) {
  return value !== value;
}
```
### 2.3.4 isFinite()
`isFinite`方法返回一个布尔值，表示某个值是否为正常的数值。

除了 `Infinity`、`-Infinity`、`NaN`和`undefined`这几个会返回`false`，对于其他的数值都会返回`true`.


## 2.4 字符串 string

## 2.5 对象 object
### 2.5.1 键名
键名是数值，会被自动转为字符串
### 2.5.2 对象的引用
如果不同的变量名指向同一个对象， 那么他们都是这个对象的引用，也就是说指向同一个内存地址。
```JavaScript
var foo = 'bar'
var obj = {
  foo: 1,
  bar: 2,
}
obj.foo // 1 foo此时是字符串
obj['foo'] // 1 foo此时是字符串
obj[foo] // 2 foo此时是一个变量，指向字符串bar
```
### 2.5.3 Object.keys()
查看一个对象本身的所有属性
### 2.5.4 delete命令
`delete`命令用于删除对象属性，删除成功后返回`true`
```JavaScript
var obj = {p: 1}
delete obj.p // true
````
> 删除一个不存在的属性，`delete`不报错，而且返回`true`
> `delete`命令无法删除继承的属性，而且返回`true`

当一个对象的属性的`configurable`为 `false`时，则是不能删除的属性，`delete`命令会返回`false`
```JavaScript
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  configurable: false,
})
obj.p // 123
delete obj.p // false
```
### 2.5.5 in运算符
`in`运算符用来检查对象是否包含某个属性，但不能识别哪些属性是对象自身的，还是继承的。可以使用`hasOwnProperty`
```JavaScript
var obj = { p: 1 }
'p' in obj // true
'toString' in obj // true
```
### 2.5.6 for...in循环
- 它遍历的是所有可遍历（enumerable）的属性
- 还会遍历继承的属性
### 2.5.7 with语句
```JavaScript
var obj = {
  p1: 1,
  p2: 2
}
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4
obj.p2 = 5
```

## 2.6 函数 function
一段可反复调用的代码块
### 2.6.1 声明
- function命令
- 函数表达式
- Function构造函数
### 2.6.2 函数名提升
### 2.6.3 函数作用域
- 全局作用域
- 函数作用域

  > 在函数内部定义的变量，外部无法读取，称为‘局部变量’

  > 函数内部定义的变量，会在该作用域内覆盖同名全局变量
  ```JavaScript
  var v = 1
  function f() {
    var v = 2;
    console.log(v);
  }
  f() // 2
  v //1
  ```
  > 局部变量只能在函数内部声明，在其他区块中声明，一律是全局变量
  ```JavaScript
  if (true) {
    var x = 5
  }
  console.log(x); // 5
  ```
### 2.6.4 函数内部变量提升
与全局作用域一样，函数作用域内部也会产生“变量提升”现象。
### 2.6.5 函数本身的作用域
函数本省也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。
```JavaScript
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() // 1
```
### 2.6.6 arguments对象
`arguments`很像数组，但它是个对象。但是可以将`arguments`转为数组
```JavaScript
var args = Array.prototype.slice.call(arguments)
```

### 2.6.6 闭包
定义在一个函数内部的函数。它的最大特点是可以’记住‘诞生的环境。

作用：
 -  可以读取函数内部的变量
 - 让这些变量始终保持在内存中
 ```JavaScript
  function createIncrement(start) {
    return function () {
      return start++
    }
  }
  var inc = createIncrement();
  //inc始终在内存中，而inc的存在依赖于createIncrement，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收。
  inc() //5
  inc() //6
  inc() //7
 ```

## 2.7 数组 array
### 2.7.1 数组的本质
本质上，数组属于一种特殊的对象。
### 2.7.2 length
清空数组的一个有效方法是将`length`属性设置为0。
```JavaScript
var arr = [1,2,3]
arr.length = 0
arr // []
```

数组的某个位置是空位，使用forEach方法、for...in结构、Object.keys方法进行遍历，空位会被跳过。

### 2.7.3 类似数组对象
数组的`slice`方法可以将**类似数组对象**变成真正的数组。
`var arr = Array.prototype.slice.call(arrayLike);`

还可以通过`call()`把数组的方法放到对象上面。
```JavaScript
// 通过call把forEach()嫁接到'abc'上调用
Array.prototype.forEach.call('abc', function(a) { console.log(a) })
```

# 3. 运算符
## 3.1 算数运算符
### 3.1.1 对象相加
对象会先调`valueOf`方法，返回一个非原始类型的值会自动调用`toString`方法，将其转为字符串
## 3.2 比较运算符
### 3.2.1 原始类型值
如果两个运算都是原始类型的值，则是先转成数值在比较
```JavaScript
5 > '4' // true
// 等同于  5 > Number('4)
```

### 3.2.2 严格相等运算符
`==` 比较两个值是否相等，`===` 比较是否为‘同一个值’。 `==`会将它们转换成同一类型，再用`===`比较。
### 3.2.3 复合类型值
比较的是他们是否指向同一地址
```JavaScript
{} === {} // false
[] === [] // false
```
### 3.2.4 相等运算符
`==`会将它们转换成同一类型，再用`===`比较
- (1) 原始类型值
  ```JavaScript
  1 == true //true 等同于 1 === Number(true)
  ```
- (2) 对象和原始类类型比较
  > 对象会先转换成原始类型再比较
  ```JavaScript
  // 对象与数值比较时，对象转为数值
  [1] == 1 //true 等同于 Number(1) == 1

  // 对象与字符串比较时，对象转为字符串
  [1] == '1' //true 等同于 String([1]) == '1'

  // 对象与布尔值比较时，两边都转为数值
  [1] == true // 等同于 Number([1]) == Number(true)
  ```
## 3.3 布尔运算符
### 3.3.1 取反为true的6个值
- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- 空字符串`''`
## 3.4 二进制运算符
### 3.4.1 概述
- |
- &
- ～ 取反
- ^ 两个二进制位不相同，则结果为1，否则为0
- `<<`
- `>>`
- `>>>` 向右移动时，头部一律补零，而不考虑符号位。区别主要在于负数。

### 3.4.2 将任意数值转为32为整数
```JavaScript
function toInt32() {
  // 将任意值与0进行或运算，会自动将一个值转为32位整数
  return x | 0
}
```

### 3.4.3 开关
## 3.5 其他运算符

# 4.语法专题
## 4.1 数据类型的转换