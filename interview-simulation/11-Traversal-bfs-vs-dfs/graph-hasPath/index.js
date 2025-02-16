function hasPathDFS(graph, src, dst) {
  if (src === dst) {
    return true
  }

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst))
      return true
  }

  return false
}

//TOCHECK: Took 10 min
function hasPathBFS(graph, src, dst) {
  let queue = [src]

  while (queue.length > 0) {
    let curr = queue.shift()

    if (curr === dst) {
      return true
    }

    for (let neighbor of graph[curr]) {
      queue.push(neighbor)
    }
  }
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

// console.log(hasPathDFS(graph, 'f', 'k')) // true
console.log(hasPathBFS(graph, 'f', 'k')) // true