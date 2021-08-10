# React
## 1. 介绍
React是一个用于构建用户界面的JavaScript库，它只负责应用的视图层，帮助开发人员构建快速且交互式的web应用程序。

React使用组件的方式构建用户界面。
## 2. JSX语法
在React中使用JSX语法描述用户界面，它是一种Javascript语法扩展。

在React代码执行之前，Babel会讲JSX语法转化为标准的JavsScript API。

JSX语法就是一种语法糖（React.createElement），让开发人员使用更加舒服的代码构建用户界面。
### 2.1 在JSX中使用表达式
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
### 2.2 属性
如果属性值为字符串类型，需要加引号，属性名称推荐采用驼峰式命名
```JavaScript
const element = <div greeting="hello"></div>
```
如果属性值为JavaScript表达式，属性值外面大括号
```JavaScript
const element = <img  src={user.avatarUrl} />
```
### 2.3 JSX单标记必须合并
如果JSX是单标记，必须闭合，否则报错
```JavaScript
const element = <img  src={user.avatarUrl} />
```
### 2.4 className
为JSX标记添加类名需要使用className，而不是class
```JavaScript
const element = <img  src={user.avatarUrl} className="rounded" />
```
### 2.5 JSX自动展开数组
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
### 2.6 三元运算符
```javaScript
{ boolean ? <div>Hello React</div> : null }
{ boolean && <div>Hello React</div> }
```
### 2.7 循环
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
### 2.8 事件
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
### 2.9 样式
#### 2.9.1 行内样式
```JavaScript
class App extends Component {
  render() {
    const style = {width: 200, height: 200, backgroundColor: 'red'}
    return <div style={style}></div>
  }
}
```
#### 2.9.2 外链样式
```JavaScript
//Button.js
import styles from './Button/module.css'
class Button extends Component {
  render() {
    return <button className={style.error}>err button</button>
  }
}
```
#### 2.9.3 全局样式
```JavaScript
import './styles.css'
```

### 2.10 ref属性
#### 2.10.1 createRef
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
#### 2.10.2 函数参数
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
#### 2.10.3 ref字符串
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
#### 2.10.4 获取组件实例
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

## 3. 组件
### 3.1 什么是组件
React是基于组件的方式进行用户界面开发的，组件可以理解为对页面中某一块区域的封装。
### 3.2 创建组件
#### 3.2.1 创建类组件
```JavaScript
import React, { Component } from 'react'
class App extends Component {
  render() {
    return <div>hello class component</div>
  }
}
```

#### 3.2.2 创建函数组件
```JavaScript
const Person = () => {
  return <div>hello function component</div>
}
```
**注意事项**

1. 组件名称首字母必须大写，用于区分组件和普通标签

2. jsx语法外层必须又一个跟元素

### 3.3组件的props
#### 3.3.1 props传递数据
在调用组件时可以向组件内部传递数据，在组件中可以通过props对象获取外部传递进来的数据。

**注意：**

1. props对象中存储的数据是只读的，不能在组件内部修改
2. 当props数据源中的数据被修改后，组件中的接受到的props数据会被同步更新。（数据驱动DOM）

#### 3.3.2 设置props默认值
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
#### 3.3.3 组件children
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
#### 3.3.4 单向数据流

1. 在React中，关于数据流动有一条原则，就是单项数据流动，字顶向下，从父组件到子组件
2. 单向数据流特性要求我们共享数据要放置在上层组件中
3. 子组件通过调用父组件传递过来的方法更改数据
4. 当数据发生更改时，React会重新渲染组件数
5. 单项数据流使组件之间的数据流动变得可预测。使得定位程序错误变得简单。

### 3.4 类组件状态state
#### 3.4.1 定义组件状态
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
#### 3.4.2 更改组件状态
state状态对象中的数据不可以直接更改，如果直接更改DOM不会更新，要更改state状态数据需要使用setState方法
```JavaScript
this.stateState({
  person: {
    name: 'wang',
    age: 18
  }
})
```
#### 3.4.3 双向数据绑定
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

### 3.5 类组件的生命周期函数
#### 3.5.1 Mounting
- constructor
- getDerivedStateFromProps
- render
- componentDidMount
#### 3.5.2 Updating
- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate(组件更新之前需要做某种逻辑或计算)
- componentDidUpdate
### 3.5.3 Unmount
- componentWillUnmount

### 3.6 Context
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

## 4. 表单
### 4.1 受控表单
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
### 4.2 非受控表单
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

## 5. 路由
url地址与组件之间的对应关系，访问不同的url地址显示不同的组件。

`npm install react-route-dom`
### 5.1 路由基本使用
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
### 5.2 路由嵌套
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
### 5.3 路由传参
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
### 5.4 路由重定向
```JavaScript
import { Redirect } from 'react-router-dmo'

class Login extends Component {
  render() {
    if (this.state.isLogin) {
      return <Redirect to="/" />
    }
  }
}
```
