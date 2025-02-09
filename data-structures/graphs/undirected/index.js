// undirected path
// Write a function, undirectedPath, that takes in an array of edges for an undirected graph
// and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not
// there exists a path between nodeA and nodeB.

// test_ØØ:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ]

// test_Ø1:
const edges = [
  ['i', 'j'],
]

const response = undirectedPath(edges, 'j', 'm')

console.log('response', response)

//TOCHECK: The entire hasPath2 solution took 60 min. There is a
// more optimized version bellow
function hasPath2(graph, element1, element2) {

  const stack = [element1]

  const visited = {}

  while (stack.length > 0) {
    const curr = stack.pop()

    if (!visited[curr]) {
      visited[curr] = {}
    }

    for (let neighbor of graph[curr]) {
      if (neighbor === element2) {
        return true
      }

      if (!visited[curr][neighbor]) {
        stack.push(neighbor)
      }

      visited[curr][neighbor] = true
    }
  }

  return false
}

//TOCHECK: This is a simpler implementation with just a HashSet
function hasPath(graph, element1, element2) {
  const stack = [element1];
  const visited = new Set();

  while (stack.length > 0) {
    const curr = stack.pop();

    if (curr === element2) {
      return true;
    }

    if (!visited.has(curr)) {
      visited.add(curr);

      for (let neighbor of graph[curr]) {
        stack.push(neighbor);
      }
    }
  }

  return false;
}

function undirectedPath(edges, nodeA, nodeB) {

  //build the graph using an adjacency list
  let graph = buildGraph(edges)
  console.log(JSON.stringify(graph))

  //search for the edge linking nodeA to nodeB
  const result = hasPath(graph, nodeA, nodeB)

  return result
}

function buildGraph(edges) {
  const graph = {}

  for (let edge of edges) {
    let [a, b] = edge

    if (!graph[a]) {
      graph[a] = [b]
    } else {
      graph[a].push(b)
    }

    if (!graph[b]) {
      graph[b] = [a]
    }
    else {
      graph[b].push(a)
    }
  }

  return graph
}
