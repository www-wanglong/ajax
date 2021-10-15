import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h'; // 创建虚拟dom

const patch = init([]);

// h函数参数1 标签+选择器
// h函数参数2 如果是字符串就是标签中的文本内容
let vnode = h('div#container.cls', 'hello world')
let app = document.querySelector('#app')

// patch参数1 旧的VNode
// patch参数2 新的VNode
let oldVnode = patch(app, vnode)

// 新的div
vnode = h('div#container.xxx', 'hello snabbdom')
patch(oldVnode, vnode)
