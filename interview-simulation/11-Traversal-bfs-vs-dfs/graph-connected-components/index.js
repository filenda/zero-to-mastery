/*
connected components count
Write a function, connectedComponentsCount, that takes in the adjacency
list of an undirected graph. The function should return the number of
connected components within the graph.
*/


//TOCHECK: IMPORTANT. THIS TOOK 25 min plus 5 more minutes because of the way
//JS works. TOTAL: 30 min. It has to convert the nodes to string before adding
// them to the Set, because the indexes
//of the set are of 'string' type, and the members of the array are numbers.
//by doing that we equalize their types to 'String'
function connectedComponentsCount(graph) {

  let count = 0
  let visited = new Set()

  for (let node in graph) {
    // console.log(visited)
    if (explore(graph, visited, node)) {
      count++
    }
  }

  return count
}

//TOCHECK: Wrong DFS implementation. Check the correct one below.
function exploreWrong(graph, visited, node) {

  if (visited.has(String(node))) return false

  visited.add(String(node))

  for (let neighbor of graph[node]) {
    visited.add(String(neighbor))
  }

  return true
}

function explore(graph, visited, node) {

  if (visited.has(String(node))) return false

  visited.add(String(node))

  for (let neighbor of graph[node]) {
    explore(graph, visited, neighbor)
  }

  return true
}

//test cases:
// console.log(connectedComponentsCount({
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2]
// })) // -> 2

console.log(
  connectedComponentsCount({
    1: [2],
    2: [1, 8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
  })) // -> 1

// console.log(connectedComponentsCount({
//   3: [],
//   4: [6],
//   6: [4, 5, 7, 8],
//   8: [6],
//   7: [6],
//   5: [6],
//   1: [2],
//   2: [1]
// })) // -> 3

// console.log(connectedComponentsCount({})) // -> 0

// console.log(connectedComponentsCount({
//   0: [4, 7],
//   1: [],
//   2: [],
//   3: [6],
//   4: [0],
//   6: [3],
//   7: [0],
//   8: []
// })) // -> 5
