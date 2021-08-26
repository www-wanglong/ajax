// import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from "../const/counter.const"

// 创建action 函数
import { createAction } from 'redux-actions'
export const increment = createAction('increment')
export const decrement = createAction('decrement')

// export const increment = (payload) => {
//   return { type: INCREMENT, payload }
// }

// export const decrement = payload => {
//   return { type: DECREMENT, payload }
// }

// export const increment_async = payload => {
//   return { type: INCREMENT_ASYNC, payload }
// }