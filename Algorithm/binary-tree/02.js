// 二叉树中序遍历
// - 遍历左子树，然后访问根结点，最后遍历右子树
const tree = require('./01')

// 递归实现
var middleOrder1 = function (root, array = []) {
  if (root) {
    middleOrder(root.left, array)
    array.push(root.data)
    middleOrder(root.right, array)
  }
  return array
}

// 非递归实现
// 在栈中存储左边的节点

var middleOrder = function (root) {
  const result = []
  let current = root
  let stack = []
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    result.push(current.data)
    current = current.right
  }
  return result
}

console.log('result',middleOrder(tree.root))
