// 二叉树的基本操作
function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
}

Node.prototype = {
  show: function () {
    console.log(this.data)
  }
}

function Tree() {
  this.root = null
}

Tree.prototype = {

  // 插入
  insert: function (data) {
    var node = new Node(data, null, null)
    if (!this.root) {
      this.root = node
      return
    }
    var current = this.root
    var parent = null

    while (current) {
      parent = current
      if (data < parent.data) {
        current = current.left
        if (!current) {
          parent.left = node
          return
        }
      } else {
        current = current.right
        if (!current) {
          parent.right = node
          return
        }
      }
    }
  },

  preOrder: function (node) {
    if (node) {
      node.show();
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  },

  middleOrder: function (node) {
    if (node) {
      this.middleOrder(node.left)
      node.show()
      this.middleOrder(node.right)
    }
  },

  laterOrder: function (node) {
    if (node) {
      this.middleOrder(node.left)
      this.middleOrder(node.right)
      node.show()
    }
  },

  getMin: function () {
    var current = this.root;
    while (current) {
      if (!current.left) {
        return current
      }
      current = current.left
    }
  },

  getMax: function () {
    var current = this.root
    while (current) {
      if (!current.right) {
        return current
      }
      current = current.right
    }
  },

  getDeep: function (node, deep) {
    deep = deep || 0
    if (node === null) {
      return deep
    }
    deep++
    var dLeft = this.getDeep(node.left, deep)
    var dRight = this.getDeep(node.right, deep)
    return Math.max(dLeft, dRight)
  },

  //数查找
  getNode: function (data, node) {
    if (node) {
      if (data === node.data) {

      } else if (data < node.data) {
        return this.getNode(data, node.left)
      } else {
        return this.getNode(data, node.right)
      }
    } else {
      return null
    }
  }
}


var t = new Tree();
t.insert(1);
t.insert(4);
t.insert(3);
module.exports = t
// t.insert(2);
// t.insert(5);
// t.insert(7);
// t.insert(6);
// t.insert(0);
// // console.log(t);
// // t.middleOrder(t.root);
// // console.log(t.getMin(), t.getMax());
// // console.log(t.getDeep(t.root, 2));

// // 二分查找
// function binarySearch(data, arr, start, end) {
//   if (start > end) {
//     return -1
//   }
//   var mid = Math.floor((end + start) / 2)
//   if (data === arr[mid]) {
//     return mid
//   } else if (data < arr[mid]) {
//     return binarySearch(data, arr, start, mid - 1)
//   } else {
//     return binarySearch(data, arr, mid + 1, end)
//   }
// }

// var arr = [0,1,1,1,1,4,6,7,8,10]

// console.log(binarySearch(8, arr, 0, arr.length-1))
