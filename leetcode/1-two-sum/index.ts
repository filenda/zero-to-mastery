/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {

  let remainders = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in remainders) {
      return [remainders[nums[i]], i]
    }
    else {
      remainders[target - nums[i]] = i
    }
  }

  return []
}


console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]

//TOCHECK: Faster alternative using map instead of plain js obj
const twoSum2 = function (nums: number[], target: number): number[] {
  const remainders = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const remainderIndex = remainders.get(nums[i]);
    if (remainderIndex !== undefined) {
      return [i, remainderIndex];
    } else {
      remainders.set(target - nums[i], i);
    }
  }

  return [];
};
