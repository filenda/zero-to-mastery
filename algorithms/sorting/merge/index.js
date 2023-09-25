//https://visualgo.net/en/sorting?slide=11

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  const length = array.length

  if (length === 1) {
    return array
  }

  // Split Array in into right and left
  const floorlyRoundedHalf = Math.floor(length / 2)
  let right = []
  let left = []

  for (let i = 0; i < array.length; i++) {
    if (i < floorlyRoundedHalf) {
      left.push(array[i])
    }
    else {
      right.push(array[i])
    }
  }

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  let mergedArray = new Array(left.length + right.length)

  let leftIndex = 0
  let rightIndex = 0
  let mergedArrayIndex = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex] || right[rightIndex] === undefined) {
      mergedArray[mergedArrayIndex] = left[leftIndex]
      leftIndex++
    }
    else {
      mergedArray[mergedArrayIndex] = right[rightIndex]
      rightIndex++
    }

    mergedArrayIndex++
  }

  return mergedArray
}

const answer = mergeSort(numbers);
console.log(answer);

// console.log(merge([4], [0]))