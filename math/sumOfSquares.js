/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][math] 2778. Sum of Squares of Special Elements

var sumOfSquares = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) === 0) {
      sum += nums[i] * nums[i];
    }
  }

  return sum;
};

console.log(sumOfSquares((nums = [1, 2, 3, 4])));
console.log(sumOfSquares((nums = [2, 7, 1, 19, 18, 3])));
