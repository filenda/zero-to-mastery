//23 min - after watching

function generateParenthesis(n: number): string[] {
  let result: string[] = []
  let stringStack = []

  function backTracking(opened: number, closed: number) {
    if (opened === n && closed === n) {
      return result.push(stringStack.join(""))
    }

    if (opened < n) {
      stringStack.push("(")
      backTracking(opened + 1, closed)
      stringStack.pop()
    }

    if (closed < opened) {
      stringStack.push(")")
      backTracking(opened, closed + 1)
      stringStack.pop()
    }
  }

  //START WITH AN EMPTY AMOUNT OF OPENED AND CLOSED PARENTHESES
  backTracking(0, 0)
  return result
}

// console.log(generateParenthesis(1))
console.log(generateParenthesis(2))
// console.log(generateParenthesis(3))
