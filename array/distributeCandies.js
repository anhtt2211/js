/**
 * @param {number[]} candyType
 * @return {number}
 */
// [easy][array] 575. Distribute Candies

var distributeCandies = function (candyType) {
  const maxCandies = candyType.length / 2;
  const numberOfType = new Set(candyType).size;

  return Math.min(maxCandies, numberOfType);
};

console.log(distributeCandies((candyType = [1, 1, 2, 2, 3, 3])));
console.log(distributeCandies((candyType = [1, 1, 2, 3])));
console.log(distributeCandies((candyType = [6, 6, 6, 6])));
