
//Bad time complexity
function isValidSudoku2(board: string[][]): boolean {
  let columnCheckingHashSet = {}

  for (let i = 0; i < board.length; i++) {
    let rowCheckingHashSet = {}

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        continue
      }

      //column checking
      if (!columnCheckingHashSet[j]) {
        columnCheckingHashSet[j] = {}
      }

      if (board[i][j] in columnCheckingHashSet[j]) {
        return false
      }
      else {
        columnCheckingHashSet[j][board[i][j]] = true
      }

      //row checking
      if (board[i][j] in rowCheckingHashSet) {
        return false
      }
      else {
        rowCheckingHashSet[board[i][j]] = true
      }
    }
  }

  // Check mini-matrices (3x3 sub-grids)
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      let matrixSet = new Set();

      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          if (board[x][y] !== '.' && matrixSet.has(board[x][y])) {
            return false;
          }
          matrixSet.add(board[x][y]);
        }
      }
    }
  }

  return true
}

//TOCHECK: Implementation given by GPT, hard do understand this
function isValidSudoku(board: string[][]): boolean {
  const N = 9; // The size of the Sudoku board

  for (let i = 0; i < N; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    let matrixSet = new Set();

    for (let j = 0; j < N; j++) {
      // Check rows
      if (board[i][j] !== '.' && rowSet.has(board[i][j])) {
        return false;
      }
      rowSet.add(board[i][j]);

      // Check columns
      if (board[j][i] !== '.' && colSet.has(board[j][i])) {
        return false;
      }
      colSet.add(board[j][i]);

      // Check mini-matrices (3x3 sub-grids)
      const x = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const y = 3 * (i % 3) + (j % 3);
      if (board[x][y] !== '.' && matrixSet.has(board[x][y])) {
        return false;
      }
      matrixSet.add(board[x][y]);
    }
  }

  return true;
}

//Optimal and understandable
function isValidSudoku3(board: string[][]): boolean {
  let miniMatrixCheckingHashSet = {}
  let columnCheckingHashSet = {}

  for (let r = 0; r < board.length; r++) {
    let rowCheckingHashSet = {}

    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === '.') {
        continue
      }

      //row checking
      if (board[r][c] in rowCheckingHashSet) {
        return false
      }
      rowCheckingHashSet[board[r][c]] = true

      //column checking
      if (!columnCheckingHashSet[c]) {
        columnCheckingHashSet[c] = {}
      }

      if (board[r][c] in columnCheckingHashSet[c]) {
        return false
      }
      columnCheckingHashSet[c][board[r][c]] = true

      //mini matrix checking
      let key = `${Math.floor(r / 3)}${Math.floor(c / 3)}`
      if (!miniMatrixCheckingHashSet[key]) {
        miniMatrixCheckingHashSet[key] = {}
      }

      if (board[r][c] in miniMatrixCheckingHashSet[key]) {
        return false
      }
      else {
        miniMatrixCheckingHashSet[key][board[r][c]] = true
      }
    }
  }

  return true
}

// 00 01 02   03 04 05
// 10 11 12   13 14 15
// 20 21 22   23 24 25

// 30 31 32   33 34 35
// 40 41 42   43 44 45
// 50 51 52   53 54 55

// console.log(isValidSudoku3(
//   [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."]
//     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])) //true

// console.log(isValidSudoku3([
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"]])) //false

console.log(isValidSudoku3([
  [".", "4", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "1", ".", ".", "7", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "3", ".", ".", ".", "6", "."],
  [".", ".", ".", ".", ".", "6", ".", "9", "."],
  [".", ".", ".", ".", "1", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "8", ".", ".", ".", ".", "."]])) // false