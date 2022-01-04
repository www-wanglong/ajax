class Node {
  constructor (element, next) {
    this.element = element
    this.next = next
  }
}

class LinkedList {
  constructor(head, size) {
    this.head = null
    this.size = 0
  }

  _getNode (index) {
    if (index < 0 || index >= this.size) {
      throw new Error('cross this border')
    }
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  add (index, element) {
    if (arguments.length === 1) {
      element = index
      index = this.size
    }
    if (index < 0 || index > this.size) {
      throw new Error('cross this border')
    }
    if (index === 0) {
      // 保存原有head指向
      let head = this.head
      this.head = new Node(element, head)
    } else {
      let prevNode = this._getNode(index - 1)
      prevNode.next = new Node(element, prevNode.next)
    }
    this.size++
  }

  remove (index) {
    let rmNode = null
    if (index === 0) {
      rmNode = this.head
      if (!rmNode) {
        return undefined
      }
      this.head = rmNode.next
    } else {
      let prevNode = this._getNode(index - 1)
      rmNode = prevNode.next
      prevNode.next = rmNode.next
    }
    this.size--
    return rmNode
  }

  set (index, element) {
    let node = this._getNode(index)
    node.element = element
  }

  get (index) {
    return this._getNode(index)
  }

  clear () {
    this.head = null
    this.size = 0
  }


}

const l1 = new LinkedList()
// l1.add('node1')
// l1.add('node1.5')
// l1.add('node2')
// console.log(l1)

class Queue {
  constructor () {
    this.linkedList = new LinkedList()
  }

  enQueue (data) {
    this.linkedList.add(data)
  }

  deQueue () {
    return this.linkedList.remove(0)
  }

}


const q = new Queue()

module.exports = Queue