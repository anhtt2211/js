/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 268. Missing Number

var missingNumber = function (nums) {
  const hasmap = new Map();

  for (const num of nums) {
    hasmap.set(num, (hasmap.get(num) || 0) + 1);
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!hasmap.has(i)) return i;
  }
};

console.log(missingNumber((nums = [3, 0, 1])));
console.log(missingNumber((nums = [0, 1])));
console.log(missingNumber((nums = [9, 6, 4, 2, 3, 5, 7, 0, 1])));
