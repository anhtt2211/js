/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 747. Largest Number At Least Twice of Others

var dominantIndex = function (nums) {
  const max = Math.max(...nums);

  const index = nums.indexOf(max);

  for (const num of nums) {
    if (num * 2 > max && num !== max) {
      return -1;
    }
  }

  return index;
};

console.log(dominantIndex((nums = [3, 6, 1, 0])));
console.log(dominantIndex((nums = [1, 2, 3, 4])));
