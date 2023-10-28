type Street = [number, number, number]; // [source location, destination location, time]

interface OptimalRoute {
  route: number[];
  totalTime: number;
}

//TODO: implement this shortest path problem
function optimizeDumpsterRoute(
  facilityLocation: number,
  locations: number,
  streets: Street[],
  dumpsters: number[]
): OptimalRoute {
  let optimizedRoute: OptimalRoute = {
    route: [],
    totalTime: 0
  }

  //Put the facility location as the first location of the optimzed route
  optimizedRoute.route.push(facilityLocation)

  //Find the facility location

  // Loop through the dumpster locations

  for (let i = 0; i < dumpsters.length; i++) {
    // loop through the streets array
    for (let j = 0; j < streets.length; j++) {

    }
  }

  //Put the facility location as the last location of the optimzed route
  optimizedRoute.route.push(facilityLocation)

  return optimizedRoute
};

const facilityLocation = 1;
const locations = 5;
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
];
const dumpsters = [2, 3, 4, 5];

console.log(optimizeDumpsterRoute(facilityLocation, locations, streets, dumpsters));
// Possible optimized route: [1, 2, 3, 4, 5, 1]
// Total time could be 5 + 10 + 7 + 3 + 8 = 33
