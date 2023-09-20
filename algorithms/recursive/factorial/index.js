// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }

  return number * findFactorialIterative(number - 1);
}

function findFactorialIterative(number) {

  let answer = number;
  let previousNumber = number - 1;

  while (previousNumber > 0) {
    answer = answer * previousNumber;
    previousNumber--;
  }

  return answer;
}

console.log(findFactorialIterative(1))
console.log(findFactorialRecursive(1))
