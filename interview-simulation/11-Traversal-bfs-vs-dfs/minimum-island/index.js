
//TOCHECK: Took me 33min to solve
const minimumIsland = (grid) => {

  let visited = new Set()
  //save minIslandSoFar
  let minIslandSoFar = Number.POSITIVE_INFINITY
  // traverse the graph r x c
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let islandCount = explore(r, c, visited, grid)

      if (islandCount > 0) {
        // for each node, do a dfs, remembering to compare to previous min count
        minIslandSoFar = Math.min(islandCount, minIslandSoFar)
      }
    }
  }
  // return the smaller island
  console.log('minIslandSoFar', minIslandSoFar)
  // If no islands were found, return 0
  return minIslandSoFar === Number.POSITIVE_INFINITY ? 0 : minIslandSoFar;
}

function explore(r, c, visited, grid) {

  //out of bound protection
  if (r < 0 || r > grid.length - 1) return 0
  if (c < 0 || c > grid[0].length - 1) return 0

  //avoid water
  if (grid[r][c] === "W") return 0

  //infinite cycle protection
  let node = `${r},${c}`
  if (visited.has(node)) return 0

  visited.add(node)

  let count = 1

  count += explore(r + 1, c, visited, grid)
  count += explore(r - 1, c, visited, grid)
  count += explore(r, c + 1, visited, grid)
  count += explore(r, c - 1, visited, grid)

  return count
}

// const grid = [
//   ['W', 'W'],
//   ['L', 'L'],
//   ['W', 'W'],
//   ['W', 'L']
// ]

// minimumIsland(grid) // -> 1

// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ]

// minimumIsland(grid) // -> 2

// const grid = [
//   ['L', 'W', 'W', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['W', 'L', 'W', 'L', 'W'],
//   ['W', 'W', 'W', 'W', 'W'],
//   ['W', 'W', 'L', 'L', 'L'],
// ]

// minimumIsland(grid) // -> 1

// const grid = [
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
// ]

// minimumIsland(grid) // -> 9


