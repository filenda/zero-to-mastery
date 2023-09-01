//Create a function that reverses a string
//'Hi My Name is Vini' should be:
//'iniV si emaN yM iH'

//O (n)
function reverse(str) {
  //Pre-validate the string
  if (!str || typeof str != 'string' || str.length < 2) return str;

  let reverseStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }

  console.log(reverseStr)
}

var stringToBeReversed = 'Hi My Name is Vini'

reverse(stringToBeReversed)
