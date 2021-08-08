# Vue
## Vue基础知识
### 差值表达式
### 指令
### 计算属性和侦听器
### Class和String绑定
### 条件渲染/列表渲染
### 表单输入绑定
## Vue语法和概念
### 组件
### 插槽
### 插件
### 混入mixin
### 深入响应式原理
### 不同构建版本的Vue
# Vue-Router实现原理
## 1.使用步骤
### 1.1. 注册路由插件
```JavaScript
Vue.use(VueRouter)

//路由规则
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/photo',
    name: 'Photo',
    component: () => import(/* webpackChunkName: "photo" */ '../views/Photo.vue')
  },
]
```
### 1.2 创建router对象
```JavaScript
const router = new VueRouter({
  routes
})
```

### 1.3 注册router对象
```JavaScript
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

### 1.4 创建路由组件的占位符
```html
<router-view />
```
### 1.5 创建链接
```html
<div id="nav">
  <!-- 5. 创建链接 -->
  <router-link to="/">Index</router-link>
  <router-link to="/blog">Blog</router-link>
  <router-link to="/photo">Photo</router-link>
</div>
```

## 2.嵌套路由
children
## 3.嵌套路由
push、repalce、go方法
## 4.Hash和Hsitory模式区别
### 4.1 Hash模式
- URL中#后面的内容作为路径地址
- 监听hashchange事件
- 根据当前路由地址找到对应组件重新渲染
### 4.2 History模式
- 通过history.pushState()方法改变地址拦
- 监听popstate事件
- 根据当前路由地址找到对应组件重新渲染
## History模式的使用
- 服务器端处理
- nginx配置
