// copied from https://leetcode.com/problems/merge-two-sorted-lists/
function ListNode(val) {
  this.val = val
  this.next = null
}

// prepare inputs
const l1 = new ListNode(1)
const item2 = new ListNode(2)
const item3 = new ListNode(3)

l1.next = item2
item2.next = item3

const l2 = new ListNode(1)
const item4 = new ListNode(3)
const item5 = new ListNode(4)

l2.next = item4
item4.next = item5

// solution #1

const mergeTwoLists1 = (l1, l2) => {
  let dummy = new ListNode(-1)
  let head = dummy

  while (l1 !== null || l1 !== null) {
    if (l1.val < l2.val) {
      dummy.next = l1
      l1 = l1.next
    } else {
      dummy.next = l2
      l2 = l2.next
    }

    dummy = dummy.next
  }

  if (l1 !== null) {
    dummy.next = l1
  }

  if (l2 !== null) {
    dummy.next = l2
  }

  return head.next
}

// solution #2

function mergeTwoLists2(l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

// solution #3
function mergeTwoLists3(l1, l2) {
  let dummy = new ListNode(-1)
  let head = dummy

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      head.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      head.next = new ListNode(l2.val)
      l2 = l2.next
    }

    head = head.next
  }

  head.next = l1 || l2

  return dummy.next
}
