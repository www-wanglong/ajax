// 二叉树的最大深度

// 给定一个二叉树，找出最大的深度

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点树

// 叶子节点是指没有子节点的节点

// 左子树的深度 与 右子树深度 + 1
function maxDepth(root) {
  if (!root) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

// 广度遍历
function maxDepth(root) {
  if (root === null) {
    return 0
  }
  let queue = [root]
  let res = 0
  while (queue.length === 0) {
    let tmp = []
    for (let node in queue) {
      if (node.left) {
        tmp.push(node.left)
      }
      if (node.right) {
        tmp.push(node.right)
      }
    }
    queue = tmp
    res++
  }
  return res
}