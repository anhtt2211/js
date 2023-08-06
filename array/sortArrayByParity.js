/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [easy][array] 905. Sort Array By Parity

var sortArrayByParity = function (nums) {
  const evenNums = [],
    oddNums = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evenNums.push(num);
    } else oddNums.push(num);
  }

  return [...evenNums, ...oddNums];
};

console.log(sortArrayByParity((nums = [3, 1, 2, 4])));
console.log(sortArrayByParity((nums = [0])));
