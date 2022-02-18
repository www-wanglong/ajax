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
函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。
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
 - 可以读取函数内部的变量
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
### 4.1.1 `Number()`
- 调用自身的`valueOf()`方法，
- 如果不是原始类型的值，还是返回对象，调用`toString()`
- `Number()`
### 4.1.2 `String()`
- `toString()`
- `valueOf()`
- `String()`
### 4.1.3 自动转换为数值
除了加法运算符`+`有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值

## 4.2 错误处理机制
- `SyntaxError`对象 语法错误
- `ReferenceError` 引用一个不存在的变量时发生的错误
- `RangeError` 值超出有效范围时发生的错误
- `TypeError` 对象是变量或参数不是预期类型时发生的错误

# 5. 标准库
## 5.1 Object对象
### 5.1.1 概述
- `Object`对象本身的方法
`Object.print = function (o) { console.log('a') }`
- `Object`的实例方法
```JavaScript
Object.prototype.print = function () {
  console.log(this)
}

var obj = new Object()
obj.print() // Object
```

### 5.1.2 Object()
`Object`本身是一个函数，将任意值转为对象。


```JavaScript
var obj = Object()
// 等同于
var obj = Object(undefined)
var obj = Object(null)
obj instanceof Object //true
```

如果参数是原始类型的值，`Object`方法将其转为对应的包装对象实例。如果`Object`方法的参数是一个对象，它总是返回该对象，即不用转换。
```JavaScript
var arr = []
var obj = Object(arr)
obj === arr // trur
```
可以写一个判断变量是否为对象的函数
```JavaScript
function isObject(value) {
  return value === Object(value)
}
```

### 5.1.2 Object构造函数
```JavaScript
// 生成新的对象
var obj = new Object()
```

### 5.1.3 Object方法
- `Object.keys()` 返回对象自身的所有属性名
- `Object.getOwnPropertyName()` 返回可枚举和不可枚举的属性名
- `Object.getOwnPropertyDescriptor()` 获取对象自身的属性，不能用于继承
- `Object.prototype.hasOwnProperty()` 判断该实例对象是否自身是否具有该属性
- `Object.prototype.toString` 返回一个对象的字符串形式，默认情况下返回类型字符串
### 5.1.4 toString()判断数据类型
```JavaScript
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
```
## 5.2 属性描述对象
### 5.2.1 enumerable 可遍历性
早期`for...in`循环是基于`in`运算符，`in`运算符不管某个属性是对象自身还是继承的，都会返回`true`。
后来引入可遍历，只有可遍历的属性才能被`for...in`循环遍历，同时还规定`toString`这一类实例对象继承的原生属性，都是不可遍历的。

这三个操作都不会取到`enumerable=false`的属性
- `for...in`循环
- `Object.keys`方法
- `JSON.stringify`方法
### 5.2.1 对象的拷贝
需要将一个对象的所有属性，拷贝到另一个对象
```JavaScript
// 这个方法，遇到存取器定义的属性 只会拷贝值
extend({}, {
  get a() { return 1 }
})
var extend = function(to, from) {
  for (var property in from) {
    to[property] = from[property]
  }
  return to
}
```
可以通过`Object.defineProperty`方法来拷贝属性
```JavaScript
var extend = function(to, from) {
  for (var property in from) { // 会遍历自身属性以及继承的可遍历的属性
    if (!from.hasOwnProperty(property)) continue;
    Object.defineProperty(
      to,
      property,
      Object.getOwnPropertyDescriptor(from, property) //只能获取自身的属性
    );

  }
  return to;
}
extend({}, { get a() { return 1 } })
```

## 5.3 Array 对象
Array是JavaScript的原生对象，同时也是一个构造函数

空位读取不到键名
### 5.3.1 Array.isArray
判断是否是数组

### 5.3.2 sort()
默认按照字典顺序。数组会被转为字符串，再按照字典顺序进行比较。
```JavaScript
[
  { age: 12 },
  { age: 11 },
  { age: 13 }
].sort(function (o1, o2) {
  return o1.age - o2.age
})
```
`sort`还可以接受函数参数，如果该函数的返回值大于0，表示第一个成员排在第二个成员后面。

### 5.3.3 map()
`map`方法不会跳过`undefined`和`null`，但是会跳过空位。

