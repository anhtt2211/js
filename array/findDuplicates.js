/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [medium][array] 442. Find All Duplicates in an Array

var findDuplicates = function (nums) {
  const hasmap = new Map();
  const result = [];

  for (const num of nums) {
    hasmap.set(num, (hasmap.get(num) || 0) + 1);
  }

  for (const [key, value] of hasmap) {
    if (value === 2) {
      result.push(key);
    }
  }

  return result;
};

console.log(findDuplicates((nums = [4, 3, 2, 7, 8, 2, 3, 1])));
console.log(findDuplicates((nums = [1, 1, 2])));
console.log(findDuplicates((nums = [1])));
