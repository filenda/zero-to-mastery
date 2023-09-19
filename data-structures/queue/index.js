class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.last = newNode
      this.last.next = newNode
      this.first = newNode
    }
    else {
      this.last.next = newNode
      this.last = newNode
    }

    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    else if (this.length === 1) {
      this.first = null;
      this.last = null;
    }
    else {
      this.first = this.first.next
    }

    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
console.log("Queue", myQueue);

//Joy
//Matt
//Pavel
//Samir

