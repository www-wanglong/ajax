# react元素渲染过程
## 1. 使用React.createElement方法将JSX语法转换成Virtual DOM树

## 2. 使用ReactDOM.render方法将Virtual DOM树渲染到页面中
### 2.1 diff算法逐层比较，从左到右
diff对比的是新旧的Virtual DOM，
新的Virtual DOM是jsx返回的，
旧的Virtual DOM是存储在真实DOM对象上的，
旧的DOM是要渲染容器的第一个子DOM节点。
#### 2.1.1 第一次渲染的时候
- 直接创建的dom节点，采用递归的方式
- 为元素设置属性
- 函数组件渲染：直接调用函数返回新的virtual dom
- 内组件渲染：需要得到类的实例对象，调用render方法得到virtual dom
- 将virtual dom存储在真实dom对象上

#### 2.1.2 第二次渲染
- Virtual DOM类型相同，更换属性或textContent
- Virtual DOM类型不相同，直接覆盖旧的
- 删除节点


## 3. 类组件的状态更新
- 将之前真实DOM存储在类的实例上
- 更新完状态后调用diff()重新渲染dom节点

## 4. 组件更新
- diff方法中区分出组件的更新
- 判断是否为同一个组件
- 同一个组件更新props,重新渲染页面，触发组件的生命周期方法
- 不同组件，直接替换原来的组件

## 5. ref属性
- 原生节点，创建出真实dom，调用props
- 组件ref, 创建出类的实例的，调用ref

## 6. key属性
- 没有key属性，直接会每个每个替换
- 有key，可以根据key拿到旧的dom，从而不需要渲染

## 7. 节点卸载
- 文本节点直接删除
- 组件节点需要待用生命周期函数
- 递归调用，需要调用其他组件的卸载生命周期函数
- 移除ref属性
- 移除节点身上的事件处理函数
