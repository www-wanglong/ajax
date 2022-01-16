// 二叉树的后序遍历

// 输入一个整数数组，判断该数组是不是某二叉树搜索树的后序遍历结果。
//     5
//   2   6
// 1   3
// 1 3 2 6 5
// 1. 根据第一个大于跟元素的选项划分 左树和右树
// 2. 判断右树的全部大于跟节点
// 3.递归遍历划分的左树 和 右数 判断是否满足规则
// 4.知道剩余一个返回true
function verifyPostOrder(postOrder) {
  return recur(postOrder, 0, postOrder.length - 1)
}

function recur(postOrder, i, j) {
  if (i >= j) {
    return true
  }
  let p = i
  while (postOrder[p] < postOrder[j]) {
    p++
  }
  let m = p
  while (postOrder[p] > postOrder[j]) {
    p++
  }
  return p === j && recur(postOrder, i, m - 1) && recur(postOrder, m, j - 1)
}