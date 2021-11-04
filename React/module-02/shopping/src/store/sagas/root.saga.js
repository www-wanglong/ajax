// 合并saga
import { all } from 'redux-saga/effects'
import productSaga from './product.saga'
import cartSaga from './cart.saga'

export default function* rooSaga () {
  yield all([
    productSaga(),
    cartSaga(),
  ])
}