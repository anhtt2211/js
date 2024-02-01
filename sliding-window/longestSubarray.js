/**
 * @param {number[]} nums
 * @return {number}
 */
// [medium][sliding-window] 1493. Longest Subarray of 1's After Deleting One Element
var longestSubarray = function (nums) {
  let left = 0;
  let zeros = 0;
  let ans = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeros++;
    }

    while (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1 - zeros);
  }

  return ans === nums.length ? ans - 1 : ans;
};

console.log("====================================");
console.log(longestSubarray((nums = [1, 1, 0, 1])));
console.log("====================================");

console.log("====================================");
console.log(longestSubarray((nums = [0, 1, 1, 1, 0, 1, 1, 0, 1])));
console.log("====================================");

console.log("====================================");
console.log(longestSubarray((nums = [1, 1, 1])));
console.log("====================================");
