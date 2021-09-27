import React from 'react';
import { Router } from '@reach/router'
import Setting from '../components/setting'
import PrivateRouter from '../components/PrivateRouter'
import Create from '../components/create'

/**
 * 配置客户端路由组件
 * @param {*} props
 */
function App(props) {
  return (
    <Router>
      <PrivateRouter component={Setting} path="/app/setting" />
      <PrivateRouter component={Create} path="/app/create" />
    </Router>
  );
}

export default App;