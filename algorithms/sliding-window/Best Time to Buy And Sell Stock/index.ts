export class Solution {
  /**
   * @param {number} prices
   * @return {number}
   */

  //TOCHECK: Took 17min
  maxProfit(prices) {
    let maxProfit = 0
    let buyPos = 0
    let sellPos = 1

    while (sellPos < prices.length) {
      if (prices[buyPos] > prices[sellPos]) {
        buyPos = sellPos
      }
      else {
        maxProfit = Math.max(maxProfit, prices[sellPos] - prices[buyPos])
      }

      sellPos++
    }

    return maxProfit
  }
}

const sol = new Solution()

console.log(sol.maxProfit([2, 1, 2, 1, 0, 1, 2])) // 2
console.log(sol.maxProfit([5, 1, 5, 6, 7, 1, 10])) // 9
console.log(sol.maxProfit([10, 1, 5, 6, 7, 1])) // 6


//  ----
// [2, 1, 2, 1, 0, 1, 2]

//     ----
// [2, 1, 2, 1, 0, 1, 2]

//     -------
// [2, 1, 2, 1, 0, 1, 2]

//     ----------
// [2, 1, 2, 1, 0, 1, 2]

//              ----
// [2, 1, 2, 1, 0, 1, 2]

