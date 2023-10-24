//TODO

/**
 * @param {number[]} nums
 * @return {number}
 */
//wrong
function maxSubArray2(nums) {

  let eachIndexMaxes = {};

  let max = 0;

  for (var i = 0; i < nums.length; i++) {

    eachIndexMaxes[i] = {}

    for (var j = i + 1; j < nums.length; j++) {

      const sumUntilPreviousIndex = eachIndexMaxes[i][j - 1];

      if (sumUntilPreviousIndex === undefined) {
        eachIndexMaxes[i][j] = nums[i] + nums[j];
      }
      else {
        eachIndexMaxes[i][j] = sumUntilPreviousIndex + nums[j];
      }

      console.log("eachIndexMaxes[i][j]", eachIndexMaxes[i][j])

      max = max > eachIndexMaxes[i][j] ? max : eachIndexMaxes[i][j]
    }

    console.log('max', max)
  }

  return max;
};

//wrong and inefficient O (n^2)
function maxSubArray3(nums) {

  let max = nums[0]

  for (let i = 0; i < nums.length; i++) {
    let sumSoFar = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      sumSoFar += nums[j]
      if (sumSoFar > max) {
        max = sumSoFar
      }
    }
  }

  return max
}

//working - kadane's algorithm O(n)
function maxSubArray(nums) {
  let maxSum = nums[0]; // Initialize maxSum to the first element of the array.
  let currentSum = nums[0]; // Initialize currentSum to the first element of the array.

  for (let i = 1; i < nums.length; i++) {
    // Calculate the current maximum subarray sum ending at index i.
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maxSum if the current maximum is greater.
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

//working - tabulation still O(n)
function maxSubArray4(nums) {

  if (nums.length === 0) {
    return 0
  }

  let maxes = new Array(nums.length + 1).fill(0)

  for (let i = 0; i < nums.length; i++) {
    maxes[i + 1] = Math.max(maxes[i] + nums[i], nums[i])
  }

  return Math.max(...maxes)
}

//TODO: Make a code that instead of returning the biggest sum, 
//return the involved numbers inside the indexes instead

// let nums1 = [-1, -2] //0
// console.log(maxSubArray4(nums1));

// let nums2 = [-2, 1] //1
// console.log(maxSubArray4(nums2));

// let nums3 = [-2, -1] //0
// console.log(maxSubArray4(nums3));

// let nums4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4] //6
// console.log(maxSubArray4(nums4));

let nums5 = [5, 4, -1, 7, 8] //23
console.log(maxSubArray4(nums5));

// let nums6 = [1] //1
// console.log(maxSubArray4(nums6));