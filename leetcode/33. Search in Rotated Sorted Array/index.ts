//TOCHECK: With base tests working it took me ~40min
function search33_2(nums: number[], target: number): number {
  let right = nums.length - 1
  let left = 0
  let mid = Math.trunc(nums.length / 2)
  let targetIndex = -1

  while (left <= right) {
    if (target === nums[mid]) {
      return mid
    }
    else if (target === nums[left]) {
      return left
    }
    else if (target === nums[right]) {
      return right
    }
    else if (target <= nums[mid] && nums[mid] > nums[left] && target >= nums[left]) {
      right = mid
    }
    else if (target >= nums[mid] && nums[mid] < nums[right] && target <= nums[right]) {
      left = mid
    }
    else if (target <= nums[mid] && nums[mid] > nums[left] && target <= nums[right]) {
      left = mid
    }

    mid = Math.trunc((left + right) / 2)
  }

  return targetIndex
}

//TOCHECK: Took ~24min
function search33(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let m = Math.trunc((l + r) / 2)

    //found
    if (nums[m] === target) {
      return m
    }
    //left portion
    else if (nums[l] <= nums[m]) {
      if (target < nums[l] || target > nums[m]) {
        l = m + 1
      }
      else {
        r = m - 1
      }
    }
    //right portion
    else {
      if (target < nums[m] || target > nums[r]) {
        r = m - 1
      }
      else {
        l = m + 1
      }
    }
  }

  return -1
}

console.log(search33([4, 5, 6, 7, 0, 1, 2], 4)) //0
// console.log(search33([4, 5, 6, 7, 0, 1, 2], 0)) //4
// console.log(search33([4, 5, 6, 7, 0, 1, 2], 5)) // 1
// console.log(search33([3, 1], 0)) // -1
// console.log(search33([4, 5, 6, 7, 0, 1, 2], 3)) //-1
// console.log(search33([3, 1], 3)) // 0
// console.log(search33([1], 0)) //-1
// console.log(search33([7, 8, 1, 2, 3, 4, 5, 6], 2)) // 3