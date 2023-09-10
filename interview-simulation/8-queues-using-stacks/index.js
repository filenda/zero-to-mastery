const Stack = require("../../data-structures-and-algorithms/stack/array-stack-implementation")

class MyQueue {
  constructor() {
    this.writeStack = new Stack();
    this.readStack = new Stack();
  }

  push(number) {
    this.writeStack.push(number)
  }

  pop() {
    let node = this.writeStack.pop();

    while (node !== undefined) {
      this.readStack.push(node);
      node = this.writeStack.pop();
    }

    return this.readStack.pop();
  }

  peek() {
    let node = this.writeStack.pop();

    while (node !== undefined) {
      this.readStack.push(node);
      node = this.writeStack.pop();
    }

    return this.readStack.peek();
  }

  empty() {
    return this.readStack.size() === 0;
  }
}


var myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.peek()); // return 1
console.log(myQueue.empty()); // return false

console.log("Queue", myQueue);
