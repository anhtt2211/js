/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// [easy][array] 908. Smallest Range I

var smallestRangeI = function (nums, k) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  if (max - min <= 2 * k) return 0;
  return max - min - 2 * k;
};

console.log(smallestRangeI((nums = [1]), (k = 0)));
console.log(smallestRangeI((nums = [0, 10]), (k = 2)));
console.log(smallestRangeI((nums = [1, 3, 6]), (k = 3)));
