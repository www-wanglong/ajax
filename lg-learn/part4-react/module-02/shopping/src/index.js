import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import { store } from './store';
import './styles.css'

ReactDOM.render(
  // Provider 传递store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);