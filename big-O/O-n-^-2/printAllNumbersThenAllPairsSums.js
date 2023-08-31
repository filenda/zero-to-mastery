function printAllNumbersThenAllPairsSums(numbers) {

  console.log('these are the numbers')

  numbers.forEach(function (number) {
    console.log(number)
  })

  console.log('and these are their sums:')

  numbers.forEach(function (firstNumber) {
    number.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber)
    })
  })
}

// O (n + n^2)
// final form (you can take out the 'n'):
// O(n ^ 2)