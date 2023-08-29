/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [easy] 977. Squares of a Sorted Array

var sortedSquares = function (nums) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));

  return nums.map((num) => num * num);
};

console.log(sortedSquares((nums = [-4, -1, 0, 3, 10])));
console.log(sortedSquares((nums = [-7, -3, 2, 3, 11])));
