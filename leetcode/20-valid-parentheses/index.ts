//1st attempt (wrong answer) - 18min
function isValid2(s: string): boolean {
  const bracketDictionary =
  {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] in bracketDictionary && bracketDictionary[s[i]] === s[i + 1]) {
      i += 1
      continue
    }
    else {
      return false
    }
  }

  return true
}

//2nd attempt (wrong answer)
function isValid3(s: string): boolean {
  const bracketDictionary =
  {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  let toBeReadStack: string[] = []
  let readStack: string[] = []

  for (let i = s.length - 1; i > -1; i--) {
    toBeReadStack.push(s[i])
  }

  while (toBeReadStack.length > 0) {
    let char1 = toBeReadStack.pop()
    let char2 = toBeReadStack.pop()

    if (!(char1 in bracketDictionary) || bracketDictionary[char1] !== char2) {
      toBeReadStack.push(char2)
      readStack.push(char1)
    }
    else {
      let readStackNextChar = readStack.pop()

      if (readStackNextChar in bracketDictionary
        && bracketDictionary[readStackNextChar] === char1) {

      }
      else {
        readStack.push(readStackNextChar)
      }
    }
  }

  return readStack.length === 0
}

//3rd attempt - neetcode assisted - ~17min
function isValid(s: string): boolean {
  const bracketDictionary = {
    ")": "(",
    "]": "[",
    "}": "{"
  }

  const stack: string[] = []

  for (let i = 0; i < s.length; i++) {

    if (s[i] in bracketDictionary) {
      let openingBracket = stack.pop()
      if (bracketDictionary[s[i]] === openingBracket) {
        continue
      }
      return false
    }
    else {
      stack.push(s[i])
    }
  }

  return stack.length === 0
}

// console.log(isValid("()")) //t
// console.log(isValid("()[]{}")) //t
// console.log(isValid("(]")) //f
console.log(isValid("{[]}")) //t