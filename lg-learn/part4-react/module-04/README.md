# 一、 React SSR介绍
## 1. 什么是服务器渲染
服务器端返回HTML、DATA和HTML在服务器端渲染
### 1.1 客户端渲染问题（CSR）
- 首屏等待时间长，用户体验差
- 页面结构空，不利于SEO
### 1.2
为元素添加点击事件没有生效，因为没有javascript代码。

在客户端代码执行的时候再次执行react，再对组件进行二次渲染。
### 1.3 客户端二次渲染hydrate

使用hydrate方法对组件进行渲染，为组件元素附加事件。

hydrate方法在实现渲染的时候，会复用原本已经存在的DOM节点，减少重新生成节点以及删除原本DOM节点定位开销。

通过react-dom导入hydrate。


## 2. 路由支持
服务器、客户端
## 3、 redux支持
### 3.1 实现思路分析
- 在实现了React SS

# 二、Next.js
## 1. 介绍
Next.js是React服务端渲染应用框架。用于构建SEO有好的SPA应用。
- 1. 支持两种预渲染方式，静态生成和服务器端渲染
- 2. 基于页面的路由系统。页面零配置。
## 2. 创建项目
创建 `npm init next-app next-guide`

运行`npm run dev`

## 3. 基于页面的路由
### 3.1 页面跳转
- Link组件默认使用JavaScript进行页面跳转
- 如果浏览器中JavaScript被禁用。则使用链接跳转。
- Link组件中不用该添加除href属性以为的属性
- Link组件通过预取功能自动化应用程序以获取最佳性能
```JavaScript
 <Link href="/list"><a>jump to list page</a></Link>
```
### 3.2 静态资源
应用程序根目录中的public文件夹用于提供静态资源。
### 3.3 元数据
修改页面元数据
```JavaScript

import Head from 'next/head';

  <Head>
    <title>list page</title>
  </Head>
```

### 3.4 CSS
#### 3.4.1 内置 styled-jsx
```JavaScript
<style jsx>{`
  .demo {
    color: red;
  }
`}</style>
```

#### 3.4.2 css模块
```JavaScript
// index.module.css
.demo {
  color: green;
}
// index.js
import styles from './list.module.css'

<div className={styles.demo}>list</div>
```

#### 3.4.3 全局样式文件

### 3.5预渲染

#### 3.5.1 预渲染概念
- 指数据和HTML的拼接在服务器端提前完成
- 预渲染可以使SEO更友好
- 预渲染
#### 3.5.2 预渲染的两种形式
静态生成和服务器端渲染

#### 3.5.3 无数据和有数据的静态生成
静态生成 `getStaticProps()`;

`getStaticProps`方法的作用是获取组件静态生成需要的

`getServerSideProps` 服务器端渲染

#### 3.5.4 基于动态路由的静态生成
基于参数就生成多少HTML页面；


在构建应用时，先获取用户可以访问的所有路由参数，再根据路由参数获取具体数据，然后根据数据生成静态的HTML。

- 1. 创建基于动态路由的页面组件文件,命名时在文件 []
- 2. 导出异步函数getStaticPaths， 用于获取所有用户可以访问的路由参数
```JavaScript
```
- 3. 导出异步函数getStaticProps,用于根据路由参数获取具体的数据
```JavaScript
```

### 3.6 API Routes

#### 3.6.1 什么是API Routes
客户端向服务器发送请求获取数据的接口。


Next.js应用允许React开发者编写服务器代码创建数据接口。

#### 3.6.2 实现API Routes

# 四、Gatsby
## 4.1 介绍
Gatsby是一个静态站点生成器
## 4.2 创建Gatsby项目
- 创建：`gatsby new project-name https://github.com/gatsbyjs/gatsby-starter-hello-world`
- 启动：`gatsby develop 或 npm start`
- 访问：`localhost:8000`