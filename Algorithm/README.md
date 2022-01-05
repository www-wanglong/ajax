# 算法学习专项

https://juejin.cn/post/6844903919722692621#heading-14

http://www.conardli.top/docs/dataStructure/

# 一、时间复杂度和空间复杂度
## 1.1 时间复杂度
一个算法的时间复杂度反映了程序运行从开始到结束所需要的时间。把算法中基本操作重复执行的次数，作为算法的时间复杂度。

没有循环的语句，记住O(1)，也称为常数阶。只有一重循环，则算法的基本操作的执行频度与问题规模n呈线性增大关系，记住O(n)，叫线性阶。

## 1.2 常见的时间复杂度
- O(1)
- O(log n)
- O(n)
- O(n^2)
- O(n^3)
- O(2^n)
- O(n!)

## 1.2 空间复杂度
一个程序的空间复杂度是指运行完一个程序所需内存的大小。利用程序的空间复杂度，可以对程序的运行所需要的内存多少有个预估。

# 2. 数据结构
> 数据元素相互之间存在的一种和多种特定的关系集合。
一般可以从逻辑结构和存储结构理解。
## 2.1 逻辑结构
数据之间的关系，逻辑结构大概统一的可以分成：线性结构、非线性结构。

线性结构：一个有序数据元素的集合。其中数据元素之间的关系是一对一的关系，即除了第一个和最后一个数据元素之外，其他数据元素都是首尾相连。

常用的线性结构：栈、队列、链表、线性表

非线性结构：各个数据元素不再保持在一个线性序列中，每个数据元素可能与零个或者多个其他数据元素发生关系。

常见的非线性结构有 二维数组、树等

## 2.2 存储结构
逻辑结构指的是数据间的关系，而存储结构是逻辑结构用计算机语言的实现，创常见的存储结构有顺序存储、链式存储、索引存储以及散列存储。

例如：数组在内存中的位置是连续的，它属于顺序存储；链表是主动建立数据间的关联关系的，在内存中却不一定是连续的，它属于链式存储；还有顺序和逻辑上都不存在顺序的关系，但是你可以通过一定的方式去访问它的哈希表，数据散列存储。

## 2.3 数据结构 - 二叉树
模拟具有树状结构性质的数据集合。
### 2.3.1 二叉树遍历
#### 2.3.1.1 中序遍历
```JavaScript
var tree = {
  root: {
    val: 1,
    left: {
      val: null
    },
    right: {
      val: 2,
      left: {
        val: 3
      }
    }
  }
}
```
## 2.4 数据结构 - 链表
### 2.4.1 概览
用一组任意存储的单元来存储线性表的数据元素。一个对象存储着本身的值和细哦一个原则的地址
- 需要遍历才能查询到元素，查询慢
- 插入元素只需要断开链接重新赋值，插入快
### 2.4.2 从尾到头打印链表
```JavaScript
function printListFromTailToHead (head) {
  const array = []
  while (head) {
    array.unshift(head.val)
    head = head.next
  }
  return array
}
```
### 2.4.3 反转链表

```JavaScript
node1 = {
  val: 1,
  next: node2
}

node2 = {
  val: 2,
  next: node3
}

node3 = {
  val: 3,
  next: null
}
// 让当前node节点的next指向上一个
var reverseList = function(head) {
    var prev = null
    var current = head
    while (current) {
      let next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return prev
};
```
### 2.4.4 复杂链表的复制
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针执行任意一个节点），返回结果为复制后复杂链表的head

思路

- 1. 复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N，把N直接放在N的next位置，让复制后的链表和原始链表组成新的链表
- 2. 给复制的链表randon复制，即N.random=N.random.next
- 3. 拆分链表，将N`和N进行拆分，保证原始链表不受影响

![image](./images/3.png)
```JavaScript

function clone(pHead) {
  if (!pHead) {
    return null
  }
  cloneNodes(pHead)
  cloneRandom(pHead)
  return reconnectNodes(pHead)
}

function cloneNodes(pHead) {
  var current = pHead
  while (current) {
    var cloneNode = {
      val: current.val,
      next: current.next
    }
    current.next = cloneNode
    current = cloneNode.next
  }
}

function cloneRandom(pHead) {
  var current = pHead
  while(current) {
    var cloneNode = current.next
    if (current.random) {
      cloneNode.random = current.random.next
    } else {
      cloneNode.random = null
    }
    current = cloneNode.next
  }
}

