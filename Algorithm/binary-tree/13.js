// 平衡二叉树

// 输入一棵二叉树，判断该二叉树是否是平衡二叉树

// 平衡二叉树：每个子树的深度之差不超过1

// 后续遍历

function isBalanced (root) {
  return balanced(root) !== -1
}

function balanced(node) {
  if (!node) {
    return 0
  }

  const left = balanced(node.left)
  const right = balanced(node.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }

  return Math.max(left, right) + 1
}