import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-redux'
import reducer from '../share/store/reducers'

// 创建store
export default () => createStore(reducer, {}, applyMiddleware(thunk))