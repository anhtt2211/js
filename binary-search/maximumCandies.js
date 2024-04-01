/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
// [medium][binary-search] 153. Find Minimum in Rotated Sorted Array
var maximumCandies = function (candies, k) {
  let start = 0,
    end = 10000000;

  while (start < end) {
    const mid = Math.floor((start + end + 1) / 2);

    let sum = 0;
    for (let i = 0; i < candies.length; i++) {
      sum += Math.floor(candies[i] / mid);
    }

    if (sum < k) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }

  return start;
};

console.log(maximumCandies((candies = [3, 8, 6]), (k = 3)));
console.log(maximumCandies((candies = [5, 8, 6]), (k = 3)));
console.log(maximumCandies((candies = [2, 5]), (k = 11)));
