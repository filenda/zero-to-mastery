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
    console.log('maxSofar', temp)
  }

  return nextMax
}

// const rob = memoizedRob()

// [2, 7, 9, 3, 1]
// console.log(rob([2, 7, 9, 3, 1], 0))

// [2,21,14,18,22]
// 21+22 =43
// console.log(rob([2, 21, 14, 18, 22], 1))

console.log(rob([40, 2, 4, 10]))
//TODO: Finish the exercise