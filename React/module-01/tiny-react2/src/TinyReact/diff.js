import createDOMElement from './createDOMElement'
import mountElement from './mountElement'
import updateNodeElement from './updateNodeElement'
import unmountNode from './unmountNode'

export default function diff (virtualDOM, container, oldDOM) {
  let oldVirtualDOM = oldDOM && oldDOM._virtualDOM
  const oldComponent = oldVirtualDOM && oldVirtualDOM.component
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type && typeof virtualDOM.type !== 'function') {
    if (virtualDOM.type === 'text') {
      // 文本节点
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 元素节点
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }

    // 将key
    let keyedElements = {}
    for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
      let domElement = oldDOM.childNodes[i]
      if (domElement.nodeType === 1) {
        let key = domElement.getAttribute('key')
        if (key) {
          keyedElements[key] = domElement
        }
      }
    }

    let hasNoKey = Object.keys(keyedElements).length === 0

    if (hasNoKey) {
      virtualDOM.children.forEach((child, index) => {
        diff(child, oldDOM, oldDOM.childNodes[index])
      })
    } else {
      virtualDOM.children.forEach((child, i) => {
        let key = child.props.key
        if (key) {
          let domElement = keyedElements[key]
          if (domElement) {
            if (oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domElement) {
              oldDOM.insertBefore(domElement, oldDOM.childNodes[i])
            }
          } else {
            // 新增
            mountElement(child, oldDOM, oldDOM.childNodes[i])
          }
        }
      })
    }


    // 删除节点
    let oldChildNodes = oldDOM.childNodes
    if (oldChildNodes.length > virtualDOM.children.length) {
      if (hasNoKey) {
        for (
          let i = oldChildNodes.length - 1;
          i > virtualDOM.children.length -1;
          i--
        ) {
          unmountNode(oldChildNodes[i])
        }
      } else {
        // 通过key属性删除节点
        for (let i = 0; i < oldChildNodes.length; i++) {
          let oldChild = oldChildNodes[i]
          let oldChildKey = oldChild._virtualDOM.props.key
          let found = false
          for (let n = 0; n < virtualDOM.children.length; n++) {
            if (oldChildKey === virtualDOM.children[n].props.key) {
              found = true
              break
            }
          }

          if (!found) {
            unmountNode(oldChild)
          }

        }
      }

    }
  } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== 'function') {
    const newElement = createDOMElement(virtualDOM)
    oldDOM.parentNode.replaceChild(newElement, oldDOM)
  } else if (typeof virtualDOM.type === 'function') {
    diffComponent(virtualDOM, oldComponent, oldDOM, container)
  }
}

function diffComponent (virtualDOM, oldComponent, oldDOM, container) {
  if (isSameComponent(virtualDOM, oldComponent)) {
    updateComponent(virtualDOM, oldComponent, oldDOM, container)
  } else {
    mountElement(virtualDOM, container, oldDOM)
  }
}



function updateComponent (virtualDOM, oldComponent, oldDOM, container) {
  oldComponent.componentWillReceiveProps(virtualDOM.props)
  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    let prevProps = oldComponent.props
    oldComponent.componentWillUpdate(virtualDOM.props)
    // 更新组件实例props
    oldComponent.updateProps(virtualDOM.props)
    let nextVirtual = oldComponent.render()
    nextVirtual.component = oldComponent
    diff(nextVirtual, container, oldDOM)
    oldComponent.componentDidUpdate(prevProps)
  }

}


function isSameComponent (virtualDOM, oldComponent) {
  return oldComponent && virtualDOM.type === oldComponent.constructor
}

/**
 * 更新文本内容
 * @param {*} virtualDOM
 * @param {*} oldVirtualDOM
 * @param {*} oldDOM
 */
function updateTextNode (virtualDOM, oldVirtualDOM, oldDOM) {
  if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
    oldDOM.textContent = virtualDOM.props.textContent
    oldDOM._virtualDOM = virtualDOM
  }
}