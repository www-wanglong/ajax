import { handleActions as createReducer } from 'redux-actions'
import { saveProducts } from '../actions/product.actions'

const initialState = []

const handleSaveProducts = (state, action) => action.payload

export default createReducer({
  // 将商品列表保存到本地的store中
  [saveProducts]: handleSaveProducts
}, initialState)