function encode(strs: string[]): string {

  let encodedStr = ""

  for (let i = 0; i < strs.length; i++) {
    let preffix = `${strs[i].length}-`
    encodedStr += `${preffix}${strs[i]}`
  }

  return encodedStr
}

function decode(str: string): string[] {
  let response = []
  let contentBeforeDashSeparator = ""
  let currentWord = ""
  let foundDash = false
  let appendedCharCount = 0

  for (let i = 0; i <= str.length; i++) {
    if (foundDash) {
      let charCount = Number.parseInt(contentBeforeDashSeparator)
      if (appendedCharCount < charCount) {
        currentWord += str[i]
        appendedCharCount++
      }
      else {
        response.push(currentWord)
        currentWord = ""
        contentBeforeDashSeparator = ""
        appendedCharCount = 0
        foundDash = false
      }
    }
    if (str[i] === "-") {
      foundDash = true
      continue
    }
    else {
      contentBeforeDashSeparator += str[i]
    }
  }

  return response
}

const encodedString = encode(["lint", "code", "love", "you"])

console.log(JSON.stringify(decode(encodedString)))