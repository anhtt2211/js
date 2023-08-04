/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [medium][array] 229. Majority Element II

var majorityElement = function (nums) {
  const result = [];
  const hasmap = new Map();

  let n = Math.floor(nums.length / 3);

  for (const num of nums) {
    hasmap.set(num, (hasmap.get(num) || 0) + 1);
  }

  for (const [key, value] of hasmap) {
    if (value > n) {
      result.push(key);
    }
  }

  return result;
};

console.log(majorityElement((nums = [3, 2, 3])));
console.log(majorityElement((nums = [1])));
console.log(majorityElement((nums = [1, 2])));
