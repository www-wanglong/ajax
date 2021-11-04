// applyMiddleware注册中间件
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
// 引入createSagaMiddleware方法 创建
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'
import logger from './middleware/logger'
// 中间件
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// 启用saga
sagaMiddleware.run(rootSaga)