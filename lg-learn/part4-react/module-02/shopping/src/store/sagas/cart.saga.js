import { takeEvery, put } from 'redux-saga/effects'
import { addProductToCart, addProductToLocalCart, changeLocalProductNumber, changeServiceProductNumber, deleteProductFromCart, deleteProductFromLocalCart, loadCarts, saveCarts } from '../actions/cart.actions'
import axios from 'axios'

// 向服务器发起请求 添加数据
function* handleAddProductToCart (action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', {gid: action.payload })
  yield put(addProductToLocalCart(data))
}

// 加载数据
function* handleLoadCarts (action) {
  const { data } = yield axios.get('http://localhost:3005/cart')
  yield put(saveCarts(data))
}

// 删除数据
function* handleDeleteProductFromCart (action) {
  const { data } = yield axios.delete('http://localhost:3005/cart/delete', {
    params: {
      cid: action.payload
    }
  })
  yield put(deleteProductFromLocalCart(action.payload))
}

// 改变购物车商品数量
function* handleChangeServiceProductNumber (action) {
  const { data } = yield axios.put('http://localhost:3005/cart', action.payload)
  yield put(changeLocalProductNumber(data))
}

export default function* cartSaga () {
  yield takeEvery(addProductToCart, handleAddProductToCart)
  yield takeEvery(loadCarts, handleLoadCarts)
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart)
  yield takeEvery(changeServiceProductNumber, handleChangeServiceProductNumber)
}

