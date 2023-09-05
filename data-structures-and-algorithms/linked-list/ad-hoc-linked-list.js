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

  //TODO: Implement deletion
  remove(index) {
    let currentNode = this.head;

    if (index === 0) {
      this.head = currentNode.next
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
        }
      }

      this.length--
    }
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert2(2, 99);
myLinkedList.insert2(20, 88);
myLinkedList.insert2(0, 38);
myLinkedList.remove(0);

console.log(myLinkedList.printList())
console.log(myLinkedList.head)
console.log(myLinkedList.tail)