//TOCHECK: took 35min. Didnt finish
function search2(nums: number[], target: number): number {

  function searchRecursive(nums2: number[], target2: number, iteration: number): number {

    let pivotIndex = (Math.trunc(nums2.length / 2)) - 1

    if (nums2[pivotIndex] === target2)
      return pivotIndex + iteration

    if (nums2[pivotIndex] < target2) {
      const rightArray = nums2.slice(pivotIndex + 1)
      return searchRecursive(rightArray, target2, iteration + 1)
    }

    if (nums2[pivotIndex] > target2) {
      const leftArray = nums2.slice(0, pivotIndex)
      return searchRecursive(leftArray, target2, iteration + 1)
    }

  }

  searchRecursive(nums, target, 1)

  return -1
}

//Above solution fixed by copilot
function search3(nums: number[], target: number): number {

  function searchRecursive(nums2: number[], target2: number, start: number): number {

    let pivotIndex = Math.trunc(nums2.length / 2);

    if (nums2.length === 0)
      return -1

    if (nums2[pivotIndex] === target2)
      return start + pivotIndex;

    if (nums2[pivotIndex] < target2) {
      const rightArray = nums2.slice(pivotIndex + 1);
      return searchRecursive(rightArray, target2, start + pivotIndex + 1);
    }

    if (nums2[pivotIndex] > target2) {
      const leftArray = nums2.slice(0, pivotIndex);
      return searchRecursive(leftArray, target2, start);
    }
  }

  return searchRecursive(nums, target, 0);
}

function search(nums: number[], target: number): number {

  function searchRecursive(nums2: number[], start: number): number {

    let pivotIndex = Math.trunc(nums2.length / 2);

    if (nums2.length === 0)
      return -1

    if (nums2[pivotIndex] === target)
      return start + pivotIndex;

    if (nums2[pivotIndex] < target) {
      const rightArray = nums2.slice(pivotIndex + 1);
      return searchRecursive(rightArray, start + pivotIndex + 1);
    }

    if (nums2[pivotIndex] > target) {
      const leftArray = nums2.slice(0, pivotIndex);
      return searchRecursive(leftArray, start);
    }
  }

  return searchRecursive(nums, 0);
}

// console.log(search2([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 9)) //4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) //-1