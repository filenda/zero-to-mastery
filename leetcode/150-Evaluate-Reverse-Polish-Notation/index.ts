//1st version - 36min gross
//20min with the help of calculator and AI to solve edge cases
//TOCHECK: Learned a new extension method Math.trunk
function evalRPN(tokens: string[]): number {

  const operatorsDictionary = {
    "+": true,
    "-": true,
    "*": true,
    "/": true
  }

  let expressionStack: number[] = []

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] in operatorsDictionary) {
      switch (tokens[i]) {
        case "+":
          {
            let firstNumber = expressionStack.pop()
            let secondNumber = expressionStack.pop()

            expressionStack.push(secondNumber + firstNumber)
            break
          }
        case "-":
          {
            let firstNumber = expressionStack.pop()
            let secondNumber = expressionStack.pop()

            expressionStack.push(secondNumber - firstNumber)
            break
          }
        case "/":
          {
            let firstNumber = expressionStack.pop()
            let secondNumber = expressionStack.pop()

            expressionStack.push(Math.trunc(secondNumber / firstNumber))
            break
          }
        default:
          {
            let firstNumber = expressionStack.pop()
            let secondNumber = expressionStack.pop()

            expressionStack.push(secondNumber * firstNumber)
            break
          }
      }
    }
    else {
      expressionStack.push(Number.parseInt(tokens[i]))
    }
  }

  return expressionStack[expressionStack.length - 1]
}

console.log(evalRPN(["2", "1", "+", "3", "*"])) //9
console.log(evalRPN(["4", "13", "5", "/", "+"])) //6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])) //22