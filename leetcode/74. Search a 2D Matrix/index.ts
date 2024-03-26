
//TOCHECK: Took me a gross 38min to finish it (one test case only), using debug mode
function searchMatrix(matrix: number[][], target: number): boolean {
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

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 23))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))

// 1   3  5  7
// 10 11 16 20
// 23 30 34 60

//return true