## 5.4 包装对象
### 5.4.1 定义
对象JavaScrip三种原始类型的值（数值、字符串、布尔值），在一定条件下，会自动转为对象，也就是原始类型的包装对象。
```JavaScript
var v1 = new Number(1)
var v2 = new String('abc')
var v3 = new Boolean(true)

typeof v1 // 'object'
```

Number、String、Boolean这三个对象作为构造函数使用（new）时，可以将原始类型的值转为对象；作为普通函数使用时，可以将任意类型的值，转为原始类型的值。

### 5.4.2 原始类型与实例对象的自动转换
某些情况下，原始类型的值会自动当作包装对象调用，即调用包装对象的属性和方法。这时JavaScript引擎会自动将原始类型的值转为包装对象的实例，并在使用后立刻销毁实例。

例如：
```JavaScript
var str = 'abc'
str.length //3

// 等同于
var strObject = new String(str)
strObject.length //3
```

## 5.5 Number对象
### 5.5.1 toString

`toString`方法接受一个参数，表示输出的进制

## 5.6 String对象
### 5.6.1 slice()
不改变原字符串，截取字符串
### 5.6.2 substring()
和slice方法类似
### 5.6.3 substr()
和slice方法类似
### 5.6.4 split()
分割字符串

## 5.7 Math 对象
- `Math.abs()` 绝对值
- `Math.ceil()` 向上取整
- `Math.floor()` 向下取整
- `Math.max()` 最大值
- `Math.min()` 最小值
- `Math.pow()` 指数
- `Math.sqrt()` 平方根
- `Math.log()`
- `Math.round()` 四舍五入
- `Math.random()` 随机数

## 5.8 Date对象

## 5.9 RegExp 对象
### 5.9.1 test()
```JavaScript
/cat/.test('cats and') //true
```
### 5.9.2 exec()
返回匹配的结果
```JavaScript
/x/.exec('x') // ['x']
```

### 5.9.3 字符串中实例方法
- String.prototype.match()
- String.prototype.search()
- String.prototype.replace()
- String.prototype.split()

### 5.9.4 元字符
- 点字符`(.)` ,匹配除回车`(\r)`、换行`(\n)`,分割符以外的所有字符
- `^`表示字符串的开始位置
- `$`表示字符串的结束位置
- `|` 选择符
### 5.9.5 转义符
- `\`转义符
### 5.9.6 特殊字符
- \cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符。
- [\b] 匹配退格键(U+0008)，不要与\b混淆。
- \n 匹配换行键。
- \r 匹配回车键。
- \t 匹配制表符 tab（U+0009）。
- \v 匹配垂直制表符（U+000B）。
- \f 匹配换页符（U+000C）。
- \0 匹配null字符（U+0000）。
- \xhh 匹配一个以两位十六进制数（\x00-\xFF）表示的字符。
- \uhhhh 匹配一个以四位十六进制数（\u0000-\uFFFF）表示的 Unicode 字符。
### 5.9.7 字符类

-  `[]` ,`[xyx]`表示`x`、`y`、z`之中任意一个匹配
  ```JavaScript
  /[abc]/.test('apple') //true
  ```
- 脱字符`^`, 除了,如： [^xyz]表示除了x、y、z之外都可以匹配
- 连字符`-`, `/[a-z]/`
### 5.9.7 预定义模式
- `\d`,相当于 `[0-9]`
- `\D`, 相当于 `[^0-9]`
- `\w`, 相当于`[A-Za-z0-9_]`
- `\W`, 相当于`[^A-Za-z0-9_]`
- `\s`, 匹配空格， 相当于[\t\r\n\v\f]
- `\S`，非空格字符串
### 5.9.7 重复类
- `{}`, `{n}`表示欠好重复`n`次
- `{n,}`便是至少重复`n`次
- `{n,m}`表示重复不少于`n`次，不多于`m`次
### 5.9.8 量词符
- `?` 表示某个模式出现0次或1次，等同于`{0, 1}`
- `*` 表示某个模式出现0次或多次，等同于`{0,}`
- `+` 表示某个模式出现1次或多次，等同于`{1,}`
### 5.9.9 贪婪模式 加个`?`
```JavaScript
// 最大可能匹配
'aaa'.match(/a+/) // ['aaa']

// 改为贪婪模式
'aaa'.match(/a+？/) // ['a']
```
### 5.9.10 修饰符
- `g`修饰符，全局匹配
  每次都是从上一次匹配成功处，开始向后匹配
  ```JavaScript
  var regex = /b/g;
  var str = 'abba';

  regex.test(str); // true
  regex.test(str); // true
  regex.test(str); // false
  ```
