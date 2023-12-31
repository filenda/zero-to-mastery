// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

//O (n)
function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }

  return number * findFactorialRecursive(number - 1);
}

//O (n)
function findFactorialIterative(number) {

  let answer = number;
  let previousNumber = number - 1;

  while (previousNumber > 0) {
    answer = answer * previousNumber;
    previousNumber--;
  }

  return answer;
}

console.log(findFactorialIterative(5))
console.log(findFactorialRecursive(5))
