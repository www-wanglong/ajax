import React, {
  useState,
  useReducer,
  createContext,
  useContext,
  useEffect,
  useMemo,
  memo,
  useCallback,
  useRef
} from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'


// 1. useState使用
function App1 (props) {
  // 函数只会执行一次
  const [ count, setCount ] = useState(() => {
    return props.count || 0
  })
  const [ person, setPerson ] = useState({name: 'wang', age: 18})

  function handleCount () {
    setCount((count) => {
      return count + 1
    })
    document.title = count
  }

  return (
    <div>
      <span>{count} {person.name} {person.age} </span>
      <button onClick={handleCount}>+</button>
      <button onClick={() => setPerson({name: 'long', age: 20})}>long</button>
    </div>
  )
}

function AppT() {
  return (
    <div>sp</div>
  )
}

// 2. useReducer使用
function App2() {

  function reducer (state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      default:
        return state
    }
  }

  const [ count, dispatch ] = useReducer(reducer, 0)
  return (
    <div>
      <button onClick={() => dispatch({type: 'increment'})}>+1</button>
      <span>{count}</span>
      <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
    </div>
  )
}

// 3. useContext
const countContext = createContext()
function App3() {
  return <countContext.Provider value={100}>
    <Foo />
  </countContext.Provider>
}

function Foo (props) {
  const value = useContext(countContext)
  // return <countContext.Consumer>
  //   {
  //     value => {
  //       return <div>foo-{value}</div>
  //     }
  //   }
  // </countContext.Consumer>
  return <div>{value}</div>
}

// 4. useEffect
function App4 () {
  // 挂载完成之后 数据更新或执行
  // useEffect(() => {
  //   console.log(1111)
  // })

  // 挂载完成之后 执行一次
  // useEffect(() => {
  //   console.log(123)
  // }, [])

  // 卸载之前执行
  useEffect(() => {
    return () => {
      console.log('卸载')
    }
  })
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>卸载</button>
    </div>
  )
}

// 5. 组合使用
function App5 () {


  function onScroll () {
    console.log('滚动了')
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const [count, setCount ] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])
  return <div>
    <span>{count}</span>
    <button onClick={() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>卸载</button>
  </div>
}

// useEffect 第二个参数
function App6 () {
  const [count, setCount] = useState(0)
  const [person, setPerson] =  useState({name: 'wang'})

  // 只用指定数据发生变化时触发
  useEffect(() => {
    console.log(111)
    document.title = count
  }, [count])

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <span>{person.name}</span>
      <button onClick={() => setPerson({name: 'long'})}>long</button>
    </div>
  )
}

// useEffect异步
function App7 () {

  useEffect(() => {
    // const data = await getData()
    (async function () {
      let response = await getData()
      console.log(response)
    })()
  }, [])

  return <div>xx</div>
}

function getData () {
  return new Promise(resolve => {
    resolve({msg: 'hello'})
  })
}

// useMemo
function App () {
  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)
  const result = useMemo(() => {
    console.log(11)
    return count * 2
  }, [count])
  return <div>
    <span>{count}</span>
    <span>{result}</span>
    <span>{bool ? '真' : '假'}</span>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setBool(!bool)}>setBool</button>
  </div>
}

// memo and useCallback
function App9() {
  const [count, setCount] = useState(0)
  // const resetCount = () => {
  //   setCount(0);
  // }

  const resetCount = useCallback(() => setCount(0), [setCount])

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Boo resetCount={resetCount} />
    </div>
  )
}
//count改变会重新渲染组件， 生成的resetCount实例不同
//memo 返回新的组件
const Boo = memo(function Boo (props) {
  console.log('foo渲染了')
  return <div>boo组件
    <button onClick={props.resetCount}>resetCount</button>
  </div>
})

// useRef获取dom元素
function App10() {

  const box = useRef()

  return <div ref={box}>
    <button onClick={() => console.log(box)}>获取idv</button>
  </div>
}

function App11() {
  const [count, setCount] = useState(0)

  let timerId = useRef()

  useEffect(() => {
    console.log(timerId)
    timerId.current = setInterval(() => {
      //组件重新渲染
      setCount(count => count + 1)
    }, 1000)
  }, [])

  console.log(timerId.current)
  const stopCount = () => {
    clearInterval(timerId.current)
  }

  return <div>
    <span>{count}</span>
    <button onClick={stopCount}>停止</button>
  </div>
}

// 自定义hook
function App12() {
  //  使用自定义
  const [post, setPost] = useGetPost()
  return <div>
    <span>{post.login}</span>
  </div>
}

// 自定义hook
function useGetPost () {
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://api.github.com/users').then( response => {
      setPost(response.data[0])
    })
  }, [])
  return [post, setPost]
}

function useUpdateInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: event => setValue(event.target.value)
  }
}

function App13 () {

  const usernameInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')

  const submitForm = (event) => {
    event.preventDefault()
    console.log(usernameInput.value)
    console.log(passwordInput.value)
  }

  return <form onSubmit={submitForm}>
    <input type="text" name="username" {...usernameInput} />
    <input type="password" name="password" {...passwordInput} />
    <input type="submit" />
  </form>
}

export default App;