function reconnectNodes(pHead) {
  var cloneHead = pHead.next
  var cloneNode = pHead.next
  var current = pHead
  while (current) {
    current.next = cloneNode.next
    current = cloneNode.next
    if (current) {
      cloneNode.next = current.next
      cloneNode = current.next
    } else {
      cloneNode.next = null
    }
  }
  return cloneHead
}
```
### 2.4.5 合并两个排序的链表
解题思路
![image](./images/two-head.png)
```JavaScript
function merge(pHead1, pHead2) {
  if (!pHead1) {
    return pHead2
  }
  if (!pHead2) {
    return pHead1
  }

  let head
  if (pHead1.val < pHead2.val) {
    head = pHead1
    head.next = merge(pHead1.next, pHead2)
  } else {
    head = pHead2
    head.next = merge(pHead1, pHead2.next)
  }
  return head
}
```

### 2.4.6 链表倒数第k个节点
输入一个链表，输出该链表中倒数第k个节点
```JavaScript
// 1 2 3 4 5
function findKthToTail(head, k) {
  if (!head || !k) {
    return null
  }
  let current = head
  let result = head
  let index = 1
  while (current.next) {
    index++
    current = current.next
    if (index > k) {
      result = result.next
    }
  }
  return (k <= index) && result
}
```

### 2.4.7 链表中环的入口
给一个链表，若其中包括环，请找出该链表的环的入口节点，否则，输出`null`
解题思路：
- 1. 先判读是否有环
p1和p2开始从头出发，p1走两步，p2走一步，如果可以相遇则环存在
- 2. 找出环的长度
从环内某个节点开始计数，再回到此节点得到链表的长度length
- 3. 找出公共的节点
让p1、p2回到head节点，让p1先走length步（想当于p1想走了一个环的长度，剩余的长度和环外的长度相等），当p1和p2相遇时即为链表环的起点
```JavaScript
function entryNodeOfLoop (head) {
  if (!head || !head.next) {
    return null
  }
  // 1. 先判读是否有环
  let p1 = head.next
  let p2 = head.next.next
  while (p1 !== p2) {
    if (p2 == null || p2.next === null) {
      return null
    }
    p1 = p1.next
    p2 = p1.next.next
  }
  // 2. 找到长度
  let temp = p1
  let length = 1
  p1 = p1.next
  while (p1 !== temp) {
    p1 = p1.next
    length++
  }

  // 3. 找到节点
  p1 = head
  p2 = head
  while (length-- > 0) {
    p1 = p1.next
  }
  while (p1 !== p2) {
    p1 = p1.next
    p2 = p2.next
  }
  return p1
}
```
### 2.4.8 两个链表的第一个公共节点
输入两个链表，找出它们的公共节点
![image](./images/2.png)

思路：
- 1. 找出两个链表的长度: `length1`、`length2`
- 2. 让较长的两线先走length2 - length1步
- 3. 然后两个两步同时前进知道找到相同的第一个节点
```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(head1, head2) {
    let length1 = getNodeLength(head1)
    let length2 = getNodeLength(head2)
    if (length1 > length2) {
      head1 = nodeAdvanceStep(head1, length1 - length2)
    } else {
      head2 = nodeAdvanceStep(head2, length2 - length1)
    }
    while (head1 !== head2) {
        head1 = head1.next
        head2 = head2.next
    }

  return head1
};

function nodeAdvanceStep (head, step) {
  if (!head) {
    return null
  }
  console.log(head.val, step)
  while (step-- > 0) {
    head = head.next
  }
  return head
}

function getNodeLength (head) {
  if (!head) {
    return null
  }
  let length = 0
  while (head) {
    head = head.next
    length++
  }
  return length
}
```
### 2.4.9 圈圈中最后剩下的数字
### 2.4.10 删除链表中的节点or重复的节点
#### 2.4.10.1 删除链表中的节点

- 1.删除的节点不是尾部节点 - 将next节点覆盖当前节点
- 2.删除的节点是尾部节点且等于头部节点，只剩一个节点 - 将头部节点只为null
- 3.删除的节点是尾节点且前面还有节点 - 遍历到未尾的前一个节点删除

```JavaScript
function deleteNode (head, node) {
  if (node.next) {
    node.val = node.next.val
    node.next = node.next.next
  } else if (node === head) {
    head = null
    node = null
  } else {
    node = head
    while (node.next.next) {
      node = node.next
    }
    node.next = null
    node = null
  }
  return null
}
```
#### 2.4.10.2 删除链表中重复节点
方法1. 存储链表中元素出现的次数
- 1. 用map存储每个节点出现的次数
- 2. 删除出现次数大于1的节点

方法2. 重新比较连接数组

链表是排好顺序的，所以重复元素都会相邻
- 1. 当前节点或当前节点的next为空，返回该节点
```JavaScript
var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head
    } else if (head.val === head.next.val) {
        let nextNode = head.next
        while (nextNode && nextNode.val === head.val) {
            nextNode = nextNode.next
        }
        head.next = nextNode
        deleteDuplicates(nextNode)
        return head
    } else {
       head.next =  deleteDuplicates(head.next)
       return head
    }
};
```

## 2.5 数据结构 - 数组

### 2.5.1 把数组排成最小的数
输入一个正整数数组，把数组里所有数字拼接起来排成一个树，打印能拼接的所有数字中最小的一个。

本质是重新定义数组排序的规则。
```JavaScript
function printMinNumber(numbers) {
  if (!numbers || numbers.length == 0) {
    return ''
  }
  return numbers.sort(compare).join('')
}

function compare(a ,b) {
  const front = '' + a + b
  const behind = '' + b + a
  return front - behind
}
```

### 2.5.2 第一个只出现一次的字符
解法1：使用map记录出现的次数
```JavaScript
function firstNotRepeatingChar(str) {
  if (!str) {
    return -1
  }
  let countMap = {}
  for (let i = 0; i < str.length; i++) {
    if (countMap[str[i]]) {
      countMap[str[i]] = ++countMap[str[i]]
    } else {
      countMap[str[i]] = 1
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (countMap[str[i]] === 1) {
      return str[i]
    }
  }
  return -1
}
```

### 2.5.3 调整数组顺序使奇数位于偶数前面  - 双指针实现
- start遍历到偶数，end遍历到奇数是交换位置
```JavaScript
function reOrderArray (array) {
  var start = 0
  var end = arr.length -1
  while (start > end) {
    while (array[start] % 2 === 1) {
      start++
    }

    while (array[start] % 2 === 0) {
      end++
    }
    [array[start], array[end]] = [array[end], array[start]]

  }
}
```
## 2.6 数据结构 - 栈和队列
## 2.7 数据结构 - 哈希表
## 2.8 数据结构 - 堆