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

  remove(index) {
    if (index === 0) {
      this.head = this.head.next
    }
    else if (index === 1) {
      this.head.next = this.head.next.next;
    }
    else {
      if ((this.length - 1) / index >= 2) {
        console.log("traversing from the head")
        let currentNode = this.head;

        for (let i = 1; i <= index; i++) {
          currentNode = currentNode.next
          if (i === index - 1) {
            currentNode.next = currentNode.next.next

            if (index >= this.length - 1) {
              this.tail = currentNode
            }
            else {
              currentNode.next.prev = currentNode
            }

            break;
          }
        }
      }
      else {

        if (index >= this.length - 1) {
          const theNodeBeforeTheTail = this.tail.prev
          theNodeBeforeTheTail.next = null
          this.tail = theNodeBeforeTheTail
        }

        let currentNode = this.tail;

        for (let i = this.length - 2; i > 0; i--) {
          currentNode = currentNode.prev
          if (i === index - 1) {
            currentNode.next = currentNode.next.next
            currentNode.next.prev = currentNode

            break;
          }
        }
      }

    }

    this.length--
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.insert(20, 88);
myLinkedList.insert(0, 38);
myLinkedList.remove(5);

console.log(myLinkedList.printList())
// console.log("myLinkedList.head: ", myLinkedList.head)
// console.log("myLinkedList.tail: ", myLinkedList.tail)
// console.log("myLinkedList.tail.next: ", myLinkedList.tail.next)