// 前序遍历二叉树 - 根左右
const tree = require('./01')


// 递归
var preOrder1 = function (root, array = []) {
  if (root) {
    array.push(root.data)
    preOrder(root.left, array)
    preOrder(root.right, array)
  }
  return array

}

// 非递归实现
var preOrder = function (root) {
  let result = []
  let stack = []
  let current = root
  while (current || stack.length > 0) {
    while (current) {
      result.push(current.data)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }
  return result
}


console.log(preOrder(tree.root))