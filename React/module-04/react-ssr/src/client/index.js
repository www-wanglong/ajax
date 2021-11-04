import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../share/routes'
import { Provider } from 'react-redux';
import store from './createStore';

// 为组件添加事件，二次渲染的时候会复用 原先的节点
ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)