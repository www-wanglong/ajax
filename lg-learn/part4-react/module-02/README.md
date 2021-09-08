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
### 4.2 redux-saga
redux-sage可以将异步操作从Action Creator文件中抽离出来，放在一个单独的文件中
### 4.3 redux-actions
redux流程中大量的样板代码读写很痛苦，使用redux-actions可以简化Action和Reducer的处理。
## 5. Redux toolkit
对redux进行的二次封装，用于高效Redux开发。
`yarn add @reduxjs/toolkit@1.6.0 react-redux@7.2.4`
### 5.1 创建状态切片
### 5.5 Action预处理
可以通过prepare方法对
## 6. 实体适配器
将状态放入实体适配器，实体适配器提供状态的各种方法，简化操作。

# 二 、Mobx 6
## 1.概述
在Mobx6中不推荐使用装饰器语法，因为它不是ES标准，并且标准化过程要花费很长时间
## 下载
`yarn add mobx@6.3.1 mobx-react-lite@3.2.0`

# 三、Mobx 5
## 1. Mobx介绍
### 1.1 Mobx介绍
简单，可扩展的状态管理库

React和Mobx是一对强力组合，React负责渲染应用的状态，Mobx负责管理应用状态供React使用

## 2. 开发
### 2.1 启用装饰器语法支持
1. `npm install react-app-rewired @babel/plugin-proposal-decorators customize-cra`

2. 在项目根目录下创建 config-overrides.js
```JavaScript
  const { override, addDecoratorsLegacy } = require("customize-cra");

  module.exports = override(addDecoratorsLegacy());
```

3. package.json
```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
  }
```
解决vscode编辑器关于装饰器语法的警告

"javascript.implicitProjectConfig.experimentalDecorators": true


## 3.Mobx + React
### 3.1 下载Mobx
`npm install mobx mobx-react`
### 3.2 Mobx工作流程
action -> state -> views

## 5.Mobx数据检测
### 5.2 autorun方法
