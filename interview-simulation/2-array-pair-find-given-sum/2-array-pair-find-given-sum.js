// Given one integer array and a sum number, make a function
// capable of finding to numbers (a pair), that would sum up
// to the given sum parameter and returning true or false

//O(n)
function checkPairSum(data, sum) {

  let remainings = new Set()

  for (var i = 0; i < data.length; i++) {
    if (remainings.has(data[i])) {
      console.log('true')
      return true
    }
    remainings.add(sum - data[i])
  }

  console.log('false')
  return false
}

const inputData = [1, 2, 3, 4, 4]

checkPairSum(inputData, 8)