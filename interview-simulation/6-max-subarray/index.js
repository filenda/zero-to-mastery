//TODO

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

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

const nums = [-1, -2]
// const nums = [-2, 1]
// const nums = [-2, -1]
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// const nums = [5, 4, -1, 7, 8]
// const nums = [1]
console.log(maxSubArray(nums));