/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [easy][array] 645. Set Mismatch

var findErrorNums = function (nums) {
  const hasmap = new Map();
  const n = nums.length;
  const result = [];

  for (const num of nums) {
    hasmap.set(num, (hasmap.get(num) || 0) + 1);
  }

  for (const [key, value] of hasmap) {
    if (value === 2) {
      result.push(key);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!hasmap.has(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(findErrorNums((nums = [1, 2, 2, 4])));
console.log(findErrorNums((nums = [2, 2])));
console.log(findErrorNums((nums = [1, 1])));
console.log(findErrorNums((nums = [3, 2, 2])));
// push 2
// then push 1 because 1 is missing in array
