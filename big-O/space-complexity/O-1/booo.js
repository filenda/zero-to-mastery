function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booo')
  }
}

booo([1,2,3,4,5]) // O (1) - the only operation/assignment in the code is the 'let i = 0'