- `i`修饰符 忽略大小写
  ```JavaScript
  /abc/i.test('ABC') //true
  ```
- `m`修饰符

  表示多行模式，会修改`^`和`$`的行为
  ```JavaScript
  /world$/.test('hello world\n') // false
  /world$/m.test('hello world\n') // true
  ```
### 5.9.11 组匹配
```JavaScript
var m = 'abcabc'.match(/(.)b(.)/);
// ['abcabc', 'a', 'c']
```
还可以使用`\n`引用括号匹配的内容，n时从1开始的自然数
```JavaScript
/(.)b(.)\1b\2/.test("abcabc")
// true
```

还可以嵌套
```JavaScript
/y((..)\2)\1/.test('yabababab') // true
```

### 5.9.12 非捕获组
`(?:x)`,不返回该组匹配内容，即匹配的结果中不计入这个括号
```JavaScript
var m = 'abc'.match(/(?:.)b(.)/);
m // ["abc", "c"]
```

### 5.9.13 先行断言
`x(?=y)`, `x`只有在y前面匹配，`y`不会被计入结果
```JavaScript
var m = 'abc'.match(/b(?=c)/);
// [b]
```
### 5.9.14 先行否定断言
`x(?!y)`, `x`只有不在`y`前面才匹配，`y`不会被计入返回结果
```JavaScript
/\d+(?!\.)/.exec('3.14')
// ["14"]
```

## 5.10 JSON对象
### 5.10.1
`JSON`对象是`JavaScript`的原生对象，用来处理JSON格式数据。
### 5.10.2 JSON.stringify()
如果对象的属性是 `undefined`、函数或XML对象，该属性会被`JSON.stringify()`过滤


如果数组的成员是`null`和函数，它们都会被转成`null`;

正则对象会被转成空对象；
```JavaScript
JSON.stringify(/foo/)
```

JSON.stringify方法会忽略对象不可遍历的方法；

### 5.10.3 JSON.stringify()第二个参数
- 指定需要转成字符串的属性，对数字无效
- 还可以是个函数，用来改JSON.stringify的返回值
```JavaScript
function f(key, value) {
  if (typeof value === "number") {
    value = 2 * value;
  }
  return value;
}

JSON.stringify({ a: 1, b: 2 }, f)
// '{"a": 2,"b": 4}'
```

### 5.10.3 JSON.stringify()第三个参数
增加返回字符串的可读性

### 5.10.4 参数对象的 toJSON 方法
如果参数对象定义了`toJSON`方法，`JSON.stringify()`会直接使用`toJSON`方法

# 6. 面向对象编程

## 6.1 实例对象和new命令

### 6.1.1 构造函数
`constructor`，就是专门用来生成实例对象的函数。一个构造函数，可以生成多个实例对象，这些实例队形都有相同的结构。


构造函数的两个特点：
- 函数体内部使用`this`关键字，代表所要生成的对象实例
- 生成对象的时候，必须使用`new`命令

### 6.1.2 new命令的原理
- 1. 创建一个空对象，作为将要返回的对象实例
- 2. 将这个空对象的原型，指向构造函数的`prototype`属性
- 3. 将这个控对象赋值给函数内部的`this`关键字
- 4. 开始执行构造函数内部的代码

如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。
```JavaScript
function _new (constructor, params) {
  var args = [].splice.call(arguments)
  // 去除构造函数
  var constructor = args.shift()
  // 创建一个空对象
  var context = Object.create(constructor.prototype)
  // 执行构造函数
  var result = constructor.apply(context, args)

  return (typeof result === 'object' && result != null) ? result : context

}
```

### 6.1.3 Object.create()创建实例对象

## 6.2 this关键字
`this`就是属性或方法当前的对象。

### 6.2.1 对象的方法
如果对象的方法里面包含`this`，`this`的指向就是方法运行时所在的对象。
该方法赋值给另一个对象，就会改变`this`的指向
- call
- apply
- bind

## 6.3 对象的继承

### 6.3.1 构造函数的缺点
同一个构造函数的多个实例之间，无法共享属性，从而造成了系统资源的浪费。
### 6.3.2 prototype属性的作用
原型对象的所有属性和方法，都能被实例对象共享。


原型对象的作用，就是定义所有实例对象共享的属性和方法。
### 6.3.3 原型链
JavaScript规定，所有对象都有自己的原型对象。一方面，任何一个对象都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所有它也有自己的原型。因此，就形成‘原型链’。


