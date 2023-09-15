/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// [medium][two-pointers] 1679. Max Number of K-Sum Pairs

var maxOperations = function (nums, k) {
  let count = 0;

  nums.sort((a, b) => a - b);

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === k) {
      count++;

      left++, right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return count;
};

console.log(maxOperations((nums = [1, 2, 3, 4]), (k = 5)));
console.log(maxOperations((nums = [3, 1, 3, 4, 3]), (k = 6)));
// 1 3 3 3 4 || 6
