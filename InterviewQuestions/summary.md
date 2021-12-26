# 前端面试题
> https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md

## 1. 写React/Vue项目时为什么要在列表组件中写可以，其作用是什么？
> key是给每一个vnode的唯一id,可以依靠key,`更准确`、`更快`的拿到oldVnode中对应的vnode节点。
### 1.1 更准确
因为带了key就不是就地复用，在sameNode函数`a.key ==== b.key`,可以避免重复的情况
### 1.2 更快
利用key的唯一性生成map对象来获取对应的节点。
## 2.['1', '2', '3'].map(parseInt) what & why ?
输出：[1, NaN, NaN]

相当于['1', '2', '3'].map((number, index) => parseInt(umber, index))


parseInt第一个参数是数组，第二个参数要转换的进制

## 3. 什么是防抖？什么是节流？有什么区别？如何实现
### 3.1 防抖
> 对于高频的操作，只识别一次点击
- 思路：每次触发事件时都取消之前的延时调用方法
```
 /**  防抖函数 */
 function debounce (fn, wait) {
   let timer = null
   return function () {
     clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
   }
 }
```
### 3.2 节流
> 高频事件触发，可以设置频率。
- 思路：每次触发事件时都判断是否有等待执行的延时函数
```
/** 节流函数 */
function throttle (fn, wail) {
  le canRun = true;
  return function () {
    if (!canRun) {
       return;
     }
     setTimeout(() => {
       fn.apply(this, arguments)
     }, 500)
  }
}
```

## 4. 介绍下Set、Map、WeakSet和WeakMap的区别
### 4.1 Set
- 成员不能重复
- 只有健值，没有健名，类似数组
- 可以遍历，有add,delete,has方法
### 4.2 WeakSet
- 允许将对象存储在一个集合中
- 成员都是弱应用，随时可以消失。可以用来保存DOM节点，不容易造成内存泄漏
- 不能遍历，有add,delete,has
### 4.3 Map
- 健值对象的集合
- 可以遍历，有很多方法，可以跟各种数据格式转换
### 4.4 WeakMap
- 只接受对象的健名
- 不能遍历，方法有get,set,has,delete


## 5.HTML5新特性、语义化
### HTML5新特性
- 新的语义元素
- 新的表单控件，比如：数字、日期、日历
- 强大的图像支持（<svg>和<canvas>）
- 强大的多媒体支持（<video>和<audio>）
- 强大的新的API，比如用本地存储取代cookie
### 语义化
- 语义化标签：header nav main article section aside footer

语义化意味着顾名思义，HTML5的语义化指的是合理正确的使用语义化的标签来创建页面结构，从标签上可以直观的知道这个标签的作用，而不是滥用div

语义化的有点：
- 代码结构清晰，易于阅读，利于开发和维护
- 方便其他设备解析根据语义渲染网页
- 有利于搜索引擎优化（SEO）

## 6. css3新特性
### 6.1 新的选择器
- nth-child(n)
- first-child
### 6.2 文本
- text-overflow：文本溢出时
- text-wrap：规定文本换行的规则
### 6.3 边框
- border-raduis
- border-image
### 6.4 背景
- rgba
- background-size: cover/contain
### 6.5 渐变
- linear-gradient
### 6.6 过渡
transition
### 6.7 动画、旋转
- animation
- transform
- translate
- scale
- rotate
- skew
### 6.8 flex布局

## 7. 浏览器渲染机制、重绘、重排
### 7.1 网页生成的过程
- `HTML`被`HTML`解析器解析成`DOM`树
- `css`则被`css`解析器解析成`CSSOM`树
- 结合`DOM`树和`CSSOM`树，生成一个渲染树（`Render Tree`）
- 布局流：生成布局（flow）, 即将所有渲染树的所节点进平面合成
- 绘制：将布局绘制在屏幕
### 7.2 重排
当DOM的变化影响了元素的几何信息（DOM对象的位置和尺寸大小），浏览器需要重新计算元素的几何属性，将其安放在界面的正确位置，这个过程叫做重排。

触发条件：
1. 添加回删除可见的DOM元素
2. 元素的尺寸改变---- 边距、填充、边框、宽度和高度
### 7.3 重绘

当元素的外观发生改变，但没有改变布局，重新把元素外观绘制出来封过程，叫做重绘。

触发：
1. 改变元素的`color`、`background`、`box-shadow`属性

### 7.4 一些优化技巧
- 读取DOM或者写入DOM，尽量写在一起，不要混杂。
- 缓存DOM信息
- 样式修改集中处理
- 动画使用absolute或者fix定位，减少对其他元素的影响
- 使用window.requestAnimationFrame()，因为它可以把代码推迟到下一次重流时执行，而不是立即要求页面重流
- 使用虚拟 DOM（virtual DOM）库


`transform`不会重绘、不回流是因为`transform`属性合成属性，对合成属性进行`transition/amimate`动画时，将会创建一个合成层。这使得动画元素在一个独立的层中进行渲染。当元素的内容没有发生改变。就没有必要进行绘制。浏览器会重新复合来创建动画帧。

## 8.CSS盒子模型
所有的`HTMl`元素都可以看作盒子，在CSS

## 9. 什么是BFC？BFC的布局规则是什么？如何创建BFC？BFC应用
`BFC`是 `Block Formatting Context`的缩写，即块格式上下文。

`BFC`是CSS布局的一个概念，是一个环境，里面的元素不会影响外面的元素。

## 10.闭包

定义在一个函数内部的函数。它的最大特点是可以记住诞生的环境。

作用：
- 可以读取函数内部的变量
- 让这些变量始终保存在内存中

缺点：
- 会导致函数的变量一直保存在内存中，过多必包可能会导致内存泄露

## 11. 原型、原型链
原型：对象中固有的`__proto__`属性。该属性指向对象的prototype属性

原型链：JavaScript规定，所有对象都有自己的原型对象。一方面，任何一个对象都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。


## 12. this、new关键字

new命令的原理：
- 1. 创建一个新的对象
- 2. 将这个对象的原型设置为构造函数的`prototype`属性
- 3. 当函数的`this`关键字指向这个对象，执行构造函数内部的代码
- 4. 返回这个对象

## 13. 作用域、作用域链、变量提升
函数内部自定义的变量，外部无法读取，成为‘局部变量’。局部作用域内部也会存在‘变量提升’的现象。

## 14. eventLoop

JavaScript是单线程运行，事实上，JavaScript引擎有多个线程，单个脚本只能在一个线程上运行。

主线程执行完所有的同步任务，就回去任务队列里面看有没有异步任务。一旦满足条件，那么异步任务就重新进入主线程开始执行，这时就变成同步任务。


 同步任务执行完了，JavaScript引擎就回去检查那写挂起来的一步任务，是不是可以进入主线程，这种不停检查的机制称为事件循环。

微任务代表：Promise

宏任务代表：setTimeout、setInterval


## 15. ES6
- 1. 新增symbol类型
- 2. let/const具有块级作用域，不存在变量提升
- 3. 变量的解析赋值，剩余运算符
- 4. 模板字符串
- 5. 扩展运算符
- 6. 箭头函数
- 7. Set、Map数据结构
- 8. Proxy代理
- 9. Promise
- 10. async
- 11. Class
- 12. Module语法（import/export）

## 16. 你对虚拟dom和diff算法的历史，实现render函数
`虚拟DOM`本质上是`JavaScript`对象，是对真实DOM的抽象表现。记录新树和旧树的差异， 最后把差异更新到真的dom中的`render`函数

render函数:
- 1. 跟据tagName生成父标签。读取props,设置属性，如果有content，设置innerHtml或innerText