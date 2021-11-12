<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [1. React基础知识](#markdown-header-1-react%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86)
    - [1.1. 介绍](#markdown-header-11-%E4%BB%8B%E7%BB%8D)
    - [1.2. JSX语法](#markdown-header-12-jsx%E8%AF%AD%E6%B3%95)
        - [1.2.1. 在JSX中使用表达式](#markdown-header-121-%E5%9C%A8jsx%E4%B8%AD%E4%BD%BF%E7%94%A8%E8%A1%A8%E8%BE%BE%E5%BC%8F)
        - [1.2.2. 属性](#markdown-header-122-%E5%B1%9E%E6%80%A7)
        - [1.2.3. JSX单标记必须合并](#markdown-header-123-jsx%E5%8D%95%E6%A0%87%E8%AE%B0%E5%BF%85%E9%A1%BB%E5%90%88%E5%B9%B6)
        - [1.2.4. className](#markdown-header-124-classname)
        - [1.2.5. JSX自动展开数组](#markdown-header-125-jsx%E8%87%AA%E5%8A%A8%E5%B1%95%E5%BC%80%E6%95%B0%E7%BB%84)
        - [1.2.6. 三元运算符](#markdown-header-126-%E4%B8%89%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6)
        - [1.2.7. 循环](#markdown-header-127-%E5%BE%AA%E7%8E%AF)
        - [1.2.8. 事件](#markdown-header-128-%E4%BA%8B%E4%BB%B6)
        - [1.2.9. 样式](#markdown-header-129-%E6%A0%B7%E5%BC%8F)
            - [1.2.9.1. 行内样式](#markdown-header-1291-%E8%A1%8C%E5%86%85%E6%A0%B7%E5%BC%8F)
            - [1.2.9.2. 外链样式](#markdown-header-1292-%E5%A4%96%E9%93%BE%E6%A0%B7%E5%BC%8F)
            - [1.2.9.3. 全局样式](#markdown-header-1293-%E5%85%A8%E5%B1%80%E6%A0%B7%E5%BC%8F)
        - [1.2.10. ref属性](#markdown-header-1210-ref%E5%B1%9E%E6%80%A7)
            - [1.2.10.1. createRef](#markdown-header-12101-createref)
            - [1.2.10.2. 函数参数](#markdown-header-12102-%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0)
            - [1.2.10.3. ref字符串](#markdown-header-12103-ref%E5%AD%97%E7%AC%A6%E4%B8%B2)
            - [1.2.10.4. 获取组件实例](#markdown-header-12104-%E8%8E%B7%E5%8F%96%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B)
    - [1.3. 组件](#markdown-header-13-%E7%BB%84%E4%BB%B6)
        - [1.3.1. 什么是组件](#markdown-header-131-%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%84%E4%BB%B6)
        - [1.3.2. 创建组件](#markdown-header-132-%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6)
            - [1.3.2.1. 创建类组件](#markdown-header-1321-%E5%88%9B%E5%BB%BA%E7%B1%BB%E7%BB%84%E4%BB%B6)
            - [1.3.2.2. 创建函数组件](#markdown-header-1322-%E5%88%9B%E5%BB%BA%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6)
        - [1.3.3. 组件的props](#markdown-header-133-%E7%BB%84%E4%BB%B6%E7%9A%84props)
            - [1.3.3.1. props传递数据](#markdown-header-1331-props%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)
            - [1.3.3.2. 设置props默认值](#markdown-header-1332-%E8%AE%BE%E7%BD%AEprops%E9%BB%98%E8%AE%A4%E5%80%BC)
            - [1.3.3.3. 组件children](#markdown-header-1333-%E7%BB%84%E4%BB%B6children)
            - [1.3.3.4. 单向数据流](#markdown-header-1334-%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)
        - [1.3.4. 类组件状态state](#markdown-header-134-%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81state)
            - [1.3.4.1. 定义组件状态](#markdown-header-1341-%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81)
            - [1.3.4.2. 更改组件状态](#markdown-header-1342-%E6%9B%B4%E6%94%B9%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81)
            - [1.3.4.3. 双向数据绑定](#markdown-header-1343-%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A)
        - [1.3.5. 类组件的生命周期函数](#markdown-header-135-%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0)
            - [1.3.5.1. Mounting](#markdown-header-1351-mounting)
            - [1.3.5.2. Updating](#markdown-header-1352-updating)
        - [1.3.6. Unmount](#markdown-header-136-unmount)
        - [1.3.7. Context](#markdown-header-137-context)
    - [1.4. 表单](#markdown-header-14-%E8%A1%A8%E5%8D%95)
        - [1.4.1. 受控表单](#markdown-header-141-%E5%8F%97%E6%8E%A7%E8%A1%A8%E5%8D%95)
        - [1.4.2. 非受控表单](#markdown-header-142-%E9%9D%9E%E5%8F%97%E6%8E%A7%E8%A1%A8%E5%8D%95)
    - [1.5. 路由](#markdown-header-15-%E8%B7%AF%E7%94%B1)
        - [1.5.1. 路由基本使用](#markdown-header-151-%E8%B7%AF%E7%94%B1%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)
        - [1.5.2. 路由嵌套](#markdown-header-152-%E8%B7%AF%E7%94%B1%E5%B5%8C%E5%A5%97)
        - [1.5.3. 路由传参](#markdown-header-153-%E8%B7%AF%E7%94%B1%E4%BC%A0%E5%8F%82)
        - [1.5.4. 路由重定向](#markdown-header-154-%E8%B7%AF%E7%94%B1%E9%87%8D%E5%AE%9A%E5%90%91)
- [2. React Virtual DOM以及Diff算法](#markdown-header-2-react-virtual-dom%E4%BB%A5%E5%8F%8Adiff%E7%AE%97%E6%B3%95)
    - [2.1. JSX到底是什么](#markdown-header-21-jsx%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E4%B9%88)
    - [2.2. DOM操作问题](#markdown-header-22-dom%E6%93%8D%E4%BD%9C%E9%97%AE%E9%A2%98)
    - [2.3. 什么是Virtual DOM](#markdown-header-23-%E4%BB%80%E4%B9%88%E6%98%AFvirtual-dom)
    - [2.4. Virtual DOM如何提升效率](#markdown-header-24-virtual-dom%E5%A6%82%E4%BD%95%E6%8F%90%E5%8D%87%E6%95%88%E7%8E%87)
    - [2.5. 创建Virtual DOM](#markdown-header-25-%E5%88%9B%E5%BB%BAvirtual-dom)
    - [2.6. 渲染VIrtual DOM对象为DOM对象](#markdown-header-26-%E6%B8%B2%E6%9F%93virtual-dom%E5%AF%B9%E8%B1%A1%E4%B8%BAdom%E5%AF%B9%E8%B1%A1)
    - [2.7. 为元素节点添加属性](#markdown-header-27-%E4%B8%BA%E5%85%83%E7%B4%A0%E8%8A%82%E7%82%B9%E6%B7%BB%E5%8A%A0%E5%B1%9E%E6%80%A7)
    - [2.8. 渲染组件](#markdown-header-28-%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6)
        - [2.8.1. 函数组件](#markdown-header-281-%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6)
        - [2.8.2. 类组件](#markdown-header-282-%E7%B1%BB%E7%BB%84%E4%BB%B6)
    - [2.9. Virtual DOM对比](#markdown-header-29-virtual-dom%E5%AF%B9%E6%AF%94)
    - [2.10. ref 属性](#markdown-header-210-ref-%E5%B1%9E%E6%80%A7)
    - [2.11. key 属性](#markdown-header-211-key-%E5%B1%9E%E6%80%A7)
- [3. Fiber](#markdown-header-3-fiber)
    - [3.1. requireIdleCallback](#markdown-header-31-requireidlecallback)
        - [3.1.1. 核心API功能介绍](#markdown-header-311-%E6%A0%B8%E5%BF%83api%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D)
    - [3.2. 浏览器空余时间](#markdown-header-32-%E6%B5%8F%E8%A7%88%E5%99%A8%E7%A9%BA%E4%BD%99%E6%97%B6%E9%97%B4)
    - [3.3. Fiber](#markdown-header-33-fiber)
        - [3.3.1. 问题](#markdown-header-331-%E9%97%AE%E9%A2%98)
        - [3.3.2. 解决方案](#markdown-header-332-%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
        - [3.3.3. 实现思路](#markdown-header-333-%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
        - [3.3.4. Fiber对象](#markdown-header-334-fiber%E5%AF%B9%E8%B1%A1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 1. React基础知识
## 1.1. 介绍
React是一个用于构建用户界面的JavaScript库，它只负责应用的视图层，帮助开发人员构建快速且交互式的web应用程序。

React使用组件的方式构建用户界面。
## 1.2. JSX语法
在React中使用JSX语法描述用户界面，它是一种Javascript语法扩展。

在React代码执行之前，Babel会讲JSX语法转化为标准的JavsScript API。

JSX语法就是一种语法糖（React.createElement），让开发人员使用更加舒服的代码构建用户界面。
### 1.2.1. 在JSX中使用表达式
```JavaScript
const user = {
  firstName: 'long',
  lastName: 'wang'
}

function formatName (user) {
  return user.firstName + ' ' + user.lastName
}

const element = <h1>Hello,{fromartName(user)}</h1>
```
JSX本身也是一种表达式，将它赋值给变量，当作为参数传入，作为返回值都可以
```JavaScript
function getGreeting (user) {
  if (user) {
    return  <h1>Hello,{fromartName(user)}</h1>
  }
  return <h1>Hello, Stranger</h1>
}
```
### 1.2.2. 属性
如果属性值为字符串类型，需要加引号，属性名称推荐采用驼峰式命名
```JavaScript
const element = <div greeting="hello"></div>
```
如果属性值为JavaScript表达式，属性值外面大括号
```JavaScript
const element = <img  src={user.avatarUrl} />
```
### 1.2.3. JSX单标记必须合并
如果JSX是单标记，必须闭合，否则报错
```JavaScript
const element = <img  src={user.avatarUrl} />
```
### 1.2.4. className
为JSX标记添加类名需要使用className，而不是class
```JavaScript
const element = <img  src={user.avatarUrl} className="rounded" />
```
### 1.2.5. JSX自动展开数组
```JavaScript
const arr = [<p>he</p>,<p>xi</p>,<p>hei</p>]
const element = (<div>{arr}</div>)

// 解析后
// <div>
//   <p>he</p>
//   <p>xi</p>
//   <p>hei</p>
// </div>
```
### 1.2.6. 三元运算符
```javaScript
{ boolean ? <div>Hello React</div> : null }
{ boolean && <div>Hello React</div> }
```
### 1.2.7. 循环
```JavaScript
const persons = [
  {
    id: 1,
    name: '张三'
  },
  {
    id: 2,
    name: '李四'
  },
]
```
```JavaScript
<ul>
  { persons.map( person => <li key={person.id}>{person.name}</li> ) }
</ul>
```
### 1.2.8. 事件
```JavaScript
{/* 不第一个参数即事件对象 需要传递参数 */}
<button onClick={this.eventHandler}>button</button>

{/* 需要传递事件对象 */}
<button onClick={ e => this.eventHandler('arg', e) }>button</button>

{/* 最后一个参数即事件对象 不需要传递 */}
<button onClick={this.eventHandler.bind(null, 'arg')}>button</button>
```
改变函数内部this指向
```JavaScript
constructor() { //推荐使用
  this.eventHander = this.eventHandler.bind(this)
}

eventHandler() {
  <button onClick={this.eventHandler}>button</button>
}
```
### 1.2.9. 样式
#### 1.2.9.1. 行内样式
```JavaScript
class App extends Component {
  render() {
    const style = {width: 200, height: 200, backgroundColor: 'red'}
    return <div style={style}></div>
  }
}
```
#### 1.2.9.2. 外链样式
```JavaScript
//Button.js
import styles from './Button/module.css'
class Button extends Component {
  render() {
    return <button className={style.error}>err button</button>
  }
}
```
#### 1.2.9.3. 全局样式
```JavaScript
import './styles.css'
```

### 1.2.10. ref属性
#### 1.2.10.1. createRef
```JavaScript
class Input extends Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => console.log(this.inputRef.current)}>button</button>
      </div>
    )
  }
}
```
#### 1.2.10.2. 函数参数
```JavaScript
class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={input => (this.input = input)}  />
      </div>
    )
  }
}
```
#### 1.2.10.3. ref字符串
不推荐使用 在严格模式下报错
```JavaScript
class Input extends Component {
  render() {
    return (
      <div>
         <input type="text" ref="username" />
         <button onClick={() => console.log(this.refs.username)}>button</button>
      </div>
    )
  }
}
```
#### 1.2.10.4. 获取组件实例
点击按钮让input文本框获取焦点

input文本框以及让文本框获取焦点的方法定义在input组件中，在App组件中引入Input组件，按钮定义在App组件中
```JavaScript
// Input.js
class Input extends Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
    this.focusInput = this.focusInput.bind(this)
  }

  focusInput() {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
      </div>
    )
  }
}
```

```JavaScript
//App.js
class App extends Component {
  constructor() {
    super()
    this.InputComponentRef = React.createRef()
  }


  render() {
    return (
      <div className="App">
        <Input ref={this.InputComponentRef} />
        <button onClick={() => this.InputComponentRef.current.focusInput()}>button</button>
      </div>
    )
  }
}
```

## 1.3. 组件
### 1.3.1. 什么是组件
React是基于组件的方式进行用户界面开发的，组件可以理解为对页面中某一块区域的封装。
### 1.3.2. 创建组件
#### 1.3.2.1. 创建类组件
```JavaScript
import React, { Component } from 'react'
class App extends Component {
  render() {
    return <div>hello class component</div>
  }
}
```

#### 1.3.2.2. 创建函数组件
```JavaScript
const Person = () => {
  return <div>hello function component</div>
}
```
> **注意事项**

> 1. 组件名称首字母必须大写，用于区分组件和普通标签

> 2. jsx语法外层必须又一个跟元素

### 1.3.3. 组件的props
#### 1.3.3.1. props传递数据
在调用组件时可以向组件内部传递数据，在组件中可以通过props对象获取外部传递进来的数据。

> **注意：**

> 1. props对象中存储的数据是只读的，不能在组件内部修改
> 2. 当props数据源中的数据被修改后，组件中的接受到的props数据会被同步更新。（数据驱动DOM）

#### 1.3.3.2. 设置props默认值
```JavaScript
class App extends Component {
  static defaultProps = {}
}
```

```JavaScript
function ThemeButton (props) {

}
ThemeButton.defaultProps = {
  theme: 'red',
  label: 'button text'
}
```
#### 1.3.3.3. 组件children
通过props.children属性可以获取到在调用时填充到组件标签内部的内容。
```JavaScript
<Person>组件内部的内容</Person>
```

```JavaScript
const Person = (props) => {
  return (
    <div>{props.children}</div>
  )
}
```
#### 1.3.3.4. 单向数据流

1. 在React中，关于数据流动有一条原则，就是单项数据流动，字顶向下，从父组件到子组件
2. 单向数据流特性要求我们共享数据要放置在上层组件中
3. 子组件通过调用父组件传递过来的方法更改数据
4. 当数据发生更改时，React会重新渲染组件数
5. 单项数据流使组件之间的数据流动变得可预测。使得定位程序错误变得简单。

### 1.3.4. 类组件状态state
#### 1.3.4.1. 定义组件状态
类组件除了能够从外部（props）接收状态数据以外还可以拥有自己的状态（state）,此状态在组件内部可以被更新。

组件内部的状态数据被存储在组件类中的state属性中，state属性值为对象类型，属性名称固定不可更改。
```JavaScript
class App extends Component {
  constructor() {
    super()
    this.state = {
      person: { name: 'long', age: 20 }
    }
  }

  render() {
    return (
      <div>
        { this.state.person.name }
        { this.state.person.age }
      </div>
    )
  }
}
```
#### 1.3.4.2. 更改组件状态
state状态对象中的数据不可以直接更改，如果直接更改DOM不会更新，要更改state状态数据需要使用setState方法
```JavaScript
this.stateState({
  person: {
    name: 'wang',
    age: 18
  }
})
```
#### 1.3.4.3. 双向数据绑定
双向数据绑定是指，组件类中更改了状态，DOM状态同步更新，DOM更改可状态，组件类中同步更新。组件<=>视图。

要实现双向数据绑定需要用到表单元素和state状态对象。
```JavaScript
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'zhang'
    }
    this.nameChanged = this.nameChanged.bind(this)
  }

  nameChanged(event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <Person name={this.state.name} changed={this.nameChanged} />
      </div>
    )
  }
}
```

```JavaScript
const Person = props => {
  return <input type="text"  value={props.name} onChange={props.changed} />
}
```

### 1.3.5. 类组件的生命周期函数
#### 1.3.5.1. Mounting
- constructor
- getDerivedStateFromProps
- render
- componentDidMount
#### 1.3.5.2. Updating
- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate(组件更新之前需要做某种逻辑或计算)
- componentDidUpdate
### 1.3.6. Unmount
- componentWillUnmount

### 1.3.7. Context
通过Context可以跨层级传递数据
```JavaScript
//userContext.js
import React from 'react'
const userContext = React.createContext('default value')
const UserProvider = userContext.Provider()
const UserConsumer = userContext.Consumer()

export {
  UserProvider,
  UserConsumer
}
```

```JavaScript
//App.js
import { UserProvider } from './userContext'

class App extends Component {
  render() {
    <UserProvider value="hello React Context">
      <A />
    </UserProvider>
  }
}
```
```JavaScript
// A.js
import { UserConsumer } from './userContext'

export class A extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {
            username => (<div>{username}</div>)
          }
        </UserConsumer>
      </div>
    )
  }
}

```

## 1.4. 表单
### 1.4.1. 受控表单
表单控件中的值由组件的state对象来管理，state对象中存储的值和表单控件中的值是同步状态的
```JavaScript
class App extends Component {
  constructor() {
    this.state = {
      username: '',
    }
    this.nameChanged = this.nameChanged.bind(this)
  }

  nameChanged(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <form>
        <p>{this.state.username}</p>
        <input type="text" value={this.state.username} onChange={this.nameChanged} />
      </form>
    )
  }
}
```
### 1.4.2. 非受控表单
表单元素的值由DOM元素本身管理
```JavaScript
class App extends Component {
  constructor() {
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    console.log(this.username.value)
    e.preventDefault()
  }

  render(
    <form onSubmit={this.onSubmit}>
      <input type="text" ref={username => this.username = username} />
    </form>
  )
}
```

## 1.5. 路由
url地址与组件之间的对应关系，访问不同的url地址显示不同的组件。

`npm install react-route-dom`
### 1.5.1. 路由基本使用
```JavaScript
//App.js
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  return <div>首页</div>
}

function News() {
  return <div>新闻</div>
}

function App() {
  return (
    <Router>
      <div>
        <Link to="/index">首页</Link>
        <Link to="/news">新闻</Link>
      </div>
      <div>
        <Route path="/index" component={Index} />
        <Route path="/news" component={News} />
      </div>
    </Router>
  )
}
```
### 1.5.2. 路由嵌套
```JavaScript
function News(props) {
  return (
    <div>
      <div>
        <Link to={`${props.match.url}/company`}>公司新闻</Link>
        <Link tp={`${props.match.url}/industry`}>行业新闻</Link>
      </div>
      <div>
        <Route path={`${props.match.path}/company`} component={CompanyNews} />
        <Route path={`${props.match.path}/industry`} component={IndustryNews} />
      </div>
    </div>
  )
}

function CompanyNews() {
  return <div>公司新闻</div>
}

function IndustryNews() {
  return <div>行业新闻</div>
}
```
### 1.5.3. 路由传参
```JavaScript
import url from 'url'
class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          title: '新闻1'
        },
        {
          id: 2,
          title: '新闻2'
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <div>新闻列表组件</div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/detail?id=${item.id}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class Detail extends Component {
  constructor(props) {
    super(props)
  }
  const { query } = url.parse(this.props.location.search, true)
  console.log(query) // {id: 1}

  render() {
    return <div>新闻详情</div>
  }
}

```
### 1.5.4. 路由重定向
```react
import { Redirect } from 'react-router-dmo'

class Login extends Component {
  render() {
    if (this.state.isLogin) {
      return <Redirect to="/" />
    }
  }
}
```



# 2. React Virtual DOM以及Diff算法
## 2.1. JSX到底是什么
JSX语法为了让React开发人员编写用户界面代码更加轻松。

React.createElement()用来创建Virtual DOM
## 2.2. DOM操作问题
大多数JavaScript框架对于DOM的更新远远超过其必须的更新，从而使得这种缓慢的操作变得更糟。

Virtual DOM出现的目的就是为了提高JavaScript操作DOM对象的效率。
## 2.3. 什么是Virtual DOM
在React中，每个DOM对象都有一个对应的Virtual DOM对象，它是DOM对象的JavaScript对象表现形式，其实就是使用JavaScript对象来描述DOM对象信息。比如DOM对象的类型是什么，它身上有哪有属性，它拥有哪些子元素。
```react
<div className="container">
  <h3>Hello React</h3>
  <p>React is great </p>
</div>
```

```react
{
  type: "div",
  props: { className: "container" },
  children: [
    {
      type: "h3",
      props: null,
      children: [
        {
          type: "text",
          props: {
            textContent: "Hello React"
          }
        }
      ]
    },
    {
      type: "p",
      props: null,
      children: [
        {
          type: "text",
          props: {
            textContent: "React is great"
          }
        }
      ]
    }
  ]
}
```
## 2.4. Virtual DOM如何提升效率
精准找出发生变化的DOM对象，只更新发生变化的部分。

在React第一次创建DOM对象后，会为每个DOM对象创建其对应的Virtual对象，在DOM对象发生更新之前，React会先更新所有的Virtual DOM对象，然后React会将更新后的Virtual DOM和更新前的Virtual DOM进行比较，从而找出发生变化的部分，React会将发生变化的部分更新到真实的DOM对象中，React仅更新必要更新的部分。
## 2.5. 创建Virtual DOM
在React代码执行前，JSX会被Babel转换为`React.createElement`方法的调用，在调用`createElement`方法时会传入元素的类型，元素的属性以及元素的子元素，`crateElement`方法的返回值为构建好的`Virtual DOM`对象。
```JavaScript
 {
   type: 'div',
   props: null,
   children: [{type: 'text', props: {textContent: 'hello'}}]
 }
```
## 2.6. 渲染VIrtual DOM对象为DOM对象
调用render方法
## 2.7. 为元素节点添加属性
- addEventListener
- setAttribute
## 2.8. 渲染组件
### 2.8.1. 函数组件
type: 'function'
### 2.8.2. 类组件
render方法
## 2.9. Virtual DOM对比
## 2.10. ref 属性
## 2.11. key 属性

# 3. Fiber
## 3.1. requireIdleCallback
### 3.1.1. 核心API功能介绍
利用浏览器的空余时间执行任务，如果有更高优先级的任务执行，当前任务可以被终止，执行优先级高级别的任务。
```JavaScript
requestIdleCallback(function(deadline) {
  // deadline.timeRemaining() // 获取浏览器的空余时间
})
```
## 3.2. 浏览器空余时间
页面是一桢一桢绘制出来的，当每秒绘制数达到60时，页面是流畅的，小于这个值时，用户会感觉到卡顿。

1s 60桢，每一帧分到时间是 1000 / 60 ≈ 16 ms，如果每一帧执行的时间小于16ms,就说明浏览器有空余时间。

如果任务在剩余的时间内没有完成则会停止任务执行，继续优先执行主任务，也就是说 requestIdleCallback 总是利用浏览器的空余时间执行任务

## 3.3. Fiber
### 3.3.1. 问题

React 16 之前的版本更新VirtualDOM的过程是采用递归实现的，这种比对方式有一个问题，就是任务一旦开始进行就无法中断，如果应用中组件数量庞大，主线程被长时间占用，直到整颗VirtualDOM树比对更新完成之后主线程才被释放，主线程才能执行其他任务。这就会导致一些用户交互，动画等任务无法立即得到执行，页面就会产生卡顿，影响用户体验。

核心问题：递归无法中断，执行重任务耗时长。JavaScript又是但页面线程，无法同时执行其他任务，导致任务延迟页面卡顿，用户体验差。

### 3.3.2. 解决方案

1. 利用浏览器空闲时间执行任务，拒绝长时间占用主线程。
2. 放弃递归只采用循环，因为循环可以被中断
3. 任务拆分，将任务拆分成一个个的小任务

### 3.3.3. 实现思路

在Fiber方案中，为了实现任务的终止再继续，DOM比对算法被分成了两部分：
1. 构建 Fiber （可中断）
2. 提交 Commit （不可中断）

DOM 初始渲染：virtualDOM -> Fiber -> Fiber[] -> DOM


DOM 更新操作： newFiber vs oldFiber -> Fiber[] -> DOM

### 3.3.4. Fiber对象
```JavaScript
{
  type         节点类型（元素 | 文本 | 组件）
  props        节点属性
  stateNode    节点DOM对象 | 组件实例对象
  tag          节点标记（hostRoot | hostComponent | classComponent | functionComponent）
  effects      数组，存放需要更改的 fiber 对象
  effectTag    当前 fiber 要被执行的操作（新增 | 删除 | 修改）
  parent       当前 fiber 的父级 fiber
  child        当前 fiber 的子级 fiber
  sibling      当前 fiber 的下一个兄弟 fiber
  alternate    fiber 备份 fiber , 比对时使用
}
```

fiber链表结构图
![image](./images/09.png)
