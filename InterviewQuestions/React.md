# 1. react setState是同步还是异步？
# 2. 父子组件之间的通信方式
## 2.1 父向子 使用`props`
## 2.2 子向父 使用props`传递回调函数`
## 2.3 跨级嵌套组件 使用`context`
## 2.4 使用事件订阅
## 2.5 redux
# 3. useState、useCallback、useMemo、memo
## 3.1 useState保存状态（采用闭包实现）
setCount异步的
## 3.2 useReducer
是另一种让函数组件保存状态的方式
## 3.3 useContext
在跨组件层级获取数据时简化获取数据的代码

## 3.4 useEffect
让函数组件拥有处理副作用的能力。类似生命周期函数
## 3.5 useMemo
计算属性, 会缓存
## 3.6 memo
性能优化 如果本组件中的数据没有发生变化，阻止更新。类似类组件中的PureComponent和shouldComponentUpdate。
## 3.7 useCallback
配合memo使用，性能优化 缓存优化，使组件重新渲染时得到相同的函数实例。


# 5.自定义Hook

# 6. 类组件和函数组件区别
## 类组件缺点
- 1. 缺少逻辑复用机制
为了复用逻辑增加无实际渲染效果的组件（高级组件），增加组件的层级
- 2. 类组件经常变得很复杂或难以维护
在一个生命周期函数内存在多个不相干的业务逻辑代码。
- 3. 类成员方法不能保证this指向的正确性