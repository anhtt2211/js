/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
// [easy][two-pointers] 2200. Find All K-Distant Indices in an Array

var findKDistantIndices = function (nums, key, k) {
  let left = 0,
    right = 0;

  const answers = [];

  while (left < nums.length && right < nums.length) {
    if (nums[right] !== key) {
      right++;
    } else {
      if (Math.abs(left - right) <= k) {
        answers.push(left);
      }

      if (Math.abs(left - right) > k && left > right) {
        right++;
      } else {
        left++;
      }
    }
  }

  return answers;
};

console.log("====================================");
console.log(
  findKDistantIndices((nums = [3, 4, 9, 1, 3, 9, 5]), (key = 9), (k = 1))
);
console.log("====================================");
