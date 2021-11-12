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


