
/**
 *
 * createStore
 *
 * enhancer 对返回的store进行增强
 * @param {*} reducer
 * @param {*} preloadedState
 */
function createStore (reducer, preloadedState, enhancer) {
  if (typeof reducer !== 'function') throw new Error('reducer必须是函数')

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('enhancer 必须是函数')
    }

    return enhancer(createStore)(reducer, preloadedState)
  }
  // store对象中存储的状态
  var currentState = preloadedState
  // 存放订阅者函数
  var currentListeners = []
  // 获取状态 使用必包
  function getState () {
    return currentState
  }

  // 触发action
  function dispatch (action) {
    if (!isPlainObject(action)) { //判断action是否是对象
      throw new Error('action必须是对象')
    }
    if (typeof action.type === 'undefined') {
      throw new Error('action对象中必须有type属性')
    }
    currentState = reducer(currentState, action)
    // 调用订阅着
    for (var i = 0; i < currentListeners.length; i++) {
      var listener = currentListeners[i]
      // 调用订阅着
      listener()
    }
  }

  // 订阅状态
  function subscribe (listener) {
    currentListeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}

// 判断是否是对象
function isPlainObject (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false
  }
  // 区分数组的对象 原型对象对比
  var porto = obj
  while (Object.getPrototypeOf(porto) != null) {
    porto = Object.getPrototypeOf(porto)
  }
  return Object.getPrototypeOf(obj) === porto
}

function applyMiddleware (...middlers) {
  return function (createStore) {
    return function (reducer, preloadedState) {
      // 创建store
      var store = createStore(reducer, preloadedState)
      var middlewareApi = {
        getState: store.getState,
        dispatch: store.dispatch
      }

      // 调用中间件
      var chain = middlers.map(middleware => middleware(middlewareApi))

      var dispatch = compose(...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}

function compose () {
  var funcs = [...arguments]
  return function(dispatch) {
    for (var i = funcs.length - 1; i >= 0; i--) {
      dispatch = funcs[i](dispatch)
    }
    return dispatch
  }
}


function bindActionCreators (actionCreators, dispatch) {
  var boundActionCreators = {}

  for (var key in actionCreators) {
    (
      function (key) {
        boundActionCreators[key] = function () {
          dispatch(actionCreators[key]())
        }
      }
    )(key)
  }
  return boundActionCreators
}

function combineReducers (reducers) {
  // 1.检测reducer类型 必须是函数
  var reducerKeys = Object.keys(reducers)
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i]
    if (typeof reducers[key] !== 'function') {
      throw new Error('reducer必须是函数')
    }
  }

  // 2.
  return function (state, action) {
    var nextState = {}
    for (var i = 0; i < reducerKeys.length; i++) {
      var key = reducerKeys[i]
      var reducer = reducers[key]
      //获取对象的state
      var previousStateForKey = state[key]
      nextState[key] = reducer(previousStateForKey, action)
    }
    return nextState
  }
}