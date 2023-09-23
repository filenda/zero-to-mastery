const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

  let currentSmallestValueIndex = 0;

  for (let j = 0; j < array.length; j++) {
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[currentSmallestValueIndex]) {
        currentSmallestValueIndex = i;
      }
    }

    let aux = array[j];
    array[j] = array[currentSmallestValueIndex];
    array[currentSmallestValueIndex] = aux;
  }

  return array;
}

selectionSort(numbers);
console.log(numbers);
