//TOCHECK: Took ~8min

function breadthFirstSearch(graph, root) {
  const queue = [root]

  while (queue.length > 0) {
    let curr = queue.shift()
    console.log(curr)
    for (let neighbor of graph[curr]) {
      queue.push(neighbor)
    }
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

breadthFirstSearch(graph, 'a')