/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//TOCHECK: Imcomplete/failed. Took 15min.
var mergeTwoLists2 = function (list1, list2) {

  if (list1.val <= list2.val) {
    list1.next = list2
  }
  else {
    list2.next = list1
  }

  return list1
}

//TOCHECK: Took 30 min. Didn't work.
var mergeTwoLists3 = function (list1, list2) {

  let currLOneEl = list1
  let currLTwoEl = list2
  let output = null

  if (!list1 && !list2)
    return null
  if (!list2)
    return list1
  if (!list1)
    return list2

  if (currLOneEl.val <= currLTwoEl.val) {
    output = list1
    currLOneEl = currLOneEl.next
  }
  else {
    output = list2
    currLTwoEl = currLTwoEl.next
  }

  while (currLOneEl || currLTwoEl) {
    if (!currLOneEl && currLTwoEl) {
      output.next = currLTwoEl
      currLTwoEl = currLTwoEl.next
    }
    else if (currLOneEl && !currLTwoEl) {
      output.next = currLOneEl
      currLOneEl = currLOneEl.next
    }
    else {
      if (currLOneEl.val <= currLTwoEl.val) {
        output.next = currLOneEl
        currLOneEl = currLOneEl.next
      }
      else {
        output.next = currLTwoEl
        currLTwoEl = currLTwoEl.next
      }
    }
  }

  return output
}

//1 2 4 -- 1 1 1 4 null
//1 3 4 -- 1 3 3 3 4 null

//Took another unsuccessful 20mins
var mergeTwoLists4 = function (list1, list2) {
  if (!list1.next) {
    return list2
  }

  if (!list2.next) {
    return list1
  }

  if (list2.val <= list1.val) {
    return mergeTwoLists(list2.next, list1)
  }
  else {
    return mergeTwoLists(list2, list1.next)
  }
}

var mergeTwoLists = function (list1, list2) {

  let output = {}
  let tail = output

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1
      list1 = list1.next
    }
    else {
      tail.next = list2
      list2 = list2.next
    }

    tail = tail.next
  }

  if (!list1) {
    tail.next = list2
  }

  if (!list2) {
    tail.next = list1
  }

  return output.next
}

// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Test data
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);

// Helper function to print the linked list
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

printLinkedList(mergeTwoLists(list1, list2))