// O(n) --> Linear time

const findNemo = function (array) {

  let t0 = performance.now()

  for (let i = 0; i < array.length; i++) {
    if (fishes[i] === 'Nemo') {
      console.log('Found Nemo')
    }
  }

  let t1 = performance.now()

  console.log('Call to findNemo took ' + (t1 - t0) + ' milliseconds')
}

const fishes = ['Nemo']
const everyone = new Array(1000).fill('Nemo')

findNemo(everyone)
