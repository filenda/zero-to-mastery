function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderListbkp = function (head) {

  if (!head || !head.next)
    return;

  // split the list into two 
  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let first = slow
  let second = first.next
  first.next = null //breaks the link between the lists

  // console.log('first state so far 1', JSON.stringify(first))
  // console.log('second state so far 1', JSON.stringify(second))

  // reverse the order of the second list
  let prev = null
  while (second) {
    let tmp = second.next
    second.next = prev
    prev = second
    second = tmp
  }

  // console.log('first state so far 2', JSON.stringify(first))
  // console.log('second state so far 2', JSON.stringify(prev))

  // merge both lists
  first = head
  second = prev

  while (second) {
    let tmp1 = first.next
    let tmp2 = second.next

    first.next = second
    second.next = tmp1

    first = tmp1
    second = tmp2
  }

  console.log(JSON.stringify(head))
}

var reorderList = function (head) {
  // split the list into two
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let second = slow.next
  slow.next = null // break both lists' link

  // reorder the second list
  let prev = null
  while (second) {
    let aux = second.next
    second.next = prev
    prev = second

    second = aux
  }

  // merge both lists
  let first = head
  second = prev

  while (second) {
    let tmp1 = first.next
    let tmp2 = second.next

    first.next = second
    second.next = tmp1
    tmp1.next = tmp2

    first = tmp1
    second = tmp2
  }

  console.log(JSON.stringify(head))
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0)
  let current = dummy
  for (let val of arr) {
    current.next = new ListNode(val)
    current = current.next
  }
  return dummy.next
}

// Test data
// let list1 = createLinkedList([1, 2, 3, 4])
// let list2 = createLinkedList([1, 2, 3, 4, 5])
let list2 = createLinkedList([1, 2, 3, 4, 5, 6])

// console.log(reorderList(list1))
console.log(reorderList(list2))

