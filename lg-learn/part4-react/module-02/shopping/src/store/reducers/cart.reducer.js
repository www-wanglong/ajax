import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart, changeLocalProductNumber, deleteProductFromLocalCart, saveCarts } from '../actions/cart.actions'

const initialState = []

/**
 * 将商品添加到购物车
 * @param {*} state
 * @param {*} action
 */
const handleAddProductToLocalCart = (state, action) => {
  // 1.商品没有在 购物车
  // 2.商品已经在 购物车
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find( product => product.id === action.payload.id)
  if (product) {
    product.count += 1
  } else {
    newState.push(action.payload)
  }
  return newState
}

// 保存服务器端返回的数据
const handleSavaCarts = (state, action) => action.payload

// 删除购物车中的商品
const handleDeleteProductFromLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const index = newState.findIndex( product => product.id === action.payload )
  newState.splice(index, 1)
  return newState
}

// 改变购物车中的商品数量
const handleChangeLocalProductNumber = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find( product => product.id === action.payload.id  )
  product.count = action.payload.count
  return newState
}

export default createReducer({
  [addProductToLocalCart]: handleAddProductToLocalCart,
  [saveCarts]: handleSavaCarts,
  [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
  [changeLocalProductNumber]: handleChangeLocalProductNumber,
}, initialState)