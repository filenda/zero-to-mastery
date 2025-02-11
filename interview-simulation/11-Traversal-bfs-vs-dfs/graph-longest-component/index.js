// largest component problem

// Write a function, largestComponent,
// that takes in the adjacency list of
// an undirected graph.The function should
// return the size of the largest connected
// component in the graph.

function largestComponent(graph) {
  // keep track of the largest component so far
  let largest = 0
  let visited = new Set()

  // call the helper explore function for each node
  for (let node in graph) {
    largest = Math.max(largest, explore(graph, node, visited))
  }

  //return the result
  console.log('largest:', largest)
  return largest
}

function explore(graph, node, visited) {
  if (visited.has(String(node))) {
    return 0
  }

  let count = 1
  visited.add(String(node))

  for (let neighbor of graph[node]) {
    count += explore(graph, neighbor, visited)
  }

  return count
}

//TOCHECK: Took 38 min. Better solution above (without having to 
//reset the visited set for every node)
// function largestComponent(graph) {
//   // keep track of the largest component so far
//   let largest = 0
//   let visited = new Set()

//   // call the helper explore function for each node
//   for (let node in graph) {
//     explore(graph, node, visited)
//     largest = Math.max(largest, visited.size)
//     visited = new Set()
//   }

//   //return the result
//   console.log('largest:', largest)
//   return largest
// }

// function explore(graph, node, visited) {
//   if (visited.has(String(node))) {
//     return;
//   }

//   visited.add(String(node))

//   for (let neighbor of graph[node]) {
//     explore(graph, neighbor, visited)
//   }
// }

//Test cases:

largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4

largestComponent({
  1: ['2'],
  2: ['1', '8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}); // -> 6

largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); // -> 5

largestComponent({}); // -> 0

largestComponent({
  0: ['4', '7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []
}); // -> 3