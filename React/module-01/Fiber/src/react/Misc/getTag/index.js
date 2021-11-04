import { Component } from '../../Component'
const getTag = vDom => {
  // 普通节点
  if (typeof vDom.type === 'string') {
    return 'host_component'
  }

  if (Object.getPrototypeOf(vDom.type) === Component) {
    return 'class_component'
  }

  return 'function_component'
}

export default getTag