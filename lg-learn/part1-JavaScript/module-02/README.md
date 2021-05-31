## ES新特性与TypeScript、JS性能优化
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


