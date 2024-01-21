//first version; non-functional
function trap1(height: number[]): number {
  let total = 0

  let i = 0
  let j = height.length - 1

  let currentLeftPointerLeftWall = height[i]
  let currentRightPointerRightWall = height[j]

  while (i < j) {

    if (height[i] > currentLeftPointerLeftWall) {
      currentLeftPointerLeftWall = height[i]
    }
    else {
      total += currentLeftPointerLeftWall - height[i]
    }

    i++

    if (height[j] > currentRightPointerRightWall) {
      currentRightPointerRightWall = height[j]
    }
    else {
      if (j === i) {
        total += (currentRightPointerRightWall > currentLeftPointerLeftWall ? currentLeftPointerLeftWall : currentRightPointerRightWall) - height[j]
      } else {
        total += currentRightPointerRightWall - height[j]
      }
    }

    j--
  }

  return total
}

// assisted version
function trap2(height: number[]): number {
  let total = 0;

  if (height.length <= 2) {
    return total;
  }

  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];

  while (left < right) {
    if (height[left] <= height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      total += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      total += rightMax - height[right];
      right--;
    }
  }

  return total;
}

// 24m20sec grossly
function trap(height: number[]): number {
  let total = 0
  let left = 0
  let right = height.length - 1

  let leftWall = height[left]
  let rightWall = height[right]

  while (left <= right) {
    if (leftWall < rightWall) {
      leftWall = leftWall > height[left] ? leftWall : height[left]
      total += Math.max(leftWall - height[left], 0)
      left++
    }
    else {
      rightWall = rightWall > height[right] ? rightWall : height[right]
      total += Math.max(rightWall - height[right], 0)
      right--
    }
  }

  return total
}


console.log(trap([3, 0, 0, 4, 1])) // 


// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
