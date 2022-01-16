// 重构二叉树
// 输入某二叉树的前序遍历和中序遍历的结构，请重构建出二叉树

// 前序遍历：跟 + 左 + 右
// 中序遍历：左 + 跟 + 右
// 前序遍历：左 + 右 + 跟

function tree (pre, vin) {
  if (pre.length === 0) {
    return null
  }

  if (pre.length === 1) {
    return new TreeNode(pre[0])
  }

  const value = pre[0]
  const index = vin.indexOf(value)
  const vinLeft = vin.slice(0, index)
  const vinRight = vin.slice(index + 1)
  const preLeft = pre.slice(1, index + 1)
  const preRight = pre.slice(index + 1)
  const node = new TreeNode(value)
  value.left = tree(preLeft, vinLeft)
  value.right = tree(preRight, vinRight)
  return node
}


