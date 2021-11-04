import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h'; // 创建虚拟dom

const patch = init([])

let vnode = h('div#container', [
  h('h1', 'hello snabbdom'),
  h('p', 'this is p')
])

let app = document.querySelector('#app')
let oldVnode = patch(app, vnode)

setTimeout(() => {
  // vnode = h('div#container', [
  //   h('h1', 'hello h1'),
  //   h('p', 'hello p')
  // ])
  // 清除div中内容
  patch(oldVnode, h('!'))
  patch(oldVnode, vnode)
}, 2000)

