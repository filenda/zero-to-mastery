//took 19min

function twoSumblablalba(numbers: number[], target: number): number[] {
  let index1 = 0
  let index2 = numbers.length - 1

  if (numbers[index1] > target)
    return []

  while (index1 < index2) {
    if (numbers[index1] + numbers[index2] === target)
      return [index1 + 1, index2 + 1]

    if (numbers[index1] + numbers[index2] < target) {
      index1++
      continue
    }

    index2--
  }

  return []
}

// 2 7 11 15, target = 9
// 2 7 11 15, target = 18
console.log(twoSumblablalba([2, 7, 11, 15], 9))
console.log(twoSumblablalba([2, 7, 11, 15], 18))