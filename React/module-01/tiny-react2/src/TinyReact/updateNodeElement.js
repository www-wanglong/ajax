export default function updateNodeElement (
  newElement,
  virtualDOM = {},
  oldVirtualDOM = {}
) {
  const newProps = virtualDOM.props || {}
  const oldProps = oldVirtualDOM.props || {}

  Object.keys(newProps).forEach((propName) => {
    const newPropValue = newProps[propName]
    const oldPropsValue = oldProps[propName]
    if (newPropValue !== oldPropsValue) {
      if (propName.slice(0, 2) === 'on') { // 事件属性
        // 事件名称
        const eventName = propName.toLowerCase().slice(2)
        newElement.addEventListener(eventName, newPropValue)

        if (oldPropsValue) {
          // 删除原有的事件处理函数
          newElement.removeEventListener(eventName, oldPropsValue)
        }
      } else if (propName !== 'children') {
        if (propName === 'className') {
          newElement.setAttribute('class', newPropValue)
        } else {
          newElement.setAttribute(propName, newPropValue)
        }
      }
    }
  })

  // 属性被删除操作
  Object.keys(oldProps).forEach((propName) => {
    const newPropsValue = newProps[propName]
    const oldPropsValue = oldProps[propName]
    if (!newPropsValue) {
      if (propName.slice(0, 2) === 'on') {
        // 事件名称
        const eventName = propName.toLowerCase().slice(2)
        newElement.removeEventListener(eventName, oldPropsValue)
      } else if (propName !== 'children') {
        newElement.removeAttribute(propName)
      }
    }
  })

}