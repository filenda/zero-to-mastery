//took ~33m
class MinStack {
  stack: number[]
  minStack: number[]

  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val: number): void {
    this.stack.push(val)
    if (val <= this.minStack[this.minStack.length - 1] || this.minStack.length === 0) {
      this.minStack.push(val)
    }
  }

  pop(): void {
    let popedNumber = this.stack.pop()
    if (popedNumber === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop()
    }
    return null
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}


const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2