/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 628. Maximum Product of Three Numbers

var maximumProduct = function (nums) {
  const arraySorted = [...nums].sort((a, b) => b - a);

  const max1 = arraySorted[0] * arraySorted[1] * arraySorted[2];
  const max2 =
    arraySorted[nums.length - 1] *
    arraySorted[nums.length - 2] *
    arraySorted[0];
  return Math.max(max1, max2);
};

console.log(maximumProduct((nums = [-100, -98, 1, 2, 3, 4])));
