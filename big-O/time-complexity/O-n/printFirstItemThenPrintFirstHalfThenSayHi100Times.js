function printFirstItemThenPrintFirstHalfThenSayHi100Times(items) {
  console.log(items[0])

  var middleIndex = Math.floor(items.length / 2)

  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi')
  }
}

// O(1 + n/2 + 100)
// TURNS INTO O (N/2 + 101)
// TURNS INTO O (N + 1)
// FINAL FORM:
// O (N)