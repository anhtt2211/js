/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// [medium] 209. Minimum Size Subarray Sum
var minSubArrayLen = function (target, nums) {
  let i = 0,
    j = 0,
    sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  while (j < nums.length) {
    sum += nums[j++];

    while (sum >= target) {
      min = Math.min(min, j - i);
      sum -= nums[i++];
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
