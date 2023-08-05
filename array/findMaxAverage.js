/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// [easy][array] 643. Maximum Average Subarray I

var findMaxAverage = function (nums, k) {
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxSum = currentSum;

  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum / k;
};

console.log(findMaxAverage((nums = [1, 12, -5, -6, 50, 3]), (k = 4)));
/**
 * Output: 12.75000
 * Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 */

console.log(findMaxAverage((nums = [5]), (k = 1)));
console.log(findMaxAverage((nums = [-1]), (k = 1)));
