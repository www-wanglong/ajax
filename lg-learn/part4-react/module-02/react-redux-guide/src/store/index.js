import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/root.reducer'
// import logger from './middleware/logger'
// import test from './middleware/test'
// import thunk from './middleware/thunk'

import thunk from 'redux-thunk'

// 创建store 注册中间件(先注册 先执行)
export const store = createStore(RootReducer, applyMiddleware(thunk))