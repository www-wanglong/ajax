import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';
import routes from '../share/routes';
import { renderRoutes } from 'react-router-config';
import { Provider }  from 'react-redux'

import serialize from 'serialize-javascript'

export default (req, store) => {
  // 转换之后的html字符串
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  const initialState = serialize(store.getState())
  return  `
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.initialState = ${initialState}</script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}