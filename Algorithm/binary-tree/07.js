// 对称的二叉树

// 实现一个函数，用来判断一颗二叉树是不是对称的。

function isSymmetrical(pRoot) {
  return isSymmetricalTree(pRoot, pRoot)
}

function isSymmetricalTree(node1, node2) {
  if (!node1 && !node2) {
    return true
  }
  if (!node1 || !node2) {
    return false
  }
  if (node1.val !== node2.val) {
    return false
  }

  return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left)
}