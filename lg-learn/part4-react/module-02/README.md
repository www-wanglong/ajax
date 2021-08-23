# 一、Redux
## 1. Redux核心
### 1.1 Redux介绍
JavaScript状态容器，提供可预测化的状态管理
### 1.3 Redux核心概念及工作流程
store: 存储状态容器，JavaScript对象

actions：对象，描述对状态进行怎样的操作

reducers：函数，操作状态并返回新的状态
### 1.4 Redux核心　API
```JavaScript
// 创建Store状态容器
const store = Redux.create(reducer)
// 创建用于处理状态的reducer函数
function reducer(state = initialState, action) {}
// 获取状态
store.getState()
// 订阅状态
store.subscribe(function () {})
// 触发action
store.dispatch({ type: '...' })
```
## 2. React + Redux
### 2.1 React中不实用Redux遇到的问题
在react中组件通信的数据流是单向的，顶层组件可以通过props属性向下层组件传递数据，而下层组件不能向上组件传递数据，要实现下层组件修改数据，需要上层组件传递修改数据的方法到下层组件。当项目越来越大的时候，组件之间传递数据变的越来越困难。
### 2.2 在React项目加入Redux的好处
使用store管理数据，由于store独立与组件，使得数据管理独立与组件，解决了数据与组件之间传递数据困难的问题
### 2.3 下载
`npm redux react-redux`
### 2.4 Redux工作流程
1. 组件通过dispatch方法触发action
2. Store接受Action并将Action分发给Reducer
3. Reducer根据Action类型返回

## 3. Redux中间件
### 3.1 什么是Redux中间件
中间件允许我们扩展redux程序
### 3.3 开发redux中间件
```JavaScript
export default store => next => action => {}
```
## 4. Redux常用中间件
### 4.1 redux-thunk
允许在redux的工作流中添加异步操作