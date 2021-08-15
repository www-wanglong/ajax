/**
 * 获取跟节点
 * @param {*} instance
 */

const getRoot = instance => {

  let fiber = instance.__fiber

  while(fiber.parent) {
    fiber = fiber.parent
  }

  return fiber

}
export default getRoot