const testCases = [
  [60, 40, 80, 30, 50],
  [70, 60, 30, 40, 20],
  [90, 80, 20],
  [50, 50, 40, 30],
  [60, 70, 80, 50, 40]
]

// TODO: Finish this exercise
function calcTrips(weights) {

  if (!weights)
    return null

  if (weights.length === 0)
    return 0

  //assumes no person will weight more than 100 kg
  if (weights.length === 1)
    return 1

  let trips = 0

  weights = weights.sort((a, b) => a - b)

  for (let i = 0; i < weights.length; i++) {
    if (weights[i] + weights[i + 1] <= 100) {
      i += 1
    }

    trips++
  }

  return trips
}

testCases.forEach((testCase, index) => {
  console.log(`Test case ${index + 1}: ${calcTrips(testCase)} trips`)
})