// island count
// Write a function, islandCount, that takes in a grid containing Ws and Ls.
// W represents water and L represents land.The function should return the
// number of islands on the grid.An island is a vertically or horizontally
// connected region of land.

// Unfinished abandoned version:
// const islandCount = (grid) => {
//   let islandCount = 0
//   let row = 0
//   let col = 0
//   const maxRow = grid.length
//   const maxCol = grid[0].length
//   const visited = new Set()

//   return explore(grid, row, col, maxRow, maxCol, visited, islandCount)
// }

// function explore(grid, row, col, maxRow, maxCol, visited, islandCount) {

//   //check if current grid[row,col] is a 'L'

//   //if so, do a DFS on it (look at these positions: row -1, row +1, col -1, col +1)

// }

//TOCHECK: New version. Took me 28 min.
const islandCount = (grid) => {
  let visited = new Set()
  let count = 0

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(r, c, grid, visited)) {
        count++
      }
    }
  }

  console.log('count', count)
  return count
}

function explore(r, c, grid, visited) {
  //out of bound protection
  if (!(r > -1 && r < grid.length)) return false
  if (!(c > -1 && c < grid[0].length)) return false
  //avoid water
  if (grid[r][c] === "W") return false

  const node = `${r},${c}`

  //avoid visited node cycle
  if (visited.has(node)) return false

  visited.add(node)

  explore(r + 1, c, grid, visited)
  explore(r - 1, c, grid, visited)
  explore(r, c + 1, grid, visited)
  explore(r, c - 1, grid, visited)

  return true
}

// test cases:
// const grid = [
//   ['L', 'W'],
//   ['W', 'W'],
//   ['W', 'L'],
// ]

// islandCount(grid) // -> 2

// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ]

// islandCount(grid) // -> 3

// const grid = [
//   ['L', 'W', 'W', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['W', 'L', 'W', 'L', 'W'],
//   ['W', 'W', 'W', 'W', 'W'],
//   ['W', 'W', 'L', 'L', 'L'],
// ];

// islandCount(grid); // -> 4

// const grid = [
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
// ];

// islandCount(grid); // -> 1

const grid = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];

islandCount(grid); // -> 0
