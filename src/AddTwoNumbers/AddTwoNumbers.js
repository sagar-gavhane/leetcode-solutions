/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

const addTwoNumbers = function(l1, l2) {
  let reminder = 0
  let l3 = new ListNode(0)

  let current = l3
  while (l1 !== null || l2 !== null) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const val3 = val1 + val2 + reminder

    reminder = Math.floor(val3 / 10)
    let lastDigit = val3 % 10

    l3.next = new ListNode(lastDigit)

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next

    l3 = l3.next
  }

  if (reminder > 0) {
    l3.next = new ListNode(reminder)
  }

  return current.next
}

const l1 = new ListNode(5)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

const result = addTwoNumbers(l1, l2)
console.log(result.toString())
