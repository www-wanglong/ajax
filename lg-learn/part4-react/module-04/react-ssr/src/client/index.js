import React from 'react';
import ReactDom from 'react-dom'
import Home from '../share/pages/Home'

// 为组件添加事件，二次渲染的时候会复用 原先的节点
ReactDom.hydrate(<Home />, document.getElementById('root'))