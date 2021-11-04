import { DECREMENT, INCREMENT } from "../const/counter.const"
import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from '../actions/counter.action'
//handleActions

const initialState = {
  count: 0,
}

const handleIncrement = (state, action) => ({ count: state.count + action.payload })
const handleDecrement = state => ({ count: state.count - 1 })

export default createReducer({
  [increment]: handleIncrement,
  [decrement]: handleDecrement
}, initialState)

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         count: state.count + action.payload
//       }
//     case DECREMENT:
//       return {
//         count: state.count - 1
//       }
//     default:
//       return state
//   }
// }