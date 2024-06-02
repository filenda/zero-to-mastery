class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {

    let x = nums1.length
    let y = nums2.length

    if (y > x) {
      return this.findMedianSortedArrays(nums2, nums1)
    }

    let xLeft = 0
    let xRight = nums1.length - 1
    let xMid = Math.trunc((xLeft + xRight) / 2)
    let yMid = Math.trunc((x + y + 1) / 2)

    while (xLeft <= xRight) {
      if ((nums1[xMid - 1] <= nums2[yMid]) &&
        (nums2[yMid - 1] <= nums1[xMid])) {
        if (x + y % 2)
      }
    }
  }
}

var sol = new Solution()

sol.findMedianSortedArrays([1, 2, 3, 4], [4, 5, 6, 7])
// [1, 2, 3, 4, 4, 5, 6, 7]
// R.: (4 + 4) / 2 = 4


//1           | 2, 3, 4
//4 , 5, 6, 7 | +[...]

//1 , 2     | 3, 4
//4 , 5 , 6 | 7

//1 , 2 , 3 | 4
//4 , 5     | 6, 7

//1 , 2 , 3, 4 | +[...]
//4            | 5, 6, 7

//avg(4, 4) = 4

//---.---.---.---.---

// xleft = 0
// xright = 3

//1        | 2, 3, 4
//4 , 5, 6 | 7



sol.findMedianSortedArrays([23, 24, 26], [4, 5, 6, 7])
// [4, 5, 6, 7, 23, 24, 26]
// R.: 7