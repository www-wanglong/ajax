# 一、Vue源码解析
## 1.
## 2. Vue的不同版本
### 2.1 术语
- 完整版：同时包含编译器和运行时的版本
- 编译器：用来将模板字符串编译成为JavaScript渲染函数的代码，体积大、效率低
- 运行时：用来创建Vue实例、渲染并处理虚拟DOM等的代码，体积小、效率高
## 3. 源码
### 3.1 源码记录
- el不能是body或者html标签
- 如果没有render，把template转换成render函数
- 如果有render方法，直接调用mount挂载DOM
### 3.1 四个导出Vue的模块
- src/platforms/web/entry-runtime-with-complier.js
  - web平台相关的入口
  - 重写了平台相关的$mount()方法
  - 注册了Vue.compile()方法，传递一个HTML字符串返回render函数
- src/platforms/web/runtime/index.js
  - web平台相关的入口
  - 注册和平台相关的全局指令：v-model、v-sho
  - 注册和平台相关的全局组件：v-transition、v-transition-group
  - 全局方法
    - __patch__：把虚拟DOM转换成真实DOM
    - $mount: 挂载方法
- src/core/index.js
  - 于平台无关
  - 设置Vue的静态方法，initGlobalAPI(Vue)
- src/core/instance/index.js
  - 于平台无关
  - 定义了构造函数，调用了this._init(options)方法
  - 给Vue中混入了常用的实例成员
  ### 3.2 vue首次渲染的过程
  - Vue初始化，实例成员，静态成员
  - `new Vue()`
  - `this._init()`
  - `this.$mount()`

## 4. 数据响应式原理
### 4.1 问题
- `vm.msg = { count: 0 }`，重新给属性赋值，是否是响应式的？
- `vm.arr[0] = 4`, 跟日数组元素赋值，视图是否会更新
- `vm.arr.length = 0`,` 修改数组的length，视图是否会更新
- `vm.arr.push(4)`，视图是否会更新
### 4.2 响应式处理入口
-
### 4.3 Watcher类
- Watcher分为三种，Computed Watcher、用户Watcher（侦听器）、渲染Watcher
### 4.3 响应式处理过程
- init(initState -> initData() -> observe(转化data为响应式))
- observe(value)
  - 判断value是否是对象，如果不是直接返回
  - 判断value是否有__ob__，如果有直接返回
  - 如果没有，创建observer对象，返回observer对象
- Observe
  - 给value对象定义不可枚举的__ob__属性，记录当前的observer对象
  - 数组的响应式处理，遍历数组中的每一个成员
  - 对象的响应式处理，调用walk方法（遍历对象的所有属性）
- defineReactive
  - 为每个属性创建dep对象，收集依赖
  -如果当前属性的值是对象，调用observe
  - 定义getter（收集依赖、返回属性的值）
  - 定义setter（收集依赖、返回属性的值）
- 收集依赖
  - 在watcher对象的get方法中调用pushTarget记录Dep.target属性
  - 访问data中的成员的时候收集依赖，defineReactive的getter中收集依赖
  - 把属性对应的watcher对象添加到dep的subs数组中
  - 给childOb收集依赖，目的是子对象添加和删除依赖时发送通知
- Wacher
  - dep.notify()在调用watcher对象的update()方法
  - queueWatcher()判断watcher是否处理，如果没有的话添加到queue队列中，并调用flushSchedulerQueue()

# 二、虚拟DOM
## 1. 为什么要使用虚拟DOM
### 1.1 虚拟DOM不一定可以提高性能
- 首次渲染的时候会增加开销
- 复杂试图情况下提升渲染性能
## 2. h函数
vm.$createElement(tag, data, children)
- tag：标签名称或者组件对象
- data:描述tag,可以设置DOM的属性或者标签的属性
- children:tag中文本内容或者子节点
返回：VNode
## 3. 虚拟DOM创建过程

## 4. key的作用
减少dom操作