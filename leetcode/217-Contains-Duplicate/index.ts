/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {

  let traversedItems = {}

  for (var i = 0; i < nums.length; i++) {
    if (traversedItems[nums[i]]) {
      return true
    }

    traversedItems[nums[i]] = true
  }

  return false
};

console.log(containsDuplicate([1, 2, 3, 1]))