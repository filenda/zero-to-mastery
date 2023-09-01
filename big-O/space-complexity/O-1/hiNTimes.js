function arrayOfHiNTimes(n) {
  let hiArray = []
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }
  return hiArray
}

arrayOfHiNTimes(6) //O (n)