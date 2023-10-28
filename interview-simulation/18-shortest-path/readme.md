# Interview

# Problem Statement: "Dumpster Pickup and Delivery Optimization"

In a city logistics network, there are `N` locations connected by `M` one-way streets. Each street takes a certain amount of time to traverse. Trucks are tasked with picking up filled dumpsters from multiple locations and delivering them to a central recycling facility. After emptying the dumpsters, the trucks need to deliver them back to their original locations.

Your task is to write a function that determines the optimal route for a truck to take in order to minimize the total time taken for the entire operation. You should return the sequence of locations visited and the total time taken.

### Function Signature

```tsx
type Street = [number, number, number]; // [source location, destination location, time]

interface OptimalRoute {
  route: number[];
  totalTime: number;
}

function optimizeDumpsterRoute(
  facilityLocation: number,
  locations: number,
  streets: Street[],
  dumpsters: number[]
): OptimalRoute;

```

### Parameters

- `facilityLocation`: An integer representing the location of the central recycling facility.
- `locations`: An integer `N` representing the total number of locations (`1 ≤ locations ≤ 100`).
- `streets`: An array of `Street` tuples, where each tuple contains three integers `[source location, destination location, time]` (`1 ≤ time ≤ 1000`). This array represents the one-way streets between locations.
- `dumpsters`: An array of integers representing the locations of the filled dumpsters that need to be emptied.

### Return

- Return an object conforming to the `OptimalRoute` interface.
    - `route`: An array of integers representing the sequence of locations visited in the optimized route, starting and ending at the `facilityLocation`.
    - `totalTime`: An integer representing the total time taken to complete the entire operation.

### Example

```tsx
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

// Possible optimized route: [1, 2, 3, 4, 5, 1]
// Total time could be 5 + 10 + 7 + 3 + 8 = 33

```

### Constraints

- There might not be a direct route between all pairs of locations.
- A location can be visited more than once, but the dumpster at that location should be picked up and delivered back in a single visit.
- A street between two locations is unique.

### Notes

- The truck has to return to the facility after each pickup and delivery operation. However, the objective is to find the optimal route to minimize the total time for all operations.
- You can assume that the time to load or unload dumpsters at any location is negligible.