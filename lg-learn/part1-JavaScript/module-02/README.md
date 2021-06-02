## ES新特性
### ECMAScript概述
- ECMAScript通常看作JavaScript的标准化规范
- 实际上JavaScript是ECMAScript（只是提供了基本的语法）的扩展语言
- web环境的JavaScript = ECMAScript + BOM + DOM
- node环境的JavaScript = ECMAScript + node本身提供的api
### ES2015let和块级用域
let声明不会提升
### Const
常量 不可修改内存指向地址
### 数组的解构
[]
`const [,,w] = [100, 300, 900]`
### 对象的解构
{}
### 字符串模板
``
带标签的模板字符串
### 字符串扩展方法
startWith()
includes()
### 参数默认值
### 剩余参数
...args
### 扩展运算符
...
### 箭头函数
不会改变this指向; 箭头函数外面的this是什么，里面就是什么
### 对象字面量的增强
计算属性名
### 对象的方法
+ Object.assign() 浅copy
+ Object.is 同值比较
### Proxy
监视对象的读写过程
### Proxy和defineProperty
+ Proxy可以监听到删除等等
+ 数组监视 重写数组方法
+ Proxy是以非侵入的方式监管对象的读写
### Reflect - 内部封装了对对象的底层操作
### Promise
### 类
class
### static - 静态方法
### 类的继承
extends
### Set数据结构 - 集合
内部的成员不允许重复
Array.from() es6从一个类似数组或可迭代对象创建一个新的数组
```
const arr = [1, 3, 4]
const result = Array.from(new Set(arr))
```
### Map数据结构 - 对象
键可以使用任意类型(之前对象的键会被转化成字符串)
### Symbol
表示一个独一无二的值
`const name = Symbol()`
`for...in`、`Object.keys()`、`JSON.stringify()`无法获取Symbol类型的键值，使用`Object.getOwnPropertySymbols(obj)`可获取到
### for...of
- 遍历所有数据结构的统一方式
- 实现Iterable接口才可以遍历
### 迭代器模式
### 生成器函数
减少回调函数嵌套，会自动返回生成器对象，调用next方法就执行，遇到yield会暂停执行。

## TypeScript
### 强类型与弱类型
强类型： 不允许随意的隐式类型转换

弱类型：相反
### 静态类型与动态类型
静态类型：一个变量声明时它的类型就是明确的，声明过后不允许修改

动态类型： 变量没有类型，变量中存放的值有类型
### 强类型语言的优势
- 错误更早暴露
- 代码更智能，编码更准确
- 重构更牢靠
- 减少不必要的类型判断
### Flow概述
JavaScript的类型检查器

``

