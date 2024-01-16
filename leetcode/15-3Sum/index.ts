function threeSum(nums: number[]): number[][] {
  let response = []

  let j = 0
  let i = 1
  let k = nums.length - 1

  while (
    j < nums.length - 1 &&
    i < nums.length - 2 &&
    (k > j && k > i)
  ) {

    if (nums[j] + nums[i] + nums[k] === 0)
      response.push([nums[j], nums[i], nums[k]])

    j += 2
    i += 2
    k -= 1
  }

  return response
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))