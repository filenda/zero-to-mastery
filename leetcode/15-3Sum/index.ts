function threeSum1ndAttempt(nums: number[]): number[][] {
  let response = []

  let j = 0
  let i = 1
  let k = nums.length - 1

  while (
    j < nums.length - 1 &&
    i < nums.length - 2 &&
    (k > j && k > i)
  ) {

    if (nums[j] + nums[i] + nums[k] === 0)
      response.push([nums[j], nums[i], nums[k]])

    j += 2
    i += 2
    k -= 1
  }

  return response
}

//Optimal (AI assisted)
function threeSumAI(nums: number[]): number[][] {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
      const sum = nums[i] + nums[leftIndex] + nums[rightIndex];

      if (sum === 0) {
        result.push([nums[i], nums[leftIndex], nums[rightIndex]]);

        // Skip duplicates
        while (leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex + 1]) {
          leftIndex++;
        }
        while (leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex - 1]) {
          rightIndex--;
        }

        leftIndex++;
        rightIndex--;
      } else if (sum < 0) {
        leftIndex++;
      } else {
        rightIndex--;
      }
    }
  }

  return result;
}

//took gross 27 min, 5+ minutes to check edge cases
function threeSum(nums: number[]): number[][] {

  let result = []

  //duplicates check
  let dups = {}

  // asc sort the input array
  nums = nums.sort((a, b) => a - b)

  // iterate over the entirety of it
  for (let i = 0; i < nums.length; i++) {
    // search for the other two twins
    let leftIndex = i + 1
    let rightIndex = nums.length - 1
    while (leftIndex < rightIndex) {
      if (nums[i] + nums[leftIndex] + nums[rightIndex] === 0) {
        if (!dups[`${nums[i]}${nums[leftIndex]}${nums[rightIndex]}`]) {
          result.push([nums[i], nums[leftIndex], nums[rightIndex]])
          dups[`${nums[i]}${nums[leftIndex]}${nums[rightIndex]}`] = true
        }
      }

      if (nums[i] + nums[leftIndex] + nums[rightIndex] > 0)
        rightIndex--

      else
        leftIndex++
    }
  }

  return result
}

console.log(threeSumAI([-2, -2, 0, 1, 1, 2, 2, 2])) // [[-2,0,2],[-2,1,1]]

// console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]
//-4, -1, -1, 0, 1, 2

// console.log(threeSum([0, 1, 1])) //[]
// console.log(threeSum([0, 0, 0])) //[[0,0,0]]