/**
 * @param {number[]} nums
 * @return {number}
 */
// [medium][array] 287. Find the Duplicate Number

var findDuplicate = function (nums) {
  const hasmap = new Map();

  for (const num of nums) {
    hasmap.set(num, (hasmap.get(num) || 0) + 1);
  }

  for (const [key, value] of hasmap) {
    if (value > 1) {
      return key;
    }
  }
};

console.log(findDuplicate((nums = [2, 2, 2, 2, 2])));
