type Street = [number, number, number]; // [source location, destination location, time]

interface OptimalRoute {
  route: number[];
  totalTime: number;
}

//TODO: implement this shortest path problem yourself

function optimizeDumpsterRoute(
  facilityLocation: number,
  locations: number,
  streets: Street[],
  dumpsters: number[]
): OptimalRoute {
  const graph: Record<number, [number, number][]> = {};

  // Build the graph
  for (const [source, destination, time] of streets) {
    if (!graph[source]) {
      graph[source] = [];
    }

    graph[source].push([destination, time]);
  }

  const priorityQueue: [number, number, number[]][] = []; // [totalTime, location, route]
  const totalTimeToLocation: Record<string, number> = {};
  const visitedRoutes: Record<string, boolean> = {};

  // Initialize starting location (facility)
  priorityQueue.push([0, facilityLocation, [facilityLocation]]);
  totalTimeToLocation[`${facilityLocation}-${facilityLocation}`] = 0;

  while (priorityQueue.length > 0) {
    priorityQueue.sort((a, b) => a[0] - b[0]); // Sort the priority queue based on totalTime
    const [currentTotalTime, currentLocation, currentRoute] = priorityQueue.shift()!;
    console.log(currentTotalTime, currentLocation, currentRoute);

    if (visitedRoutes[currentRoute.join('-')]) {
      continue;
    }

    visitedRoutes[currentRoute.join('-')] = true;

    if (dumpsters.findIndex(d => d === currentLocation) !== -1) {
      dumpsters = dumpsters.filter((d) => d !== currentLocation);
    }

    if (dumpsters.length === 0) {
      // If all dumpsters are picked up, return to the facility
      const returnTime = graph[currentLocation]?.find(([destination]) => destination === facilityLocation)?.[1] || 0;
      const totalTime = currentTotalTime + returnTime;
      return { route: currentRoute.concat(facilityLocation), totalTime };
    }

    for (const [neighbor, time] of graph[currentLocation] || []) {
      const newTotalTime = currentTotalTime + time;
      const newRoute = currentRoute.concat(neighbor);

      const key = newRoute.join('-');
      if (
        !totalTimeToLocation[key] ||
        newTotalTime < totalTimeToLocation[key]
      ) {
        totalTimeToLocation[key] = newTotalTime;
        priorityQueue.push([newTotalTime, neighbor, newRoute]);
      }
    }
  }

  // Return an empty route if not all dumpsters are picked up
  return { route: [], totalTime: 0 };
}

const facilityLocation = 1
const locations = 5
const streets: Street[] = [
  [1, 2, 5],
  [2, 3, 10],
  [3, 4, 7],
  [4, 5, 3],
  [5, 1, 8],
  [2, 1, 6],
  [3, 2, 4],
  [4, 3, 2],
  [5, 4, 1]
]
const dumpsters = [2, 3, 4, 5]

console.log(optimizeDumpsterRoute(facilityLocation, locations, streets, dumpsters))
// Possible optimized route: [1, 2, 3, 4, 5, 1]
// Total time could be 5 + 10 + 7 + 3 + 8 = 33
