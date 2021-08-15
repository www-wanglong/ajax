import { createDOMElement } from '../../DOM'
import { createReactInstance } from '../createReactInstance'

const createStateNode = fiber => {
  if (fiber.tag === 'host_component') {
    // 创建节点的dom对象
    return createDOMElement(fiber)
  }

  // 组件
  return createReactInstance(fiber)

  // 组件
}

export default createStateNode