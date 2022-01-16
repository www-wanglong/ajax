// 二叉搜索树的第k个节点

// 给定一颗二叉树，请找出其中的第k小的节点。
// 例如，（5，3，7，2，4，6，8）中，按节点树值大小顺序第三小节点的值为4

// 二叉搜索树的中序遍历即排序后的节点


// 递归实现
function kthNode(pRoot, k) {
  const arr = []
  loopThrough(pRoot, arr)
  if (k > 0 && k <= arr.length) {
    return arr[k - 1]
  }
  return null
}

function loopThrough(node, arr) {
  if (node) {
    loopThrough(node.left, arr)
    arr.push(node.val)
    loopThrough(node.right, arr)
  }
}