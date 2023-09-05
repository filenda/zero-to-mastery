class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newTail = {
      value: value,
      prev: this.tail,
      next: null
    }

    //this may seem strange, but it works because of the way a pointer works (in this case, the 'next' pointer)
    this.tail.next = newTail;
    this.tail = newTail;

    this.length++

    return this;
  }

  prepend(value) {
    const newHead = {
      value: value,
      next: this.head,
      prev: null
    }

    this.head.prev = newHead;
    this.head = newHead;
    this.length++

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

  //TODO: Finish this implementation
  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    else if (index >= this.length) {
      return this.append(value)
    }
    else {
      const newNode = {
        value: value,
        next: null,
        prev: null
      }

      if ((this.length - 1) / index >= 2) {
        console.log("traversing from the head")
        let currentNode = this.head;

        for (let i = 1; i <= index; i++) {

          if (i === index) {
            currentNode.next.prev = newNode
            newNode.next = currentNode.next
            newNode.prev = currentNode
            currentNode.next = newNode
            break
          }

          currentNode = currentNode.next
        }
      }
      else {
        console.log("traversing backwards from the tail")
        let currentNode = this.tail;

        for (let i = this.length - 1; i > 0; i--) {
          console.log("i", i)
          currentNode = currentNode.prev
          console.log("current node", currentNode)

          if (i === index) {
            currentNode.next.prev = newNode
            newNode.next = currentNode.next
            newNode.prev = currentNode
            currentNode.next = newNode
            break
          }

        }
      }

      this.length++
    }
  }

  //TODO: Finish this implementation
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
          break;
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
myLinkedList.insert(1, 99);
myLinkedList.insert(20, 88);
myLinkedList.insert(0, 38);
// myLinkedList.remove(0);

console.log(myLinkedList.printList())
console.log("myLinkedList.head: ", myLinkedList.head)
console.log("myLinkedList.tail: ", myLinkedList.tail)
console.log("myLinkedList.tail.next: ", myLinkedList.tail.next)