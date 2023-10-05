// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

//TOCHECK: Memoized version: O(n) instead of O(2^n)
function memoizedFibonacciRecursive() {
  let cache = {};

  function fibonacci(n) {
    if (n in cache) {
      console.log("cache hit");
      return cache[n];
    } else {
      console.log("cache not hit");

      if (n < 2) {
        return n;
      }

      let memoizedNminusOne = fibonacci(n - 1);
      let memoizedNminusTwo = fibonacci(n - 2);

      cache[n] = memoizedNminusOne + memoizedNminusTwo;
      return cache[n];
    }
  }

  return fibonacci;
}

const memoized = memoizedFibonacciRecursive();
console.log(memoized(7));
