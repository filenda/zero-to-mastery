//TOCHECK: Took 10min

function depthFirstSearch(graph, root) {
  const stack = [root] //b,c

  while (stack.length > 0) {
    let curr = stack.pop()
    console.log(curr)

    for (let neighbor of graph[curr]) {
      stack.push(neighbor)
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

depthFirstSearch(graph, 'a')