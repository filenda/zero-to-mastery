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

  // prepend(value) {
  //   const newHead = {
  //     value: value,
  //     next: this.head
  //   }

  //   this.head = newHead;
  //   this.length++
    
  //   return this;
  // }

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
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);


console.log(JSON.stringify(myLinkedList))



