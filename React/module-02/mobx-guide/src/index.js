import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react'
import counter from './stores/counterStore'
import todo from './stores/todoStore'
import './index.css'

ReactDOM.render(
  <Provider todo={todo} counter={counter}>
    <App />
  </Provider>,
  document.getElementById('root')
);
