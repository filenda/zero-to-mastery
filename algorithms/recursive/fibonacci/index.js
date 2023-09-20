// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {

  let firstValue = 0
  let secondValue = 1
  let thirdValue = firstValue + secondValue

  if (n === 0)
    return firstValue
  if (n === 1)
    return secondValue
  if (n === 2)
    return thirdValue

  for (let i = 3; i <= n; i++) {
    var next = secondValue + thirdValue
    secondValue = thirdValue
    thirdValue = next
  }

  return thirdValue
}

// function fibonacciRecursive(n) {
//   if (n === 0) {
//     return 0
//   }
//   else if (n === 1) {
//     return 1
//   }
//   else if (n === 2) {
//     return 1
//   }
//   else {
//     return n + fibonacciRecursive(n - 1)
//   }
// }

console.log(fibonacciIterative(9));
// console.log(fibonacciRecursive(6));