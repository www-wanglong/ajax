// 二叉树中和为某一值的路径

// 输入一棵二叉树的根节点和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
// 路径定义为从树的根节点开始往下一直到叶节点所经过的节点形成的一条路径

// 思路 采用 跟 左 右 前序遍历的思想来解决这个问题

function findPath(root, sum) {
  let res = []
  if (root) {
    findPathCore(root, expectNumber, [], 0, result)
  }
  return res
}

function findPathCore(node, expectNumber, stack, sum, result) {
  stack.push(node.val)
  sum += node.val
  if (!node.left && !node.right && sum === expectNumber) {
    result.push(stack.slice(0))
  }

  if (node.left) {
    findPathCore(node.left, expectNumber, stack, sum, result)
  }

  if (node.right) {
    findPathCore(node.right, expectNumber, stack, sum, result)
  }

  stack.pop()

}