class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      //TOCHECK: it seems wrong to have the 'this.top' proerty not null
      //but this allows for the pop method to delete the node on top
      //without leaving the 'this.top' proerty null
      //Other ways to work around this would be to have a 'prev' property
      //but that would raise the space complexity of the solution just
      //for the sake of respecting semantics
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  
  isEmpty() {
    return this.length === 0
  }
}

const myStack = new Stack();

myStack.push("google")
myStack.push("udemy")
myStack.push("discord")
// myStack.pop()
// console.log(myStack.peek())
console.log("myStack", myStack)
// console.log(myStack.isEmpty())


//Discord
//Udemy
//google
