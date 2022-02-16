# Virtual DOM和Diff算法
## 1. JSX是什么
JSX是一种JavaScript语法的扩展，React使用它来描述用户界面长成的样子。在React代码执行之前，Babel会对将JSX编译为React API。

```JSX
<div className="container">
  <h1>Hello World</h1>
  <p>React is Great</p>
</div>
```

```JavaScript
React.createElement(
  'div',
  {
    className: 'container
  },
  React.createElement('h1', null, 'Hello World'),
  React.createElement('p', null, 'React is Great')
)
```

[Babel REPL](https://babeljs.io/)

执行过程：JSX在执行前被转换成`React.createElement()`方法的调用，返回一个`virtual dom`对象，React将`virtual dom`对象转换成真实DOM对象，然后显示在界面上。

## 2. DOM操作
JavaScript操作DOM比较慢。Virtual DOM目的是为了提交JavaScript对象操作DOM。

## 3. 什么是Virtual DOM
在React中，每个DOM对象都有一个对应的Virtual DOM对象，它是DOM对象的 Javascript 对象表现形式，其实就是使用JavaScript对象来描述DOM对象的信息。比如 DOM 对象的类型是什么，它身上有哪些属性，它拥有哪些子元素。

```JSX
<div className="container">
  <h1>Hello World</h1>
  <p>React is Great</p>
</div>
```

```JavaScript
{
  type: 'div',
  props: { className: 'container' },
  children: [
    {
      type: 'h1',
      props: null;
      children: [
        {
          type: 'text',
          props: {
            textContent: 'Hello World'
          }
        }
      ]
    }
  ]
}
```

## 4. Virtual DOM如何提升效率

精准找出发生变化的DOM对象，只更新变化的部分。

在React第一个创建DOM对象后，会为每个DOM对象创建其对应的Virtual DOM对象，在DOM对象发生更新之前，React会先更新时所有的Virtual DOM对象，然后React会将更新后的Virtual DOM和更新前的Virtual DOM进行比较，从而找出发生变化的部分，React会将发生变化的部分更新到真实的DOM对象中，React仅更新必要更新的部分。

## 5. 创建 Virtual DOM

### 5.1 createElement

在React代码执行前，JSX会被Babel转换为 React.createElement方法的调用，在调用createElement方法时会传入元素的类型，元素的属性，以及元素的子元素，createElement 方法的返回值为构建好的Virtual DOM 对象。

返回的Virtual DOM对象
```react
{
  type: 'div',
  props: null,
  children: [
    {
      type: 'text',
      props: {
        textContent: 'hello'
      }
    }
  ]
}
```

```JavaScript
function createElement (type, props, ...children) {
  return {
    type,
    props,
    children
  }
}
```

从 createElement方法的第三个参数开始就都是子元素，在定义 createElement 方法时，通过`...children` 将所有的子元素放置到children 数组中。

```react
const virtualDOM = (
  <div class="container">
    <h1>hello</h1>
  </div>
)

console.log(virtualDOM)
```

上编码代码测试，发现返回的 Virtual DOM 存在一些问题，第一个问题就是文本节点被直接放入到了数组中；问题二布尔值也被当做文本，如果 Virtual DOM被转化成了布尔值或null，不应该被更新到DOM 中；问题三，React组件汇总，可以通过props.children获取子元素

重新改造 createElement方法
```JavaScript
function createElement() {
  const childElements = [].concat(...children).reduce((result, child) => {
    if (child !== null && child !== false && child !== true) {
      if (child instanceof Object) {
        result.push(child)
        return child
      } else {
        result.push(createElement('text', {textContent: child}))
      }
    }
    return result
  }, [])

  return {
    type,
    props: Object.assign({children: childElements}, props),
    children: childElements
  }
}
```

## 6. 渲染 Virtual DOM 对象为DOM 对象 （render）
通过调用 render 方法可以将 Virtual DOM 对象更新为真实的 DOM 对象。

在更新之前需要确定是否存在旧的 Virtual DOM，如果存在需要对比差异，如果不存在可以直接将 Virtual DOM 转化为 DOM 对象。

```JavaScript
// render.js
function render (virtualDOM, container, oldDOM = container.firstChild) {
  diff(virtualDOM, container, oldDOM)
}
```

```JavaScript
// diff.js
function diff (virtualDOM, container, oldDOM) {
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  }
}
```

在进行 Virtual DOM 转化之前还要确定 Virtual DOM 的类 是 Component VS Native ELement

```JavaScript
// mountElement.js
function mountElement (virtualDOM, container) {
  mountNativeElement(virtualDOM, container)
}
```

```JavaScript
// mountNativeElement.js
function mountNativeElement (virtualDOM, container) {
  const newElement = createDOMElement(virtualDOM)
  container.appendChild(newElement)
}
```

```JavaScript
// createDOMElement.js
function createDOMElement (virtualDOM) {
  let newElement = null
  if (virtualDOM.type === 'text') {
    newElement = document.createTextNode(virtualDOM.props.textContent)
  } else {
    newElement = document.createElement(virtualDOM.type)
    updateElementNode(newElement, virtualDOM)
  }

  virtualDOM.children.forEach((child) => {
    mountElement(child, newElement)
  })
  return newElement
}
```

## 7. 为元素设置属性
```JavaScript
// updateElementNode.js
function updateElementNode (element, virtualDOM) {
  const newProps = virtualDOM.props
  Object.keys(newProps).forEach((propName) => {
    const newPropsValue = newProps[propName]
    if (propName.slice(0, 2) === 'on') {
      const eventName = propName.toLowerCase().slice(2)
      element.addEventListener(eventName, newPropsValue)
    } else if (propName === 'value' || propName === 'checked') {
      element[propName] = newPropsValue
    } else if (propName !== 'children') {
      if (propName === 'className') {
        element.setAttribute('class', newPropsValue)
      } else {
        element.setAttribute(propName, newPropsValue)
      }
    }
  })
}
```
## 8. 渲染组件

### 8.1 函数组件渲染

组件的 Virtual DOM 类型值为函数，函数组件和类组件都是如此。
```JavaScript
// 组件的Virtual DOM
{
  type: f function () {},
  props: {},
  children: []
}
```

```JavaScript
// mountElement.js
function mountElement (virtualDOM, container) {
  if (isFunction(virtualDOM)) {
    mountComponent(virtualDOM, container)
  } else {
    mountNativeElement(virtualDOM, container)
  }
}

// isFunction.js
function isFunction (virtualDOM) {
  return virtualDOM && virtualDOM.type && typeof virtualDOM.type === 'function'
}
```

在 mountComponent 中区分是类组件还是函数组件

```JavaScript
// mountComponent.js
function mountComponent (virtualDOM, container) {
  let nextVirtualDOM = null
  if (isFunctionComponent(virtualDOM)) {
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
  } else {
    nextVirtualDOM = buildClassComponent(virtualDOM)
  }

  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container)
  } else {
    mountNativeElement(nextVirtualDOM, container)
  }
}

function buildFunctionComponent (virtualDOM) {
  return virtualDOM && virtualDOM.type(virtualDOM.props)
}

// isFunctionComponent.js
function isFunctionComponent (virtualDOM) {
  return isFunction(virtualDOM) && !(virtualDOM.type.prototype && virtualDOM.type.prototype.render)
}
```

### 8.2 类组件渲染
类组件本身也是Virtual DOM，可以通过 Virtual DOM的type的原型对象是否有render方法来判断是函数组件还是类组件。

类组件需要得到类组件的实例对象，然后调用其中的render方法，回去Virtual DOM。

```JavaScript
// Component.js
class Component {
  constructor (props) {
    this.props = props
  }
}
```

```JavaScript
// mountComponent.js
function buildClassComponent (virtualDOM) {
  const component = new virtualDOM.type(virtualDOM.props)
  return component.render()
}
```

## 9. Virtual DOM 对比

在进行 Virtual DOM 比对时，需要用法更新后的 Virtual DOM 和 更新后的 Virtual DOM，

更新后的 Virtual DOM 在 render 方法中

更新前的 Virtual DOM，对应的其实就是也在页面中显示的真实 DOM 对象。可以在创建真实DOM对象时，可以将当前的 Virtual DOM 添加到当前的 真实DOM对象的属性中。在进行Virtual DOM 对比之前，就可以通过真实DOM 对象获取其对应的 Virtual DOM对象了，其中就是通过render方法的第三个参数获取当前页面的真实DOM，container.firstChild

```JavaScript
// mountNativeElement.js
function mountNativeElement (virtualDOM, container) {
  newElement._virtualDOM = virtualDOM
}

```

### 9.1 Virtual DOM类型相同
Virtual DOM 类型相同。如果是元素节点，就对比元素节点属性是否发生变化，如果是文本节点就对比文本节点内容是否发生变化

- 先从已存在 DOM 对象中获取其对应的 Virtual DOM
- 元素节点如果`textContent`发生改变，设置变化的内容，并将新的Virtual DOM同步给真实DOM对象
- 循环新的props，通过对比旧的判断属性值是否发生变化，如果发生变换需要将变化的值设置上去

```JavaScript
// diff.js
function diff (virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {
    if (virtualDOM.type === 'text') {
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      setAttributeForElement(virtualDOM, oldVirtualDOM, oldDOM)
    }

    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i])
    })
  }
}

function updateTextNode (virtualDOM, oldVirtualDOM, oldDOM) {
  if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
    oldDOM.textContent = virtualDOM.props.textContent
  }
  oldDOM._virtualDOM = virtualDOM
}

function setAttributeForElement(virtualDOM, oldVirtualDOM, oldDOM) {
  updateElementNode(oldDOM, virtualDOM, oldVirtualDOM)
}

```

```JavaScript
// updateElementNode.js
function updateElementNode (element, virtualDOM, oldVirtualDOM = {}) {
  const newProps = virtualDOM.props || {}
  const oldProps = oldVirtualDOM.props || {}
  Object.keys(newProps).forEach((propName) => {
    const newPropValue = newProps[propName]
    const oldPropValue = oldProps[propName]
    if (newPropValue !== oldPropValue) {
      if (propName.slice === 'on') {
        const eventName = propName.toLowerCase().slice(2)
        element.addEventListener(eventName, newPropValue)
        if (oldPropValue) {
          element.removeEventListener(eventName, oldPropValue)
        }
      } else if (propName === 'value' || propsName === 'checked') {
        element[propName] = newPropValue
      } else if (propName !== 'children') {
        if (propName === 'className') {
          element.setAttribute('class', newPropsValue)
        } else {
          element.setAttribute(propName, newPropsValue)
        }
      }
    }
  })

  // 删除属性的情况
  Object.keys(oldProps).forEach((propName) => {
    const newPropValue = newProps[propName]
    const oldPropValue = oldProps[propName]
    if (!newPropValue) {
      if (propName.slice(0,2) === 'on') {
        element.removeEventListener(propName.toLowerCase(2), oldPropValue)
      } else if (propName !== 'children') {
        element.removeAttribute(propName)
      }
    }
  })

}
```
### 9.2 Virtual DOM类型不相同
直接使用新的 Virtual DOM 创建DOM对象，用新的DOM对象直接替换旧的 DOM 对象。当前这种情况，组件要单独处理。
```JavaScript
const newElement = createDOMElement(virtualDOM)
oldDOM.parentNode.replaceChild(newElement, oldDOM)
```
### 9.3 删除节点

删除节点发生在节点更新以后并且发生在同一个父节点下的所有子节点身上。

在节点更新完成后，如果旧节点对象的数量多于新 Virtual DOM 节点的数量，就说明有节点需要被删除。

```JavaScript
let oldChildNodes = oldDOM.childNodes
if (oldChildNodes.length > virtualDOM.children.length) {
  for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
    oldDOM.removeChild(oldChildNodes[i])
  }
}
```
### 9.4 类组件状态更新

类组件state 更新需要重新 render。

要实现对比，还需要获取未更新前的Virtual DOM，将之前的真实DOM存在实例对象上。

- 类组件将实例对象存储在Virtual DOM 对象上，在调用`mountNativeElement`方法是，会得到要渲染的真实DOM，将这个真实的DOM设置到实例上
```JavaScript
class Component {
  setState (state) {
    this.state = Object.assign({}, this.state, state)
    let virtualDOM = this.render()
    let oldDOM = this.getDOM()
    diff(virtualDOM, oldDOM.parentNode, oldDOM)
  }

  setDOM (dom) {
    this._dom = dom
  }

  getDOM () {
    return this._dom
  }

}
```

```JavaScript
// mountNativeElement.js
function mountNativeElement (virtualDOM, container, oldDOM) {
  let newElement = createDOMElement(virtualDOM)
  if (oldDOM) {
    unmountNode(oldDOM)
  }

  container.appendChild(newElement)

  let component = virtualDOM.component
  if (component) {
    component.setDOM(newElement)
  }
}


```

### 9.5 组件更新
- diff方法中区分出组件的更新。
```JavaScript
if (typeof virtualDOM.type === 'function') {
  diffComponent(virtualDOM, oldComponent, container, oldDOM)
}
```

- 组件更新需要区分是否为同一个组件
- 同一个组件，组件更新
  - 更新props，重新渲染页面
  - 触发组件的生命周期方法
- 不同组件，直接替换原来内容
```JavaScript
//diffComponent.js
function diffComponent (virtualDOM, oldComponent, container, oldDOM) {
  if (isSameComponent(virtualDOM, oldComponent)) {
    updateComponent(virtualDOM, oldComponent, oldDOM, container)
  } else {
    // 将virtualDOM需要的容器中，并且删除之前的渲染DOM
    mountElement(virtualDOM, container, oldDOM)
  }

}

function updateComponent (virtualDOM, oldComponent, oldDOM, container) {
  oldComponent.componentWillReceiveProps(virtualDOM.props)
  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    let prevProps = oldComponent.props
    oldComponent.componentWillUpdate(virtualDOM.props)
    oldComponent.updateProps(virtualDOM.props)
    let nextVirtualDOM = oldComponent.render()
    nextVirtual.component = oldComponent
    diff(nextVirtualDOM, container, oldDOM)
    oldComponent.componentDidUpdate(prevProps)
  }

}

function isSameComponent (virtualDOM, oldComponent) {
  return oldComponent && oldComponent.constructor === virtualDOM.type
}
```


## 10. ref属性

### 10.1 原生节点ref
在创建节点的时候
```JavaScript
// createDOMElement.js
if (virtualDOM.props && virtualDOM.props.res) {
  virtualDOM.props.ref(newElement)
}
```
### 10.2 组件的ref
mountComponent方法中， 处理类组件
```JavaScript
// mountComponent.js

if (component) {
  component.componentDidMount()
  if (component.props && component.props.ref) {
    component.props.ref(component)
  }
}
```

## 11. key 属性
在 React 中，渲染列表数据时通常会被渲染的列表元素上添加key属性，key 属性就是数据的唯一标识，帮助 React　 识别哪些数据被修改了活着删除了，从而达到DOM最小化操作。
### 11.1 节点对比

实现思路：在两个元素进行对比时，如果类型相同，就循环旧的DOM对象子元素，查看其身上是否就有key属性，如果有就将这个子元素的 DOM 存储在一个 JavaScript 对象中，接着循环要渲染的Virtual DOM 对象的子元素，在循环过程中获取到这个子元素的key 属性，然后使用这个key属性找到 JavaScript 对象中查找 DOM 对象，如果能够找到就说明这个元素是已经存在的，是不需要重新渲染的。 如果通过key属性找不到这个元素，就说明这个元素是新增的是需要渲染的。

```JavaScript
// diff.js
if (virtualDOM && virtualDOM.type === oldVirtualDOM.type) {
  let keyedElements = {}
  for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
    let domElement = oldDOM.childNodes[i]
    if (domElement.nodeType === 1) {
      let key = document.getAttribute('key')
      if (key) {
        keyedElements[key] = domElement
      }
    }
  }

  let hasNoKey = Object.keys(keyedElements).length === 0

  if (hasNoKey) {
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNode[i])
    })
  } else {
    virtualDOM.children.forEach((child, i) => {
      let key = child.props.key
      if (key) {
        let domElement = keyedElements[key]
        if (domElement) {
          if (oldDOM.childNode[i] && oldDOM.childNode[i] !== domElement) {
            oldDOM.insertBefore(domElement, oldDOM.childNode[i] )
          }
        } else {
          mountElement(child, oldDOM, oldDOM.childNode[i])
        }
      }
    })
  }
}
```
### 11.2 节点卸载

