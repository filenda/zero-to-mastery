//TOCHECK: Broken - passes 190+ of about 250 test cases in leetcode
function groupAnagrams3(strs: string[]): string[][] {
  let response: string[][] = []

  if (strs.length === 0) {
    return [[]]
  }

  if (strs.length === 1) {
    return [[strs[0]]]
  }

  let hashTable = {}
  let takenHashTable = {}

  for (let i = 0; i < strs.length; i++) {
    if (takenHashTable[strs[i]]) {
      continue
    }

    hashTable = {}
    let groupOfAnagrams: string[] = []

    //build hash table
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] in hashTable) {
        hashTable[strs[i][j]]++
      }
      else {
        hashTable[strs[i][j]] = 1
      }
    }

    //search for anagrams of eat
    for (let x = 0; x < strs.length; x++) {
      let copyOfHashTable = { ...hashTable }

      for (let z = 0; z < strs[x].length; z++) {
        if (strs[x][z] in copyOfHashTable && copyOfHashTable[strs[x][z]] > 0) {
          copyOfHashTable[strs[x][z]]--
          if (z === strs[x].length - 1) {
            groupOfAnagrams.push(strs[x])
            takenHashTable[strs[x]] = true
          }
        }
        else {
          break
        }
      }
    }

    response.push(groupOfAnagrams)
  }

  return response
}

function groupAnagrams(strs: string[]): string[][] {
  let results: string[][] = [];
  let resultsHashTable: { [key: string]: string[] } = {}

  for (let str of strs) {
    const sortedStr = str.split('').sort().join('')

    if (sortedStr in resultsHashTable) {
      resultsHashTable[sortedStr].push(str)
    }
    else {
      resultsHashTable[sortedStr] = [str]
    }
  }

  for (const key in resultsHashTable) {
    results.push(resultsHashTable[key]);
  }

  return results
}

function groupAnagrams2(strs: string[]): string[][] {
  let results: string[][] = []
  let resultsHashTable: Map<string, string[]> = new Map();

  for (let str of strs) {
    let key: number[] = Array(26).fill(0)

    for (let char of str) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0)
      key[index]++
    }

    let strKey = key.join()

    if (resultsHashTable.has(strKey)) {
      resultsHashTable.set(strKey, [...resultsHashTable.get(strKey), str])
    }
    else {
      resultsHashTable.set(strKey, [str])
    }
  }

  for (const [key, value] of resultsHashTable) {
    results.push(value)
  }

  return results
}

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams2([""])) // [[""]]
console.log(groupAnagrams2(["a"])) // [["a"]]
console.log(groupAnagrams2([])) // [[]]
console.log(groupAnagrams2(["", ""])) // [['', '']]