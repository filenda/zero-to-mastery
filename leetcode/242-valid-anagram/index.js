function isAnagram(s, t) {
    var firstStringHashTable = {};
    if (s.length !== t.length)
        return false;
    for (var i = 0; i < s.length; i++) {
        if (firstStringHashTable[s[i]]) {
            firstStringHashTable[s[i]]++;
        }
        else {
            firstStringHashTable[s[i]] = 1;
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (t[i] in firstStringHashTable && firstStringHashTable[t[i]] > 0) {
            firstStringHashTable[t[i]]--;
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //true
console.log(isAnagram("ab", "a")); //true
