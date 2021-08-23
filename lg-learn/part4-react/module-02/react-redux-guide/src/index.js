import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  // 通过Provider将store放到全局
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
