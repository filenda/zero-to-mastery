function largestRectangleArea2(heights: number[]): number {
  let maxArea = heights[heights.length - 1]
  let barsCountForCurrentLoop = 1
  let minHeightForCurrentLoop = 0

  function backTracking(area: number, minHeight: number, barCount: number, index: number) {

  }

  backTracking(heights[heights.length - 1], heights[heights.length - 1], 1, heights.length - 1)

  return maxArea
}

//ja foi 35min
function largestRectangleArea3(heights: number[]): number {
  let maxArea = heights[0]
  let maxAreaForCurrentStartingRect = heights[0]
  let barsCountForCurrentStartingRect = 1
  let minHeightForCurrentStartingRect = heights[0]

  for (let i = 1; i < heights.length; i++) {
    minHeightForCurrentStartingRect = Math.min(minHeightForCurrentStartingRect, heights[i])
    let barsCount = barsCountForCurrentStartingRect + i

    while (maxAreaForCurrentStartingRect <= minHeightForCurrentStartingRect * barsCount) {

    }
  }

  return maxArea
}

//TOCHECK: 35 min (drawning + coding), + 35 for fixes and edge cases. Total: ~70min
function largestRectangleArea4(heights: number[]): number {
  let maxArea = heights[0]
  let stack = []

  stack.push({ index: 0, height: heights[0] })

  for (let i = 1; i < heights.length; i++) {
    let topItem = stack[stack.length - 1]

    if (topItem.height < heights[i]) {
      stack.push({ index: i, height: heights[i] })
      maxArea = Math.max(maxArea, heights[i])
    }
    else if (topItem.height === heights[i]) {
      maxArea = (i + 1 - topItem.index) * heights[i]
    }
    else {
      while (stack.length > 0 && stack[stack.length - 1].height > heights[i]) {
        topItem = stack.pop()
        backTracking(topItem)
        maxArea = heights[i] * (i + 1 - topItem.index)
      }
      stack.push({ index: i, height: heights[i] })
    }
  }

  function backTracking(currentItem) {
    if (!currentItem)
      return

    let topItem = stack.pop()

    if (!topItem)
      return

    let multiplier = (currentItem.index + 1 - topItem.index)

    maxArea = Math.max(maxArea, multiplier * topItem.height)
  }

  while (stack.length > 0) {
    let topItem = stack.pop()
    backTracking(topItem)
  }

  return maxArea
}

//TODO: Make your own. This is AI-Implemented
function largestRectangleArea(heights: number[]): number {
  let maxArea = 0
  let stack = []

  for (let i = 0; i <= heights.length; i++) {
    while (stack.length > 0 && (i === heights.length || heights[stack[stack.length - 1]] > heights[i])) {
      let height = heights[stack.pop() as number]
      let width = (stack.length > 0) ? i - stack[stack.length - 1] - 1 : i
      maxArea = Math.max(maxArea, height * width)
    }
    stack.push(i)
  }

  return maxArea
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])) //10
console.log(largestRectangleArea([1, 2, 2, 5, 3])) //8