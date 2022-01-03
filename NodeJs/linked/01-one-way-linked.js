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

  add (index, element) {
    if (arguments.length === 1) {
      element = index
      index = this.size
    }
  }

}

const l1 = new LinkedList()
l1.add(0, 'node1')
console.log(l1)