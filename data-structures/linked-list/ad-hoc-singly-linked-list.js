//10-->5-->16

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newTail = {
      value: value,
      next: null
    }

    //this may seem strange, but it works because of the way a pointer works (in this case, the 'next' pointer)
    this.tail.next = newTail;
    this.tail = newTail;

    this.length++

    return this;
  }

  prepend2(value) {
    const newHead = {
      value: value,
      next: this.head
    }

    this.head = newHead;
    this.length++

    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }

  //using for loop + break
  insert2(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    else if (index >= this.length) {
      return this.append(value)
    }
    else {
      const newNode = {
        value: value,
        next: null
      }

      let currentNode = this.head;

      for (let i = 0; i <= index; i++) {
        currentNode = currentNode.next

        if (i === index - 2) {
          newNode.next = currentNode.next
          currentNode.next = newNode
          break;
        }
      }
      this.length++
    }

    return this.printList();
  }

  //using while loop + 'traverseToIndex' method
  insert(index, value) {
    //Check for proper parameters;
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      console.log('yes')
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  //TOCHECK: Another version of the remove method using the traverse fn
  //Missing this.head and this.tail care
  remove2(index) {
    // BEGIN-Check Parameters    
    // END-Check Parameters  
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  remove(index) {
    let currentNode = this.head;

    if (index === 0) {
      this.head = currentNode.next
    }
    else if (index === 1) {
      this.head.next = currentNode.next.next;
    }
    else {
      for (let i = 1; i <= index; i++) {
        currentNode = currentNode.next
        if (i === index - 1) {
          currentNode.next = currentNode.next.next
          if (index >= this.length - 1) {
            currentNode.next = null
            this.tail = currentNode
          }
          break;
        }
      }

      this.length--
    }
  }

  //TODO: Implement reverse
  //[ 38, 1, 99, 10, 5, 88 ]
  //[ 88, 5, 10, 99, 1, 38 ]
  reverse() {
    let arrayToTraverseBackwards = []

    let currentNode = this.head

    while (currentNode) {
      arrayToTraverseBackwards.unshift(currentNode.value)

      currentNode = currentNode.next
    }

    return arrayToTraverseBackwards
  }

  reverse2() {
    if (this.length === 1)
      return this

    let currentNode = this.head

    let newReversedList = new LinkedList(currentNode.value)

    while (currentNode) {
      console.log("currentNode", currentNode)
      newReversedList.prepend(currentNode.value)

      currentNode = currentNode.next
    }

    return newReversedList
  }

  //TOCHECK: This is the most intelligent implementation of the three found here
  //and also the most space-efficient as it does not create another linked list
  //just to hold the reversed version of the list
  reverse3() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert2(2, 99);
myLinkedList.insert2(20, 88);
myLinkedList.insert2(0, 38);
myLinkedList.remove(6);

console.log(myLinkedList.printList())
console.log(myLinkedList.reverse2())
// console.log(myLinkedList.head)
// console.log(myLinkedList.tail)