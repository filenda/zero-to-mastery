
//TOCHECK: O(n) - 1st attempt - Took me a gross 38min to finish it (one test case only), using debug mode
function searchMatrix1(matrix: number[][], target: number): boolean {
  //search for row
  let potentialRow = Math.trunc(matrix.length / 2)

  while (matrix[potentialRow]) {
    if (matrix[potentialRow][0] <= target &&
      matrix[potentialRow][matrix[potentialRow].length - 1] >= target) {
      break
    }
    else if (target < matrix[potentialRow][0]) {
      potentialRow = Math.trunc(potentialRow / 2)
      continue
    }
    else if (target > matrix[potentialRow][matrix[potentialRow].length - 1]) {
      potentialRow = Math.trunc((matrix.length + potentialRow) / 2)
      continue
    }
  }

  //search for column
  let potentialColumn = Math.trunc(matrix[potentialRow].length / 2)

  let visitedColumns = {}

  while (matrix[potentialRow][potentialColumn] && !(potentialColumn in visitedColumns)) {
    if (matrix[potentialRow][potentialColumn] > target) {
      visitedColumns[potentialColumn] = true
      potentialColumn = Math.trunc(potentialColumn / 2)
      continue
    }
    else if (matrix[potentialRow][potentialColumn] < target) {
      visitedColumns[potentialColumn] = true
      potentialColumn = Math.trunc((matrix[potentialRow].length + potentialColumn) / 2)
      continue
    }
    else// if (matrix[potentialRow][potentialColumn] === target) {
      return true
  }

  return false
}

//TOCHECK: O(log m + log n) - 2nd attempt - Took me a gross 28min to finish all base test cases
function searchMatrix(matrix: number[][], target: number): boolean {
  let top = 0
  let bot = matrix.length - 1
  let row = 0

  while (bot >= top) {
    row = Math.trunc((top + bot) / 2)

    if (target > matrix[row][matrix[row].length - 1]) {
      top = row + 1
    }
    else if (target < matrix[row][0]) {
      bot = row - 1
    }
    else {
      break
    }
  }

  if (bot < top) {
    return false
  }

  let first = 0
  let last = matrix[row].length - 1
  let col = 0

  while (last >= first) {
    col = Math.trunc((first + last) / 2)

    if (target > matrix[row][col]) {
      first = col + 1
    }
    else if (target < matrix[row][col]) {
      last = col - 1
    }
    else {
      return true
    }
  }

  return false
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 23))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))

// 1   3  5  7
// 10 11 16 20
// 23 30 34 60

//return true