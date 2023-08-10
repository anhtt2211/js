/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [easy][array] 922. Sort Array By Parity II

var sortArrayByParityII = function (nums) {
  const result = [];

  let cursorOdd = 1;
  let cursorEven = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (element % 2 === 0) {
      result[cursorEven] = element;
      cursorEven += 2;
    } else {
      result[cursorOdd] = element;
      cursorOdd += 2;
    }
  }

  return result;
};

console.log(sortArrayByParityII((nums = [4, 2, 5, 7])));
console.log(sortArrayByParityII((nums = [2, 3])));
