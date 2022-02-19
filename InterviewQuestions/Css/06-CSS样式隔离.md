# 1. CSS发展
- 手写CSS
- 预处理器Sass/Less
- 使用后处理器PostCSS
- CSS modules
- css in js

# 2. CSS模块化
## 2.1 CSS模块化定义
- 为class命名而烦恼
- 使用同样class名
- 层级结构不清晰
- 难以复用
- common.css内容庞大

## 2.2 CSS模块化的实现方式
### BEM命名规范
块(block)-元素(element)-修饰符(modifier)
### CSS Modules
css每一个类名都是一个对象的属性。

css Modules在打包的时候会自动将类型转换成hash值，避免了css类名冲突

1. 定义css文件
```JavaScript
.className {
  color: green;
}
// 全局样式
:global(.className) {
  color: red;
}

/* 样式复用 */
.otherClassName {
  composes: className;
  color: yellow;
}

.otherClassName {
  composes: className from "./style.css";
}

```

2.  js模块中导入css文件

3. 配置css-loader打包

```JavaScript
// webpack.config.js
module.exports = {
  module: {
    rules: {
      {
        test: /\.css$/,
        use: {
          loader: 'loader',
          options: {
            // 自定义hash名称
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      }
    }
  }
}
```

4. 最终打包出来的css类名就是由一长串hash值生成的
```Css
._2DHwuiHWMnKTOYG45T0x34 {
  color: red;
}

._10B-buq6_BEOTOl9urIjf8 {
  background-color: blue;
}
```
# 3. CSS In Js(emotion)

使用js语言写css，完全不需要单独的css文件，所有的css代码全部在组件内部，实现css模块化。

## 出现原因
- 以前都是以**页面**为单位开发，
现在以**组件**为单位（css代码只在组件内生效）。
- 解决组件可移植性
- css缺乏动态功能

## 优点
- CSS拥有独立的作用域，阻止CSS代码泄露到组件外部，防止样式冲突
- 让组件更具有可移植性，实现开箱即用，轻松常见松耦合的应用程序
- 让样式具有动态功能

## 缺点
- 增加额外的复杂性（学习成本）
- 自动生成的选择器大大降低了代码的可读性






