import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

// 使用数组保存多个状态
let state = [];
let setters = [];
let stateIndex = 0

function createSetter (index) {
  return function (newState) {
    state[index] = newState
    render()
  }
}

// useState实现
function useState (initialState) {

  state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState
  setters.push(createSetter(stateIndex));
  let value = state[stateIndex]
  let setter = setters[stateIndex]
  stateIndex++;
  return [value, setter]
}

function render () {
  stateIndex = 0;
  effectIndex = 0;
  ReactDOM.render(<App />, document.getElementById('root'));
}

// 上一次依赖
let pervDepsArray = []
let effectIndex = 0

// useEffect实现
function useEffect (callback, depsArray) {
  // 判断是不是函数
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new Error('useEffect的第一个函数必须是函数')
  }
  // 判断depsArray有没有传递
  if (typeof depsArray === 'undefined') {
    callback()
  } else {
    // 判断是不是数组
    if (Object.prototype.toString.call(depsArray) !== '[object Array]') {
      throw new Error('useEffect的第二个函数必须是数组')
    }
    // 对比依赖值
    //let hasChange = !depsArray.every( (dep, index) => dep === pervDepsArray[index])
    // 获取上一次的状态
    let perDeps = pervDepsArray[effectIndex]
    console.log('perDeps', perDeps)
    let hasChange = perDeps ? !depsArray.every( (dep, index) => dep === perDeps[index]) : true
    if (hasChange) {
      callback()
    }
    // 同步依赖值
    pervDepsArray[effectIndex] = depsArray
    effectIndex++
  }
}


// useReducer实现
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)

  function dispatch (action) {
    const newState = reducer(state, action)
    setState(newState)
  }

  return [state, dispatch]
}

function App () {
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState('张三')

  // useEffect(() => {
  //   console.log('hello')
  // }, [count])

  // useEffect(() => {
  //   console.log('world')
  // }, [name])
  function reducer (state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state -1
      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0)

  return <div>
    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    <span>{count}</span>
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
    {/* <span>{name}</span>
    <button onClick={() => setName('里斯')}>nameChange</button> */}
  </div>
}

export default App;
