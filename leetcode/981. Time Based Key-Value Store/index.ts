// {
//   "foo": {
//      1: "bar",
//      2: "bar2",
//      3: "bar3",
//      4: "bar4",
//      5: "bar5"

//      7: "bar7"
//      8: "bar8"
//   }
// }

//get: 6

//L        M        R
//1, 2, 3, 4, 5, 7, 8

//            L  M  R
//1, 2, 3, 4, 5, 7, 8

//            M = 6     
//            L  R
//1, 2, 3, 4, 5, 7, 8

//            R = 6
//            M = 6     
//            L  
//1, 2, 3, 4, 5, 7, 8

//TOCHECK: Took ~70min and didn't finish
class TimeMap3 {

  private data: {}

  constructor() {
    this.data = {};
  }

  set(key: string, value: string, timestamp: number): void {
    if (this.data[key]) {
      this.data[key][timestamp] = value
    }
    else {
      this.data[key] = {}
      this.data[key][timestamp] = value
    }

    this.data[key]["highestTimestamp"] = Math.max(this.data[key]["highestTimestamp"] ?? 0, timestamp)
  }

  get(key: string, timestamp: number): string {
    let queriedItem = this.data[key][timestamp]

    //timestamp found
    if (queriedItem) {
      return queriedItem
    }
    //search for closest higher timestamp
    else if (this.data[key]) {
      let left = 1
      let right = this.data[key]["highestTimestamp"]

      while (left <= right) {
        let mid = Math.trunc((left + right) / 2)

        if (this.data[key][mid]) {
          return this.data[key][mid]
        }
        // else if (this.data[key][timestamp] > this.data[key][mid]) {
        else if (timestamp > mid) {
          left = mid + 1
        }
        else {
          right = mid
        }
      }
    }
    else {
      return ""
    }
  }
}

class TimeMap2 {

  private data: {}

  constructor() {
    this.data = {};
  }

  set(key: string, value: string, timestamp: number): void {
    if (this.data[key]) {
      this.data[key][timestamp] = value
    }
    else {
      this.data[key] = {}
      this.data[key][timestamp] = value
    }

    this.data[key]["highestTimestamp"] = Math.max(this.data[key]["highestTimestamp"] ?? 0, timestamp)
  }

  get(key: string, timestamp: number): string {
    let queriedItem = this.data[key][timestamp]

    //timestamp found
    if (queriedItem) {
      return queriedItem
    }
    //search for closest higher timestamp
    else if (this.data[key]) {
      let left = 1
      let right = this.data[key]["highestTimestamp"]

      while (left <= right) {
        let mid = Math.trunc((left + right) / 2)
        //TOCHECK: Avoid overflow by using this form of mid calculation instead:
        // let mid = left + Math.floor((right - left) / 2)


        if (this.data[key][mid]) {
          return this.data[key][mid]
        }
        // else if (this.data[key][timestamp] > this.data[key][mid]) {
        else if (timestamp > mid) {
          left = mid + 1
        }
        else {
          right = mid
        }
      }
    }
    else {
      return ""
    }
  }
}

//TOCHECK: took me 34minutes to solve all test cases
class TimeMap {

  private keyMap = {}

  constructor() {
    this.keyMap = {}
  }

  set(key: string, value: string, timestamp: number): void {
    if (!(key in this.keyMap))
      this.keyMap[key] = []

    this.keyMap[key].push([value, timestamp])
  }

  get(key: string, timestamp: number): string {

    if (!this.keyMap[key])
      return ""

    let res = ""
    let l = 0
    let r = this.keyMap[key].length - 1

    while (l <= r) {
      let m = Math.trunc((l + r) / 2)

      if (timestamp == this.keyMap[key][m][1]) {
        return this.keyMap[key][m][0]
      }
      else if (timestamp > this.keyMap[key][m][1]) {
        res = this.keyMap[key][m][0]
        l = m + 1
      }
      else {
        r = m - 1
      }
    }

    return res
  }
}

const timeMap = new TimeMap()
timeMap.set("foo", "bar", 1)        // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.set("foo", "bar2", 2)
console.log(timeMap.get("foo", 1))  // return "bar"
console.log(timeMap.get("foo", 3))  // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar4", 4)       // store the key "foo" and value "bar2" along with timestamp = 4.
console.log(timeMap.get("foo", 4))  // return "bar2"
console.log(timeMap.get("foo", 5))  // return "bar2"


// Output
// [null, null, "bar", "bar", null, "bar2", "bar2"]