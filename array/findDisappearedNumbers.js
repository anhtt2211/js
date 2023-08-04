/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [easy][array] 448. Find All Numbers Disappeared in an Array

var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const set = new Set(nums);
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(findDisappearedNumbers((nums = [4, 3, 2, 7, 8, 2, 3, 1])));
console.log(findDisappearedNumbers((nums = [1, 1])));
