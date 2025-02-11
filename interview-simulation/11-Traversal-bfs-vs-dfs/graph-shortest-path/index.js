// shortest path
// Write a function, shortestPath, that takes in an array of edges
// for an undirected graph and two nodes (nodeA, nodeB).
// The function should return the length of the shortest path between A and B.
// Consider the length as the number of edges in the path, not the number
// of nodes. If there is no path between A and B, then return -1.
// You can assume that A and B exist as nodes in the graph.

const shortestPath = (edges, nodeA, nodeB) => {
  //build the graph adjency list
  let graph = buildGraph(edges)
  console.log(JSON.stringify(graph))

  //create shortest path algo
  const visited = new Set()
  const queue = [[nodeA, 0]]

  while (queue.length > 0) {
    let [node, weight] = queue.shift()

    if (node === nodeB) {
      console.log('weight', weight)
      return weight
    }

    if (visited.has(String(node))) continue;

    visited.add(String(node))

    for (let neighbor of graph[node]) {
      if (!visited.has(String(neighbor))) {
        queue.push([neighbor, weight + 1])
      }
    }
  }

  console.log('weight', -1)

  return -1
}

function buildGraph(edges) {
  // {
  //   w: [x, v],
  //   x: [w,y]
  // }
  let graph = {}

  for (let edge of edges) {
    let [a, b] = edge
    if (!graph[a]) graph[a] = []
    if (!graph[b]) graph[b] = []

    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}


//test cases:
// const edges = [
//   ['w', 'x'],
//   ['x', 'y'],
//   ['z', 'y'],
//   ['z', 'v'],
//   ['w', 'v']
// ]

// shortestPath(edges, 'w', 'z') // -> 2

// const edges = [
//   ['w', 'x'],
//   ['x', 'y'],
//   ['z', 'y'],
//   ['z', 'v'],
//   ['w', 'v']
// ]

// shortestPath(edges, 'y', 'x') // -> 1

// const edges = [
//   ['a', 'c'],
//   ['a', 'b'],
//   ['c', 'b'],
//   ['c', 'd'],
//   ['b', 'd'],
//   ['e', 'd'],
//   ['g', 'f']
// ]

// shortestPath(edges, 'a', 'e') // -> 3

// const edges = [
//   ['a', 'c'],
//   ['a', 'b'],
//   ['c', 'b'],
//   ['c', 'd'],
//   ['b', 'd'],
//   ['e', 'd'],
//   ['g', 'f']
// ]

// shortestPath(edges, 'e', 'c') // -> 2

const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
]

shortestPath(edges, 'b', 'g') // -> -1

// const edges = [
//   ['c', 'n'],
//   ['c', 'e'],
//   ['c', 's'],
//   ['c', 'w'],
//   ['w', 'e'],
// ]

// shortestPath(edges, 'w', 'e') // -> 1

// const edges = [
//   ['c', 'n'],
//   ['c', 'e'],
//   ['c', 's'],
//   ['c', 'w'],
//   ['w', 'e'],
// ]

// shortestPath(edges, 'n', 'e') // -> 2

// const edges = [
//   ['m', 'n'],
//   ['n', 'o'],
//   ['o', 'p'],
//   ['p', 'q'],
//   ['t', 'o'],
//   ['r', 'q'],
//   ['r', 's']
// ]

// shortestPath(edges, 'm', 's') // -> 6
