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
  let result: string[][] = []

  

  return result
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]
console.log(groupAnagrams([])) // [[]]
console.log(groupAnagrams(["", ""])) // [['', '']]