### 模块化开发
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
- `import * as md from './module.js'` 导出所有
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