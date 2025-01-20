/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//TOCHECK: Took 32min to finish this problem. Need to improve the speed.
//WRONG. This implementation of hasCycle is incorrect because it uses the
//node values to detect cycles, which can lead to false positives if the 
//list contains duplicate values. Instead,
//you should use Floyd's Tortoise and Hare algorithm,
//which uses two pointers to detect cycles in the linked list.
var hasCycle2 = function (head) {
  if (!head)
    return false

  let cycleIndex = -1
  let currIndex = 0
  let curr = head
  let previousValuesMap = {}
  previousValuesMap[curr.val] = currIndex

  while (curr) {
    if (!curr.next) {
      break
    }

    if (curr.next.val in previousValuesMap) {
      cycleIndex = previousValuesMap[curr.val]
      break
    }
    else {
      previousValuesMap[curr.next.val] = currIndex + 1
    }

    currIndex++
    curr = curr.next
  }

  return cycleIndex !== -1
};

//TOCHECK: This one works for all edge cases, and the only difference is that
// it puts the entire object in the set, instead of just the value.
var hasCycle1 = function (head) {
  if (!head)
    return false

  let cycleIndex = -1
  let currIndex = 0
  let curr = head
  let previousValuesMap = new Set()
  previousValuesMap.add(curr)

  while (curr) {
    if (!curr.next) {
      break
    }

    if (previousValuesMap.has(curr.next)) {
      cycleIndex = currIndex + 1
      break
    }
    else {
      previousValuesMap.add(curr.next)
    }

    currIndex++
    curr = curr.next
  }

  return cycleIndex !== -1
};

//TOCHECK: Took 20 mins. This is the optimal version because it
// has a big O of only O(1) 
var hasCycle = function (head) {
  if (!head || !head.next)
    return false

  let slow = head
  let fast = head

  while (slow || fast) {
    slow = slow.next
    fast = fast?.next?.next

    if (slow === fast)
      return true
  }

  return false
}

//slow, fast = 3
//slow = 2, fast = 0
//slow = 0, fast = 2
//slow = -4, fast = -4


//[1,2]
//slow, fast = 1
//slow = 2, fast = null