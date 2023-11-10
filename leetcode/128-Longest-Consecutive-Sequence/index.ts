//TOCHECK: This one doesn't account for negative numbers
function longestConsecutive2(nums: number[]): number {
  let response: number = 0

  if (nums.length < 2)
    return nums.length

  let maxValue = Math.max(...nums, 1)
  let subArrays: number[][] = new Array(maxValue).map(n => null)

  for (let i = 0; i < nums.length; i++) {
    if (subArrays[nums[i] - 1] && subArrays[nums[i] - 1].length > 0) {
      subArrays[nums[i]] = [...subArrays[nums[i] - 1], nums[i]]
    }
    else {
      subArrays[nums[i]] = [nums[i]]
    }
  }

  for (let i = 0; i < subArrays.length; i++) {

    if (subArrays[i]) {
      if (subArrays[i - 1] && subArrays[i - 1].length > 0) {
        subArrays[i] = [...subArrays[i - 1], i]
      }

      if (subArrays[i] && subArrays[i].length > 0)
        response = subArrays[i].length > response ? subArrays[i].length : response
    }
  }

  return response
}

//working
function longestConsecutive(nums: number[]): number {
  if (nums.length < 2)
    return nums.length;

  let response: number = 0;
  let numSet: Set<number> = new Set(nums);

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {  // Start of a potential sequence
      let currentNum = num + 1;

      while (numSet.has(currentNum)) {
        currentNum++;
      }

      response = Math.max(response, currentNum - num);
    }
  }

  return response;
}

//working
function longestConsecutive3(nums: number[]): number {
  let longest = 0

  let numsSet: Set<number> = new Set(nums)

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currentSize = 1

      while (numsSet.has(num + currentSize)) {
        currentSize++
      }

      longest = Math.max(longest, currentSize)
    }
  }

  return longest
}

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive3(nums));  // Output: 4
console.log(longestConsecutive3([0, 0])) // 1
console.log(longestConsecutive3([1, 2, 3, 4, 5])) // 5
console.log(longestConsecutive3([5, 4, 3, 2, 1])) // 5
console.log(longestConsecutive3([100, 4, 200, 1, 3, 2])) // 4
console.log(longestConsecutive3([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 9
console.log(longestConsecutive3([4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3])) // 5

// ---

// 1: [1]
// 2: [2]
// 3: [3]
// 4: [4]
// 100: [100]
// 200: [200]

// 1: [1]
// 2: [1, 2]
// 3: [1, 2, 3]
// 4: [1, 2, 3, 4]
// 100: [100]
// 200: [200]

