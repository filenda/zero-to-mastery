//TOCHECK: First attempt. Took 20min and didn't work
function reverseList2(head) {
  if (!head)
    return null

  if (head.next === null)
    return head

  let prev = head
  let curr = head.next
  let aux = curr.next

  while (curr) {
    curr.next = prev

    prev = curr
    curr = aux
    aux = curr?.next
  }

  return prev
}

//correct. took ~14min
var reverseList = function (head) {
  if (!head)
    return null

  if (!head.next)
    return head

  let curr = head.next
  let prev = head
  prev.next = null

  while (curr) {
    let aux = curr.next

    curr.next = prev
    prev = curr
    curr = aux
  }

  return prev
}

let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }

console.log(reverseList(head))
