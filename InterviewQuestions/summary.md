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
