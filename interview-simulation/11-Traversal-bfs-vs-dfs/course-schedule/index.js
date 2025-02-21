function minCoursesToComplete(edges, targetCourse) {
  //build the graph using an adjencency list
  let graph = buildGraph(edges)
  //{ a: [b], b:[c], c:[d]}

  //do a search in the Graph (still deciding whether b or a)
  let downstreamCourses = explore(graph, targetCourse)

  return downstreamCourses - 1
}

//TOCHECK: Took me 25 min
function explore(graph, course) {
  let downstreamCourses = 0

  if (!graph[course] || graph[course].length === 0)
    return 1

  for (let downstreamCourse of graph[course]) {
    downstreamCourses += explore(graph, downstreamCourse)
  }

  downstreamCourses++

  return downstreamCourses
}

function buildGraph(edges) {
  const graph = {}

  for (let edge of edges) {
    let [a, b] = edge

    if (!graph[a]) graph[a] = []
    // if (!graph[b]) graph[b] = []

    graph[a].push(b)
    // graph[b].push(a)
  }

  return graph
}

const testCases = [
  {
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd']],
    targetCourse: 'a',
    expected: 3
  },
  {
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd']],
    targetCourse: 'd',
    expected: 0
  },
  {
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd'], ['d', 'e']],
    targetCourse: 'a',
    expected: 4
  },
  {
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd'], ['d', 'e']],
    targetCourse: 'e',
    expected: 0
  },
  {
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd'], ['d', 'e'], ['e', 'f']],
    targetCourse: 'a',
    expected: 5
  },
  {
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd'], ['d', 'e'], ['e', 'f']],
    targetCourse: 'f',
    expected: 0
  }
]

// Example usage:
testCases.forEach(({ edges, targetCourse, expected }, index) => {
  const result = minCoursesToComplete(edges, targetCourse);
  
  console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
});