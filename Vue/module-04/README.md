# 一、搭建SSR

https://ssr.vuejs.org/zh/

# 二、Gridsome

https://gridsome.org/


一个免费、开源、基于Vue.js技术栈的静态网站生成器

## 1.静态网页
## 1.1 什么是静态网页生成器

- 预渲染
## 1.2 静态网站的好处
- 省钱
- 快速
- 安全
## 1.3 常见的静态网站生成器

## 1.4 JAMStack
- 这类静态网站生成器
- JAMs是JavaScript、API、Markup的首字母组合

## 1.5 静态应用使用情况
- 不适合有大量理由的应用
- 不适合有大量动态内容的应用


# 三、封装Vue.js组件库
## 1. 处理组件的边界
### 1.1 $root
小型应用中可以在vue跟实例里存储共享数据，组件中可以通过$root访问根实例

### 1.2 $parent
获取父组件
### 1.3 $chidlren
获取所有子组件

获取单个组件不方便，可以使用$ref
### 1.4 $ref
- 如果用在普通的HTML标签获取普通的DOM对象
- 如果用在组件上获取单个组件对象
mounted生命周期后才能使用$ref

### 1.5 provide & inject
子组件中获取父组件的成员
> 注入进来的值不是响应式的；组件的耦合变高

### 1.6 #attrs & $listeners
- $attrs:把父组件中非prop属性绑定到内部组件
> 绑定父组件传过来的属性：`v-bind="$attrs"`；

> 处理父组件传过来的事件：`$emit('', $event)`
- $listeners:把父组件中的DOM对象的原生事件绑定到内部组件
> 使用`v-no="$listeners"`

## 2. 快速原型开发
### 2.1 开始
安装 `npm install -g @vue/cli-service-global`

使用`vue serve`快速查看组件的运行效果
