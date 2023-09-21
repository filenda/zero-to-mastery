// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

//O(n)
function fibonacciIterative2(n) {

  let firstValue = 0
  let secondValue = 1
  let thirdValue = firstValue + secondValue

  if (n === 0)
    return firstValue
  else if (n === 1)
    return secondValue
  else if (n === 2)
    return thirdValue
  else {
    for (let i = 3; i <= n; i++) {
      var next = secondValue + thirdValue
      secondValue = thirdValue
      thirdValue = next
    }

    return thirdValue
  }
}

//O(n)
function fibonacciIterative2ndOption(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

//TOCHECK: O(2^n)
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciIterative(5));
console.log(fibonacciRecursive(5));