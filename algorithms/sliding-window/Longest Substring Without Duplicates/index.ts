export class Solution {
  /**
   * @param {string} s
   * @return {number}
   */

  //TOCHECK: Wrong. Took a gross 18 min + 10 min to solve edge cases. TOTAL: 28 min.
  lengthOfLongestSubstring2(s) {
    if (s === "")
      return 0
    if (s.length === 1)
      return 1

    let map = {}
    let left = 0
    let right = 1
    map[s[left]] = true
    let max = 1
    let currWdMax = 1

    while (right < s.length) {
      if (s[right] in map) {
        max = Math.max(max, currWdMax)
        left++
        currWdMax = 1
        map = {}
        right = left + 1
      }
      else {
        map[s[right]] = true
        currWdMax++
        max = Math.max(max, currWdMax)
        right++
      }

    }

    return max
  }

  //TOCHECK: Right. Took 60+ min
  lengthOfLongestSubstring(s) {

    if (s === "")
      return 0
    if (s.length === 1)
      return 1

    let hashSet = new Set<String>()
    let left = 0
    let right = 1
    hashSet.add(s[left])
    let max = hashSet.size

    for (let i = 0; i < s.length; i++) {
      if (!s[right]) {
        break
      }

      while (hashSet.has(s[right])) {
        hashSet.delete(s[left])
        left++
      }

      hashSet.add(s[right])
      max = Math.max(max, hashSet.size)
      right++
    }

    return max
  }
}

const sol = new Solution()

console.log(sol.lengthOfLongestSubstring("aab")) //2
console.log(sol.lengthOfLongestSubstring("pwwkew")) //3
console.log(sol.lengthOfLongestSubstring("zxyzxyz")) //3
console.log(sol.lengthOfLongestSubstring("xxxx")) //1

// --
// zzzxyz

//  --
// zzzxyz

//   --
// zzzxyz