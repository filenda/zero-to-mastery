//Given two arrays, create a function that let's a user know whether
//these two arrays contain any common elements

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

//Worst and obvious solution
//O(a * b)
function checkCommonElementExistance1(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        console.log('true')
        return true;
      }
    }
  }

  console.log('false')
  return false;
}

//Better solution
//O(n)
//O(a * b) if we consider the internals of the js 'find' method
function checkCommonElementExistance2(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    if (array2.find(item => item === array1[i])) {
      console.log('true')
      return true;
    }
  }

  console.log('false')
  return false;
}


//Best solution 1
//O(a + b)
function checkCommonElementExistance3(array1, array2) {
  const set = new Set(array1);

  for (let i = 0; i < array2.length; i++) {
    if (set.has(array2[i])) {
      console.log('true');
      return true;
    }
  }

  console.log('false');
  return false;
}

//Best solution 2
//O(a + b)
function checkCommonElementExistance4(array1, array2) {
  const obj = {};

  for (let i = 0; i < array1.length; i++) {
    obj[array1[i]] = true;
  }

  for (let i = 0; i < array2.length; i++) {
    if (obj[array2[i]]) {
      console.log('true');
      return true;
    }
  }

  console.log('false');
  return false;
}




checkCommonElementExistance4(array1, array2);