所有对象都有继承了Object.prototype的属性，


`Object.prototype`的原型是null

### 6.3.4 constructor属性

`prototype`对象有一个`constructor`属性，默认指向`prototype`对象所在的构造函数

### 6.3.5 instanceof运算符
`instanceof`运算符，表示对象是否为某个构造函数的实例。本质是检测右边构建函数的原型对象，是否在左边对象的原型链上。

## 6.4. Object对象相关方法
### 6.4.1 Object.getPertotypeOf()
获取对象的原型
### 6.4.2 Object.setPertotypeOf()
设置对象的原型
### 6.4.3 Object.create()
该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例对象完全继承对象的属性。
### 6.4.4 Object.prototype.__proto__
返回该对象的原型。 即构造函数的`prototype`属性，该属性可读写。
### 6.4.5 Object.getOwnPropertyNames()
返回对象本身的所有属性的键名，不包含继承的属性键名。
### 6.4.6 Object.prototype.hasOwnProperty()
判断某个属性定义在对象自身，还是定义在原型链上。
### 6.4.7 in运算符和for...in循环
`in`，不区分自身的属性还是继承的属性
`for...in`可获得所有可遍历属性
### 6.4.8对象的拷贝
- 确保拷贝后的对象，与原对象具有同样的原型
- 确保拷贝后的对象，与原对象具有同样的实例属性
```JavaScript
function copyObject(obj) {
  var result = Object.create(obj.getPrototypeOf(onj))
  copyOwnPropertiesFrom(result, obj)
  return result
}

function copyOwnPropertiesFrom(target, source) {
  // copy对象的实例属性
  Object.getOwnPropertyNames(source)
    .forEach(function(propKey) {
      var value = Object.getOwnPropertyDescriptor(source, propKey)
      Object.defineProperty(target, propKey, value)
    })
  return value
}
```

# 7. 异步操作

## 7.1 概述
JavaScript只在一个线程上运行。

事件循环：只要同步任务执行完了，引擎就会去检查挂起来的异步任务，是不是可以进主线程，一旦异步任务重新进入主线程，就会执行回调函数。

## 7.2 Promise
`promise`得回调函数不是正常的异步任务，而是微任务。它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮时间循环。

# 8. DOM
## 8.1 DOM概述
### 8.1.1 DOM
DOM: JavaScript操作网页的接口，全称‘文档对象模型’。它的作用是将网页转为一个JavaScript对象，从而可以用脚本进行各种操作
### 8.1.2 节点
DOM的最小组成单位是节点。
- Document
- DOcumentType
- Element
- Attribute
- Text
- Comment
- DocmentFragment
# 9. 事件
# 10. 浏览器模型
## 10.1 浏览器模型概述
### 10.1.1 script元素
工作原理
- 浏览器一边下载html网页，一边开始解析。
- 解析过程中一旦发现`<script>`元素就停止解析，把网页渲染的控制权交给JavaScript引擎
- 如果`<script>`元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码
- JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页

### 10.1.2 浏览器的组成
渲染引擎和JavaScript解释器

#### 10.1.2.1 渲染引擎
Webkit、Blink


渲染引擎处理网页，通常分成4个阶段
- 1. 解析代码：HTML代码解析为DOM，CSS代码解析为CSSOM
- 2. 对象合成：将DOM和CSSOM合成一颗渲染树
- 3. 布局：计算出渲染树的布局
- 4. 绘制：将渲染树绘制到屏幕

#### 10.1.2.2 重流和重绘
布局流： 渲染树转换成网页布局

绘制： 布局显示到页面的整个过程。

页面生成后，脚本操作和样式表操作都会触发重流和重绘。
比如：改变元素的布局，会导致重流和重绘。改变元素颜色，只会导致重绘制。

一些优化技巧：
- 读取DOM或者写入DOM，尽量写在一起，不要混杂。不要读取一个DOM节点，然后立刻写入，接着再读取一个DOM节点
- 缓存DOM信息
- 不要一项一项地改变样式，而是使用 CSS class 一次性改变样式
- 动画使用absolute定位或fixed定位，这样可以减少对其他元素的影响
- 使用window.requestAnimationFrame()，因为它可以把代码推迟到下一次重流时执行，而不是立即要求页面重流
- 只在必要时才显示隐藏的元素
- 使用虚拟 DOM（virtual DOM）库

## 10.2 window对象
