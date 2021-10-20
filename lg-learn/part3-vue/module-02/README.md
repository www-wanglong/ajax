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