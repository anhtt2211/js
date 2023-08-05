/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 594. Longest Harmonious Subsequence

var findLHS = function (nums) {
  const hasmap = new Map();
  let length = 0;

  for (const num of nums) {
    hasmap.set(num, (hasmap.get(num) || 0) + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    const prev = hasmap.get(nums[i] - 1);
    const curr = hasmap.get(nums[i]);
    const next = hasmap.get(nums[i] + 1);

    const sub1 = prev ? curr + prev : 0;
    const sub2 = next ? curr + next : 0;

    length = Math.max(length, sub1, sub2);
  }

  return length;
};

console.log(findLHS((nums = [1, 3, 2, 2, 5, 2, 3, 7])));
// 1 2 2 2
// 3 2 2 2 3
// 2 2 2 3
// return array[1]
// console.log(findLHS((nums = [1, 2, 3, 4])));
