//TOCHECK: Wrong
function rob3(nums) {
  let firstIndexCounter = 0
  let firstIndexSum = 0
  let secondIndexCounter = 1
  let secondIndexSum = 0

  while (firstIndexCounter <= nums.length &&
    secondIndexCounter <= nums.length) {

    if (!isNaN(nums[firstIndexCounter]))
      firstIndexSum += nums[firstIndexCounter]

    if (!isNaN(nums[secondIndexCounter]))
      secondIndexSum += nums[secondIndexCounter]

    firstIndexCounter += 2
    secondIndexCounter += 2
  }

  return firstIndexSum > secondIndexSum ? firstIndexSum : secondIndexSum
};

//TOCHECK: Wrong
function rob2(nums, i) {
  if (i === nums.length - 1) {
    return nums[i]
  }
  else if (i > nums.length - 1) {
    return 0
  }

  return nums[i] + rob2(nums, i + 2)
}

//WORKING
function rob(nums) {
  let max = 0, nextMax = 0

  for (var i = 0; i < nums.length; i++) {
    let temp = Math.max(nums[i] + max, nextMax)
    max = nextMax
    nextMax = temp
  }

  return nextMax
}

//WORKING
function rob4(nums) {

  if (nums.length === 0) {
    return 0
  }

  let maxes = new Array(nums.length + 1).fill(0)
  maxes[1] = nums[0]

  for (var i = 2; i <= nums.length; i++) {
    maxes[i] = Math.max(nums[i - 1] + maxes[i - 2], maxes[i - 1])
  }

  return maxes[maxes.length - 1]
}

console.log(rob4([40, 2, 4, 10])) //50
// console.log(rob4([2, 7, 9, 3, 1])) //12
// console.log(rob4([])) //0
// console.log(rob4([4])) //4
// console.log(rob4([2, 5])) //5
// console.log(rob4([4, 1, 2, 7, 5, 3, 1])) //14