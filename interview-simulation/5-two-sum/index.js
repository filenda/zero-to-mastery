/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {

  //create a structure that saves both the index and value of the remainders
  const remainders = new Map();

  //loop through the input numbers
  for (let i = 0; i < nums.length; i++) {
    //check if the current number in the loop is the remainder of a previous number
    const remainderIndex = remainders.get(nums[i])
    if (remainderIndex !== undefined) {
      //if so, return the result array with the current number in the loop's index and the index of the remainder
      return [i, remainderIndex];
    }
    //if not, then add the difference between the target and the current number's index
    //to the remainders
    else {
      remainders.set(target - nums[i], i)
    }
  }

  return []
};

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums, target))