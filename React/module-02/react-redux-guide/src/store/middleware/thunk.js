import { DECREMENT, INCREMENT } from "../const/counter.const";

// 1. action
// 2. 是异步传递函数，同步传递对象
// 3. 异步操作代码要写在传递进来的函数中
// 4. dispatch方法传递过去
export default ({dispatch}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch)
  }
  next(action)
}