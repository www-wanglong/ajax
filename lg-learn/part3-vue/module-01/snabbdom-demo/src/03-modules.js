import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h'; // 创建虚拟dom

// 1. 导入模块
import { styleModule } from 'snabbdom/build/package/modules/style';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners';
// 2. 注册模块
const patch = init([
  styleModule,
  eventListenersModule,
])
// 3. 使用h() 函数的第二个参数
let vnode = h('div', [
  h('h1', { style: { backgroundColor: 'red' } }, 'hello h1'),
  h('p', { on: { click: eventHandler } }, 'hello p'),
])

function eventHandler () {
  console.log('p')
}

let app = document.querySelector('#app')

patch(app, vnode)