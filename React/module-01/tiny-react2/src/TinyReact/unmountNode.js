export default function unmountNode (node) {
  const virtualDOM = node._virtualDOM
  if (virtualDOM.type === 'text') {
    node.remove()
    return
  }
  let component = virtualDOM.component

  if (component) {
    component.componentWillUnmount()
  }

  if (virtualDOM.poops && virtualDOM.props.ref) {
    virtualDOM.props.ref(null)
  }

  Object.keys(virtualDOM.props).forEach((propName) => {
    if (propName.slice(0, 2) === 'on') {
      node.removeEventListener(propName.toLowerCase.slice(2), virtualDOM.props[propName])
    }
  })

  if (node.childNodes.length > 0) {
    for (let i = 0; i < node.childNodes.length; i++) {
      unmountNode(node.childNodes[i])
      i--
    }
  }
  node.remove()
}