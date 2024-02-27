//first horrible attempt
// function carFleet2(target: number, position: number[], speed: number[]): number {
//   let vehiclesCount = position.length
//   let fleets = 0
//   let updatedPositions = {}
//   let currentMile = 0

//   while (currentMile < target) {
//     for (let i = 0; i < vehiclesCount; i++) {
//       if (updatedPositions[position[i] + speed[i]]) {
//         updatedPositions[position[i] + speed[i]].push(i)
//         speed[i] = 
//       }
//       else {
//         updatedPositions[position[i] + speed[i]] = [i]
//         fleets++
//       }
//     }

//     currentMile++
//   }

//   return fleets
// }


//TOCHECK: OK. ~60m+ (took too much runtime and had a bad performance)
function carFleet2(target: number, position: number[], speed: number[]): number {
  let initialPositionAndSpeedMap = {}
  let sortedVehicles = new Array(position.length)
  let stack = []

  for (let i = 0; i < position.length; i++) {
    initialPositionAndSpeedMap[position[i]] = speed[i]
  }

  sortedVehicles = Object.keys(initialPositionAndSpeedMap)
    .map(key => [key, initialPositionAndSpeedMap[key]])
    .sort((a, b) => b[0] - a[0])
    .map(([position, speed]) => ({ position: parseInt(position), speed }));

  let lastItemTimeToTarget = (target - sortedVehicles[0].position) / sortedVehicles[0].speed
  stack.push(lastItemTimeToTarget)

  for (let i = 1; i < sortedVehicles.length; i++) {
    let itemTimeToTarget = (target - sortedVehicles[i].position) / sortedVehicles[i].speed
    if (itemTimeToTarget > lastItemTimeToTarget) {
      stack.push(itemTimeToTarget)
    }

    lastItemTimeToTarget = stack[stack.length - 1]
  }

  return stack.length
}

//TOCHECK: Created the sortedVehicles array directly from the input instead of using an intermediate hashmap
function carFleet(target: number, position: number[], speed: number[]): number {
  let sortedVehicles = position
    .map((pos, i) => ({ position: pos, speed: speed[i] }))
    .sort((a, b) => b.position - a.position)

  let stack = []
  let lastItemTimeToTarget = (target - sortedVehicles[0].position) / sortedVehicles[0].speed;
  stack.push(lastItemTimeToTarget)

  for (let i = 1; i < sortedVehicles.length; i++) {
    let itemTimeToTarget = (target - sortedVehicles[i].position) / sortedVehicles[i].speed;
    if (itemTimeToTarget > lastItemTimeToTarget) {
      stack.push(itemTimeToTarget)
    }
    lastItemTimeToTarget = stack[stack.length - 1]
  }

  return stack.length
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])) //3
// console.log(carFleet(10, [3], [3])) //1
// console.log(carFleet(100, [0, 2, 4], [4, 2, 1])) //1