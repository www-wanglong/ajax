import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterAction from '../store/actions/counter.action'
console.log(counterAction)
function Counter ({ count, increment_async, increment, decrement }) {
  return (
    <div>
      <button onClick={() => increment_async(5)}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

// 1. connect 帮助订阅store，当store中状态发生更改重新渲染组件
// 2. connect 方法可以让我们获取store中的状态 将状态通过组件的props属性映射给组件
// 3. connect 方法可以获取dispatch

const mapStateProps = state => ({ //props会映射给组件
  count: state.counter.count,
  b: '2'
});

// 生成一些action函数
// 第二个参数
const mapDispatchToProps = dispatch => bindActionCreators(counterAction, dispatch)
export default connect(mapStateProps, mapDispatchToProps)(Counter);