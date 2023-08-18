/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// [easy][array] 1431. Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
  const result = [];

  const candieLargest = Math.max(...candies);

  for (const candie of candies) {
    const totalCandie = candie + extraCandies;

    if (totalCandie >= candieLargest) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

console.log(kidsWithCandies((candies = [2, 3, 5, 1, 3]), (extraCandies = 3)));
console.log(kidsWithCandies((candies = [4, 2, 1, 1, 2]), (extraCandies = 1)));
console.log(kidsWithCandies((candies = [12, 1, 12]), (extraCandies = 10)));
