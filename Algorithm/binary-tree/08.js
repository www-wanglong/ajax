// 二叉树的镜像

function mirror(root) {
  if (root) {
    const temp = root.right
    root.right = root.left
    root.left = temp
    mirror(root.right)
    mirror(root.left)
  }
  return root
}
