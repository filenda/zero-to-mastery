
//Using HashSet
const firstRecurringChar = (inputArray) => {

  const chars = new Set()

  for (let i = 0; i < inputArray.length; i++) {
    if (chars.has(inputArray[i])) {
      return inputArray[i]
    }
    chars.add(inputArray[i])
  }

  return undefined;
}

//Using adhoc HashTable (plain js object)
function firstRecurringChar2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i;
    }
  }
  return undefined
}

const inputArray = [1, 5, 5, 1, 3, 4, 6]
// const inputArray = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// const inputArray = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// const inputArray = [2, 3, 4, 5]
console.log(firstRecurringChar(inputArray))