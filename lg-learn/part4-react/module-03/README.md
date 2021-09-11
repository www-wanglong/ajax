# 一、React Hooks
## 1.React Hooks介绍
### 1.1 简介
对函数型组件增强，让函数型组件可以存储状态，可以拥有处理副作用的能力。

让开发者在不用类组件的情况下，实现相同的功能。
### 1.2 类组件的不足
- 缺少逻辑复用机制
- 类组件经常会变得很复杂 难以维护
- 类成员方法不能保证this指向的正确性
-
## 2.React Hooks使用
### 2.1 `useState()`
用于为函数组件引入状态

`useState`参数可以是一个函数，一般用于获取初始状态

### 2.1 `useReducer()`
是另一种让函数组件保存状态的方式

### 2.3 `useContext()`
在跨组件层级获取数据时简化获取数据的代码

### 2.4 `useEffect()`
让函数组件拥有处理副作用的能力。类似生命周期函数
`useEffect(() => {})` => `componentDidMount, componentDidUpdate`

`useEffect(() => {}, [])` => `componentDidMount`

`useEffect(() => () => {})` => `componentWillUnMount`


优势：
- 按照用途可以分类代码（将一组相干的业务逻辑归置到了同一个副作用函数中）
- 简化重复代码 使组件内部代码更加清晰

使用异步函数：使用自执行函数

### 2.5 `useMemo()`
计算属性, 会缓存
### 2.6`memo`方法
性能优化 如果本组件中的数据没有发生变化，阻止更新。类似类组件中的PureComponent和shouldComponentUpdate
### 2.7 `useCallback()`
性能优化 缓存优化，使组件重新渲染时得到相同的函数实例。

### 2.8 `useRef()`
- 获取DOM元素对象
- 保存数据（跨组件周期）
即使组件重新渲染，保存的数据仍然还在，保存的数据被更改不会触发组件重新渲染

## 3. 自定义Hook


# 二、Formik(React表单增强)
## 1. Fomik简介
### 1.1 Formik
增强表单的处理能力，简化表单的处理流程
### 1.2 Formik下载
npm install formik

## 2.1 Formik基本使用
## 2.3 Yup验证
## 2.4 使用组件的方式构建代码
