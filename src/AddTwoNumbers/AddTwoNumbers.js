class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addNode(item) {
    const node = new ListNode(item)

    if (!this.head) {
      this.head = node
      this.tail = node
      return this
    }

    this.tail.next = node
    this.tail = node

    return this
  }
}

function addTwoNumbers(l1, l2) {
  let remainder = 0

  let current = l1

  while (current !== null) {
    console.log('++', l1)
    current = current.next
  }

  return []
}

const l1 = new LinkedList()
const l2 = new LinkedList()

l1.addNode(2)
l1.addNode(4)
l1.addNode(3)

l2.addNode(5)
l2.addNode(6)
l2.addNode(4)

const result = addTwoNumbers(l1, l2)

// result, [7, 0, 8]
