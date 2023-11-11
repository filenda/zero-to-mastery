
//TOCHECK: Buggy, using wrong replace regex probably
function isPalindrome2(s: string): boolean {

  if (s.length < 2)
    return true

  s = s.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()

  let i = 0
  let j = s.length - 1

  while (i < j) {
    if (s[i] === " ")
      i++

    if (s[j] === " ")
      j--

    console.log("s[i] !== s[j]: " + s[i] !== s[j])

    if (s[i] !== s[j])
      return false

    i++
    j--
  }

  return true
}

//Working
function isPalindrome(s: string): boolean {

  if (s.length < 2)
    return true

  let newString = ""
  //string cleanup
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i)

    if (charCode >= 48 && charCode <= 57 ||
      charCode >= 97 && charCode <= 122) {
      newString += s[i]
    }
    else if (charCode >= 65 && charCode <= 90) {
      newString += String.fromCharCode(charCode + 32);
    }
  }

  let i = 0
  let j = newString.length - 1

  while (i < j) {
    if (newString[i] !== newString[j])
      return false

    i++
    j--
  }

  return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) //true
console.log(isPalindrome("race a car")) //false
console.log(isPalindrome(" ")) //true