//Make a function that, given two asc sorted arrays,
//merges them into a single one, keeping it sorted

//non-functional
function mergeSortedArrays(array1, array2) {
  const finalArray = [];

  for (let i = 0; i < array1.length; i++) {

    for (let j = 0; j < array2.length; j++) {
      if (array2[j] < array1[i]) {
        finalArray.push(array2[j]);
        break;
      }
    }

    finalArray.push(array1[i]);
  }

  console.log(finalArray);
}

//functional but not optimal
function mergeSortedArrays2(array1, array2) {
  let finalArray = [...array1];

  for (let j = 0; j < array2.length; j++) {
    for (let i = 0; i < finalArray.length; i++) {
      if (finalArray[i] >= array2[j]) {
        finalArray.splice(i, 0, array2[j])
        break;
      }
    }
  }

  console.log(finalArray);
}

//functional and optimal
function mergeSortedArrays3(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    }
    else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log(mergedArray);
  return mergedArray;
}


const array1 = [0, 3, 4, 31]
const array2 = [4, 6, 8, 9, 30]

mergeSortedArrays3(array1, array2)