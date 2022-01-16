//  二叉树的最小深度

function minDepth (root) {
  if (!root) {
    return 0
  }
  if (!root.left) {
    return 1 + maxDepth(root.right)
  }

  if (!root.right) {
    return 1 + maxDepth(root.left)
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}