## 学习笔记
https://www.javascriptc.com/books/javascript-tutorial/
## 数据类型
### 数值 number
JavaScript内部所有的数字都是以64位浮点数形式存储，整数也是如此.
NaN不是一个独立的数据类型，而是一个特殊的数值，它的数据类型依然属于Number
#### parseInt()
默认转化为10进制
#### parseFloat()
#### isNaN()
#### isFinite()
### 字符串 string
### null、 undefined、布尔值
#### null和undefined区别
`null`是表示一个'空对象'，转为数值时为0； `undefined`是一个表示'此处无定义'的原始值，转为数值时为NaN
### 对象 object
#### 键名
键名是数值，会被自动转为字符串
#### 对象的引用
如果不同的变量名指向同一个对象， 那么他们都是这个对象的引用，也就是说指向同一个内存地址。
#### Object.keys()
#### delete命令
返回true，并不代表属性被删除
#### in运算符
不能识别哪些属性是对象自身的，还是继承的。可以使用`hasOwnProperty`
#### for...in循环
- 它遍历的是所有可遍历（enumerable）的属性
- 还会遍历继承的属性
#### with语句
### symbol ->es6
### 函数
一段可反复调用的代码块

