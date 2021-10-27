# 一、Vuex 状态管理
## 1. 组件内状态管理流程
- state: 数据源
- view： 以声明方式将state映射到视图
- action
view -> action -> state -> view
## 2. 组件间通信方式
### 2.1 父组件给子组件传值
- 子组件中通过props接收数据
- 父组件中给子组件通过相应属性传值
### 2.2 子组件给父组件传值
- vm.$emit
- vm.v-on
### 2.3 不相关组件传值
使用同一个vue实例

## 3. Vuex
### 3.1 什么是Vuex
- Vuex是专门为Vue.js设计的状态管理库
### 3.2 Vuex核心概念
#### 3.2.1 Store
#### 3.2.2 - State
- Getter
- Mutation
- Action
- Module

![image](./vuex.png)
