import { createStore } from 'redux'
import reducer from './reducers/counter.reducer'

// 创建store
export const store = createStore(reducer)