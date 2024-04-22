//TOCHECK: Took me ~43min
//+ 10min to solve edge cases
function findMin(nums: number[]): number {
  let mid = Math.trunc(nums.length / 2)
  let right = nums.length - 1
  let left = 0
  let min = nums[mid]

  while (left <= right) {
    if (nums[mid] <= nums[right] && nums[mid] <= nums[left]) {
      min = Math.min(nums[mid], min)
      right = mid - 1
    }
    else if (nums[mid] <= nums[right] && nums[mid] >= nums[left]) {
      right = mid - 1
    }
    else if (nums[mid] >= nums[left]) {
      left = mid + 1
    }

    mid = Math.trunc((left + right) / 2)
  }

  return min
}


console.log(findMin([5, 1, 2, 3, 4])) // 1
console.log(findMin([2, 3, 4, 5, 1])) // 1
console.log(findMin([3, 4, 5, 1, 2])) // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
console.log(findMin([11, 13, 15, 17])) // 11