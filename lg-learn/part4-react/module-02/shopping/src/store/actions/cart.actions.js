import { create } from 'lodash'
import { createAction } from 'redux-actions'
// 向服务器发送请求
export const addProductToCart = createAction('addProductToCart')

// 添加到本地
export const addProductToLocalCart = createAction('addProductToLocalCart')

// 向服务器发送请求
export const loadCarts = createAction('loadCarts')

// 保存服务器的数据
export const saveCarts = createAction('saveCarts')

// 删除服务器端购物车商品
export const deleteProductFromCart = createAction('deleteProductFromCart')

// 删除本地数据
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart')

// 向服务器发请求 改变商品数量
export const changeServiceProductNumber = createAction('changeServiceProductNumber')

// 改变本地商品数量
export const changeLocalProductNumber = createAction('changeLocalProductNumber')