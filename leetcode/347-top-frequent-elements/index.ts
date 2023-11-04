function topKFrequent(nums: number[], k: number): number[] {
  let results = new Array<number>(k).fill(null)
  let countingHashMap = new Map<number, number>()
  let frequenciesBucket: number[][] = new Array(nums.length + 1).fill(null).map(() => [])

  for (let i = 0; i < nums.length; i++) {
    if (countingHashMap.has(nums[i])) {
      countingHashMap.set(nums[i], countingHashMap.get(nums[i]) + 1)
    }
    else {
      countingHashMap.set(nums[i], 1)
    }
  }

  //TOCHECK: This is called bucket sorting
  for (const [key, value] of countingHashMap) {
    frequenciesBucket[value].push(key)
  }

  let counting = 0

  for (let i = frequenciesBucket.length - 1; i > 0; i--) {
    if (frequenciesBucket[i].length > 0) {
      for (let j = 0; j < frequenciesBucket[i].length; j++) {
        results[counting] = frequenciesBucket[i][j]
        counting++

        if (counting === k)
          return results
      }
    }
  }

  return results
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) //[1,2]
console.log(topKFrequent([1], 1)) //[1]