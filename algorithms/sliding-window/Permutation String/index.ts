class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion2(s1, s2) {
    let left = 0
    let right = 0
    let s1map = {}

    for (let char of s1) {
      s1map[char] = s1map[char] ? s1map[char] + 1 : 1
    }

    let s2map = {}

    while (right < s2.length) {
      if (!(s2[left] in s1map)) {
        left++
      }
      else {
        right = left + 1
        s2map = {}
        s2map[s2[left]] = 1
      }

      if (s2[right] in s1map) {
        s2map[s2[right]]++
      }
    }

    return false
  }

  //TOCHECK: Took 64min. Only one test case
  checkInclusion(s1, s2) {
    let left = 0
    let right = 0
    let s1map = new Map()

    for (let char of s1) {
      s1map.set(char, s1map.get(char) ? s1map.get(char) + 1 : 1)
    }

    let s1mapBkp = new Map(s1map)

    while (right < s2.length) {
      if (s1map.get(s2[left])) {
        s1map.set(s2[left], s1map.get(s2[left]) - 1)

        if (isNaN(s1map.get(s2[left]))) {
          s1map.delete(s2[left])
        }

        if (s1map.size === 0) {
          return true
        }

        right = left + 1
        while (s1map.get(s2[right])) {
          s1map.set(s2[right], s1map.get(s2[right]) - 1)

          if (isNaN(s1map.get(s2[right]))) {
            s1map.delete(s2[right])
          }

          if (s1map.size === 0) {
            return true
          }

          right++
        }
        if (!s1map.get(s2[right])) {
          left = right + 1
          s1map = new Map(s1mapBkp)
        }
      }
      else {
        left++
      }
    }

    return false
  }
}

const sol = new Solution()

sol.checkInclusion("abc", "zxbfdlecabeeuioxc")

//s1 = abc
//s2 = zxbfdlecabeeuioxc
// should return true



