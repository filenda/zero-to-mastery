//TOCHECK: 36 min gross with 2 base tests passed

function minEatingSpeed(piles: number[], h: number): number {

  let left = 1
  let right = Math.max(...piles)
  let curK = 0

  while (left <= right) {
    let mid = Math.ceil((left + right) / 2)

    for (let i = 0; i < piles.length; i++) {
      curK += Math.ceil(piles[i] / mid)
    }

    if (curK < h) {
      right = mid
      curK = 0
    }
    else if (curK > h) {
      left = mid
      curK = 0
    }
    else {
      return mid
    }
  }
}


function minEatingSpeed2(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let totalHours = 0;

    for (let pile of piles) {
      totalHours += Math.ceil(pile / mid);
    }

    if (totalHours > h) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8)) //4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)) //30