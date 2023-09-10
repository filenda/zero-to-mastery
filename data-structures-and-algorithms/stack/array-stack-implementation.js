class Stack {
  constructor() {
    this.nodes = []
  }

  peek() {
    return this.nodes[this.nodes.length - 1];
  }

  push(value) {
    const newNode = value;

    this.nodes.push(newNode);

    return this;
  }

  size() {
    return this.nodes.length;
  }

  pop() {
    //TOCHECK: built-in
    return this.nodes.pop();

    //TOCHECK: ad-hoc
    // if (this.nodes.length === 0) {
    //   return null
    // }
    // else if (this.nodes.length === 1) {
    //   this.nodes = []
    // }
    // else {
    //   const newNodes = []
    //   for (let i = 0; i < this.nodes.length - 1; i++) {
    //     newNodes.push(this.nodes[i]);
    //   }
    //   this.nodes = newNodes
    // }
  }

  isEmpty() {
    return this.nodes.length === 0;
  }
}

module.exports = Stack;


const myStack = new Stack();

myStack.push("google")
myStack.push("udemy")
myStack.push("discord")
myStack.pop()
// console.log(myStack.peek())
// console.log("myStack", myStack)
// console.log(myStack.isEmpty())


//Discord
//Udemy
//google
