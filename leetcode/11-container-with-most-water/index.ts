//took a gross 40min
//very unfocused, first of the day
function maxArea(height: number[]): number {
  let max = 0
  let i = 0
  let j = height.length - 1

  while (i < j) {
    let currentLowestHeight = height[i] < height[j] ? height[i] : height[j]
    let currentIterationArea = currentLowestHeight * (j - i)
    max = currentIterationArea > max ? currentIterationArea : max

    if (height[i] < height[j]) {
      i++
    }
    else {
      j--
    }
  }

  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) //49

