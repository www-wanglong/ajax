export default function unmountNode(node) {
  const virtualDOM = node._virtualDOM
  // 1. 文本节点直接删除
  if (virtualDOM.type === 'text') {
    node.remove()
    return
  }

  // 2. 组件生成的节点 调用生命周期函数
  let component = virtualDOM.component
  if (component) {
    console.log(11)
    component.componentWillUnmount()
  }

  // 3. ref属性删除
  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(null)
  }

  // 4. 删除事件属性
  Object.keys(virtualDOM.props).forEach( propName => {
    if (propName.slice(0, 2) === 'on') {
      const eventName = propName.toLowerCase().slice(0, 2)
      const eventHandler = virtualDOM.props[propName]
      node.removeEventListener(eventName, eventHandler)
    }
  })

  // 5. 删除子节点
  if (node.childNodes.length > 0) {
    for (let i = 0; i < node.childNodes.length; i++) {
      unmountNode(node.childNodes[i])
      i--
    }
  }

  node.remove()

}