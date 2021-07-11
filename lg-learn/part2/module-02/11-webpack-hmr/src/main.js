import createEditor from './editor'
import background from './better.png'
import './global.css'

const editor = createEditor()
document.body.appendChild(editor)

const img = new Image()
img.src = background
document.body.appendChild(img)

console.log(createEditor)
  if (module.hot) {
  // 注册模块更新 处理函数
  let lastEditor = editor
  module.hot.accept('./editor', () => {
    // 保留之前的状态
    const value = lastEditor.innerHTML
    console.log('editor更新了')
    console.log(createEditor)
    document.body.removeChild(editor)
    const newEditor = createEditor()
    newEditor.innerHTML = value
    document.body.appendChild(newEditor)
    lastEditor = newEditor
  })


  module.hot.accept('./better.png', () => {
    img.src = background
    console.log(background)
  })
}
