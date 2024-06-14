export class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */

  //TOCHECK: Works, but Timelimit exceeded. Took 45min.
  characterReplacement2(s, k) {

    let left = 0
    let right = 1
    let max = 1
    let replacementsCount = 0
    let lastReplacementPos = null
    let currChar = s[left]

    while (right < s.length) {
      if (currChar === s[right]) {
        max = Math.max(max, right - left + 1)
        right++
      }
      else {
        if (replacementsCount < k) {
          lastReplacementPos = right
          max = Math.max(max, right - left + 1)
          right++
          replacementsCount++
        }
        else {
          left = lastReplacementPos
          right = lastReplacementPos + 1
          replacementsCount = 0
          currChar = s[left]
        }
      }
    }

    return max
  }

  //TOCHECK: Mostly correct. Took 60 minutes (drawning board + coding)
  characterReplacement3(s, k) {
    let charMap = new Map()
    let left = 0
    let right = 1
    let res = 1
    let maxFreq = 1
    charMap.set(s[left], 1)

    while (right < s.length) {
      if (charMap.has(s[right])) {
        charMap.set(s[right], charMap.get(s[right]) + 1)
        maxFreq = Math.max(maxFreq, charMap.get(s[right]))
        right++
      }
      else {
        charMap.set(s[right], 1)
      }

      if ((right - left) - maxFreq <= k) {
        res = Math.max(res, right - left)
      }
      else {
        left++
      }
    }

    return res
  }

  //TOCHECK: Working. Took 50 minutes (3rd attempt)
  characterReplacement(s, k) {
    let res = 1
    let maxChar = 1
    let left = 0
    let right = 0
    let map = new Map().set(s[left], 1)

    while (right < s.length) {
      if (right - left + 1 - maxChar <= k) {
        res = Math.max(res, right - left + 1)
        right++
        map.set(s[right], (map.get(s[right]) || 0) + 1)
        maxChar = Math.max(maxChar, map.get(s[right]) || 0)
      }
      else {
        map.set(s[left], map.get(s[left]) - 1)
        left++
      }
    }
    return res
  }
}

const sol = new Solution()

console.log(sol.characterReplacement("AABABBA", 1)); //4
console.log(sol.characterReplacement("ABAB", 2)) //4
console.log(sol.characterReplacement("XYYX", 2)) //4
console.log(sol.characterReplacement("AAABABB", 1)) //5

// ---

// while (right < s.length) {
// if (right - left + 1 - maxChar <= k)
// {
//   res = Math.max(res, right - left + 1)
//   right++
// }
// else {
//   map.set(s[left], map.get(s[left]) - 1)
//   left++
// }
// }
// return res

// res = 1, 2, 3, 4
// map = {A: 1}, {A: 2}, {A: 2, B: 1}, {A: 3, B: 1}, {A: 3, B: 2},
// maxChar = 1, 2, 2, 3, 3
// left = 0, 0, 0, 0, 1
// right = 0, 1, 2, 3, 4

//-
//AABABBA

//--
//AABABBA

//---
//AABABBA

//----
//AABABBA

//-----
//AABABBA

// ----
//AABABBA