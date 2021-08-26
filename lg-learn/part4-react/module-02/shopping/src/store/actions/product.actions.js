import { createAction } from 'redux-actions'

// 获取数据
export const loadProducts = createAction('load products')
// 将商品数据保存到本地的store中
export const saveProducts = createAction('save products')