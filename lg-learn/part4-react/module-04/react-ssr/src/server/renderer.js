import React from 'react';
import Home from '../share/pages/Home';
import { renderToString } from 'react-dom/server'


export default () => {
  // 转换之后的html字符串
  const content = renderToString(<Home />)
  return  `
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}