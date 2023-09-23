const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let anySortingHappened = false;
  let counter = 0;

  while (true) {
    let first = array[counter];
    let second = array[counter + 1];

    if (first > second) {
      let aux = first;
      array[counter] = second;
      array[counter + 1] = aux

      if (!anySortingHappened) {
        anySortingHappened = true
      }
    }

    if (counter === array.length - 1) {
      if (anySortingHappened) {
        anySortingHappened = false
        counter = 0;
      } else {
        break;
      }
    } else {
      counter++
    }
  }

  return array;
}

function bubbleSort2(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);