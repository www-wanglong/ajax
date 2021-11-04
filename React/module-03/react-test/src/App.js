import React, { Component, useState, useEffect, memo } from 'react';
import { Suspense } from 'react';
import { lazy } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Test from './Test'

const Home = lazy(() => import(/* webpackChunkName: "Home" */"./Home"))
const List = lazy(() => import(/* webpackChunkName: "List" */"./List"))

function App () {
  // throw new Error('error')
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="list">列表</Link>
      <Switch>
        <Suspense fallback={<div>loading</div>}>
          <Route path="/" component={Home} exact></Route>
          <Route path="/list" component={List} ></Route>
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

// 卸载清除
function App1 () {
  const [flag, setFlag] = useState(true)
  return <div>
    { flag && <Test /> }
    <button onClick={() => { setFlag(!flag) }}>button</button>
  </div>
}

// 纯组件 优化
class App2 extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '张三'
    }
  }

  updateName() {
    setInterval(() => {
      this.setState({name: '张三'})
    }, 1000)
  }

  componentDidMount() {
    this.updateName()
  }

  render() {
    return (
      <div>
        <ReguarComponent />
        <PureComponentDemo />
      </div>
    )
  }
}


class ReguarComponent extends React.Component {
  render() {
    console.log('ReguarComponent')
    return <div>{this.props.name}</div>
  }
}

class PureComponentDemo extends React.PureComponent {
  render() {
    console.log('PureComponent')
    return <div>{this.props.name}</div>
  }
}


// shouldComponentUpdate 提升组件的性能
class App3 extends Component {
  constructor () {
    super()

    this.state = {
      person: {
        name: '张三',
        age: 12,
        jop: 'waiter'
      }
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        person: {
          ...this.state.person,
          jop: 'chef'
        }
      })
    }, 2000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.person.name !== this.state.person.name ||
      nextState.person.age !== this.state.person.age
    ) {
      return true
    }
    return false
  }

  render() {
    console.log('render')
    return (
      <div>
        {this.state.person.name} {this.state.person.age}
      </div>
    )
  }
}

const ShowName = memo(function ({ name }) {
  console.log('show-name')
  return <div>{name}</div>
})

function compare (pervProps, nextProps) {
  if (pervProps.person.name !== nextProps.person.name ||
      pervProps.person.age !== nextProps.person.age
    ) {
      return false;
    }
  return true;
}

const ShowPerson = memo(function ({ person }) {
  console.log('render...')
  return <div>{person.name} {person.age}</div>
}, compare)

function App5 () {
  const [person, setPerson] = useState({name: '张三', age: 12, job: 'waiter'})
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setPerson(() => ({
        ...person,
        job: 'chef'
      }))
    }, 1000)
  }, [])

  return (
    <div>
      <ShowPerson person={person} />
    </div>
  )
}

export default App;