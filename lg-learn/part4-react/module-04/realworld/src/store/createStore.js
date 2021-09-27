import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
import createSageMiddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'

export default function () {
  const sageMiddleware =  createSageMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sageMiddleware))
  sageMiddleware.run(rootSaga)
  return store;
}