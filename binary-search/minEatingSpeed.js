/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// [medium][binary-search] 875. Koko Eating Bananas

var minEatingSpeed = function (piles, h) {
  let start = 1;
  let end = Math.max(...piles);

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (check(piles, mid, h)) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
};
const check = (bananas, mid, h) => {
  let time = 0;

  for (let i = 0; i < bananas.length; i++) {
    if (bananas[i] % mid === 0) {
      time += Math.floor(bananas[i] / mid);
    } else {
      time += Math.floor(bananas[i] / mid) + 1;
    }
  }

  if (time <= h) {
    return true;
  } else {
    return false;
  }
};

console.log(minEatingSpeed((piles = [3, 6, 7, 11]), (h = 8)));
console.log(minEatingSpeed((piles = [30, 11, 23, 4, 20]), (h = 5)));
console.log(minEatingSpeed((piles = [30, 11, 23, 4, 20]), (h = 6)));
