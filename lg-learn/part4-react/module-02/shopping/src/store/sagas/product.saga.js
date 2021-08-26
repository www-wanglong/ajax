import { put, takeEvery } from 'redux-saga/effects'
import { loadProducts, saveProducts } from '../actions/product.actions'
import axios from 'axios'

function* handleLoadProducts () {
  // 加载商品数据
  const { data } = yield axios.get('http://localhost:3005/goods')
  // 保存数据到store中
  yield put(saveProducts(data))
}

export default function* productSaga () {
  // 接受action 加载商品列表
  yield takeEvery(loadProducts, handleLoadProducts)
}