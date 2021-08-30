import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('counter') // 装饰器 将counter注入到组件中
@observer
class App extends Component {

  componentDidMount() {
    const { getData } = this.props.counter
    getData()
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <button onClick={counter.increment}>+</button>
        <span>{counter.count}</span>
        <button onClick={counter.decrement}>-</button>
        <span>{counter.getResult}</span>
        <div>
          <input
            type="text"
            value={counter.username}
            onChange={(e) => counter.changeUserName(e.target.value)}
          />
          <span>{counter.username}</span>
        </div>
        <div>
          {
            counter.users.map( (user,index) =>(
              <div key={index}>
                <span>{user.login}</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
