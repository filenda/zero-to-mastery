//~40min gross with bugs
//10min to solve edge cases/bugs the other day morning (still not passing all tests)
function dailyTemperatures2(temperatures: number[]): number[] {
  let result = new Array<number>(temperatures.length).fill(0)

  function backTracking(originPos, checkingAgainstPos) {

    if (originPos === temperatures.length - 1)
      return

    if (temperatures[checkingAgainstPos] > temperatures[originPos]) {
      result[originPos] = checkingAgainstPos - originPos
      backTracking(originPos + 1, originPos + 2)
    }
    else {
      if (checkingAgainstPos <= temperatures.length - 1) {
        backTracking(originPos, checkingAgainstPos + 1)
      }
      else {
        backTracking(originPos + 1, originPos + 2)
        // return
      }
    }
  }

  backTracking(0, 1)
  return result
}

//TOCHECK: Monotonic Decreasing Stack - Neet code 
//~25min (after watching neet code)
function dailyTemperatures(temperatures: number[]): number[] {

  let result = new Array<number>(temperatures.length).fill(0)

  interface tempTuple {
    index: number
    temperature: number
  }

  let stack = new Array<tempTuple>()
  stack.push({ index: 0, temperature: temperatures[0] })

  for (let i = 1; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1].temperature) {
      let tempOnTopOfTheStack = stack.pop()
      result[tempOnTopOfTheStack.index] = i - tempOnTopOfTheStack.index
    }

    stack.push({ index: i, temperature: temperatures[i] })
  }

  return result
}

console.log(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78])); //[3,1,1,2,1,1,0,1,1,0]
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) //[1,1,4,2,1,1,0,0]
// console.log(dailyTemperatures([30, 40, 50, 60])) //[1,1,1,0]
// console.log(dailyTemperatures([30, 60, 90])) // [1,1,0]
