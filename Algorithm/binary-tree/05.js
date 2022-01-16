// 后续遍历
// 左子树，然后遍历右子树，最后访问根结点
const tree = require('./01')


// 递归
var preOrder1 = function (root, array = []) {
  if (root) {
    preOrder1(root.left, array)
    preOrder1(root.right, array)
    array.push(root.data)
  }
  return array

}

// 非递归实现
var preOrder2 = function (root) {
  let result = []
  let stack = []
  let last = null
  let current = root
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack[stack.length - 1]
    if (!current.right || current.right === last) {
      current = stack.pop()
      result.push(current.data)
      last = current
      current = null
    } else {
      current = current.right
    }
  }
  return result
}


console.log(preOrder2(tree.root))