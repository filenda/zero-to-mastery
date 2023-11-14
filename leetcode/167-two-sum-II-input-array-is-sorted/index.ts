//TOCHECK: Efficient but non-optimal for sorted input array
function twoSumAscInput2(numbers: number[], target: number): number[] {

  let differenceFromTargetHashMap = {}

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in differenceFromTargetHashMap) {
      return [differenceFromTargetHashMap[numbers[i]], i + 1]
    }

    differenceFromTargetHashMap[target - numbers[i]] = i + 1
  }

  return []
}

//TOCHECK: Non-efficient and weird behavior
function twoSumAscInput3(numbers: number[], target: number): number[] {

  let aux = numbers.length

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < aux; j++) {
      if (i === j) {
        continue
      }
      else if (numbers[i] + numbers[j] === target) {
        return i > j ? [j + 1, i + 1] : [i + 1, j + 1]
      }
      else if (numbers[i] + numbers[j] > target) {
        aux = j - 1
        break
      }
    }
  }

  return []
}

//working & Optimal
function twoSumAscInput(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]

    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

console.log(twoSumAscInput3([1, 2, 3, 4, 5, 10, 12], 9)) //[4,5]
console.log(twoSumAscInput3([2, 7, 11, 15], 9)) //[1,2]
console.log(twoSumAscInput3([2, 3, 4], 6)) //[1,3]
console.log(twoSumAscInput3([-1, 0], -1)) //[1,2]