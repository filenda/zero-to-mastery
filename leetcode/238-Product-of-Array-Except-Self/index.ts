
//TOCHECK: O (n^2)
function productExceptSelf2(nums: number[]): number[] {

  let answer = new Array<number>(nums.length).fill(1)

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        answer[i] = answer[i] * nums[j]
      }
    }
  }

  return answer
}

//O(n)
function productExceptSelf(nums: number[]): number[] {

  const result = new Array(nums.length);
  result[0] = 1;

  // Calculate the product of elements to the left and store in result
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;

  // Calculate the product of elements to the right and update result
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])) // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0,0,9,0,0]


//[1, 2, 3, 4]
//[1, 1, 2, 6]

//[1, 1, 8, 6]
