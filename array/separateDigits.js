/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [easy][array] 2553. Separate the Digits in an Array

var separateDigits = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let digits = [];

    while (num > 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }

    result = result.concat(digits.reverse());
  }
  return result;
};

console.log(separateDigits((nums = [13, 25, 83, 77])));
