/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [medium][two-pointers] 1498. Number of Subsequences That Satisfy the Given Sum Condition
var numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b);

  const mod = 1e9 + 7;
  const n = nums.length;
  let ans = 0;

  const pow2 = new Array(n);
  pow2[0] = 1;
  for (let i = 1; i < n; i++) {
    pow2[i] = (pow2[i - 1] * 2) % mod;
  }

  let left = 0,
    right = n - 1;

  while (left <= right) {
    if (nums[left] + nums[right] <= target) {
      ans = (ans + pow2[right - left]) % mod;
      left++;
    } else {
      right--;
    }
  }

  return ans;
};

console.log(numSubseq((nums = [3, 5, 6, 7]), (target = 9)));
console.log(numSubseq((nums = [3, 3, 6, 8]), (target = 10)));
console.log(numSubseq((nums = [2, 3, 3, 4, 6, 7]), (target = 12)));
