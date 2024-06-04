function productOfArrayExceptSelf(nums: number[]) {
  let ans = new Array(nums.length).fill(1)

  for (let i = 0; i < nums.length; i++) {
    // ans[i]*= nums
  }
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4])) // [24,12,8,6]
console.log(productOfArrayExceptSelf([-1, 1, 0, -3, 3])) // [0,0,9,0,0]