## 模块化开发
### CommonJS规范
- 一个文件就是一个规范
- 每个模块都有单独的作用域
- 通过module.export导出成员
- 通过require函数载入模块
### CommonJS是以同步模式加载模块
### ES Modules
#### ES Modules基本特性
- 自动采用严格模式，忽略'use strict'
- 每个ESM模块都是单独的是有作用域
- ESM是通过CORS去请求外部JS模块的
- ESM的Script标签会延迟执行脚本
#### ES Modules 导出
- export 导出的并不是字面量对象, 导入的也不是结构
- 导出的不是值，导出的是值的存放地址
- 导入的成员是只读的
#### ES Modules 导入
- `import .js、`./不能省略
- `import './module.js'` 只需要执行模块
- `import * as md from './module.js'` 导出所有
- 动态导入通过 `import('./module.js').then( function(module) { console.log(module) })`
- 导出默认的和非默认的 `import { name, default as title } from './module.js'` or `import title, { name } from './module.js'`
#### ES Modules浏览器环境Polyfill
- 通过babela转换
- IE浏览器不支持ES Modules 通过引入 [es-module-loader](https://unpkg.com/browse/browser-es-module-loader@0.4.1/dist/)的原js
- nomodule （不支持 es module的浏览器）
#### ES Modules in Node.
- `node --experimental-modles index.mjs`
#### ES Modules in Node.js与CommonJs交互
- 在ES Modules中可以导入CommonJS模块(**只能导出默认成员**)
- CommonJS中不能导入ES Modules模块
- **注意import不是解构道处对象，只是固定的用法**
#### ES Modules in Node.js与CommonJS模块的差异
- ES Modules中没有CommonJS中的模块去全局成员
#### Node.js进一步支持ES Modules
- 在package.json文件中配置{"type": "module"}， commonJS需要给为.csj扩展名才可运行
#### Babel兼容方案
@babel/perset-env插件

## Webpack打包
整个前端项目模块化

- 安装`yarn add webpack webpack-cli --dev`
- webpack只是打包工具，加载器可以用来转换代码
### Webpack模块加载方式
- ES Modules标准的import声明
- CommonJS标准的require函数
- 遵循AMD标准的 define函数和require函数
- css的@import和import
- html代码中图片标签的src属性
### Webpack核心工作原理
loader机制加载资源文件
### 开发一个loader
- loader负责资源文件从输入到输出的转换
- 对于同一个资源可以依次使用多个loader（工作管道，use从后往前）
### webpack插件
增强自动化能力
- Loader专注实现资源模块加载
- Plugin解决其他的自动化工作
### 常用插件
- 自动清除输出目录 `clean-webpack-plugin`
- 自动输出html文件 `html-webpack-plugin`
- copy文件 `copy-webpack-plugin`
### 插件的实现
通过在生命周期的钩子中挂载函数实现扩展
### Source Map
逆向找到源代码，便于开发人员调试
### Webpack HMR
应用运行过程中实时替换某个模块
### Tree Shaking
生产环境自动启用 --mode production


`usedExports: true`
### sideEffects
`sideEffects: true ` 一般用于npm包标记是否有副作用
### Code Splitting
代码分包
- 多入口打包
### 动态导入
应用运行过程中，需要用到某个模块时，再加载这个模块

使用ES Module的导入，在使用的地方import，webpack内部会自动处理
### mini-css-extract-plugin
打包的样式会使用link形式


## Rollup
### 概述
提供一个充分利用ESM各项特性的高效打包器
### 用插件
Rollup支持使用插件扩展（唯一的途径）
### 加载npm模块
`rollup-plugin-node-resolve`使用这个插件，可在代码中使用模块名称导入模块
### 加载CommonJs模块
`rollup-plugin-commonjs`
### 代码拆分
使用AMD的格式
### 多入口打包
input使用对象
### 优点
- 输出结果更加扁平化
- 自动移除未引用的代码
- 打包结果依然完全可读
### 缺点
- 加载非ESM的第三方模块比较复杂
- 模块最终都被打包到了一个函数中
- 浏览器环境中，代码拆分功能依赖AMD
使用于开发类库/框架

## Parcel
零配置前端打包器

## 规范化标准
代码、文档、甚至提交日志。
### ESLint
### Perttier
`npm install perttier -D`


`npx prettier . --write`

### Git Hooks(git 钩子)
`.git`
### Husky
`npm install husky`

package.json
```JavaScript
"husky": {
  "hooks": {
    "pre-commit": "npm run test"
  }
}

"script": {
  "test": "eslint ./index.js"
}
```

格式化代码
`npm install lint-staged`
```JavaScript
"lint-staged": {
  "*.js": [
    "eslint",
    "git add"
  ]
}

"script": {
  "test": "eslint ./index.js",
  "pre-commit": "lint-staged"
}
```
## hook