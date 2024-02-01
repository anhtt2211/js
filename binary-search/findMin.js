/**
 * @param {number[]} nums
 * @return {number}
 */
// [medium][binary-search] 153. Find Minimum in Rotated Sorted Array

var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const output = findMin(nums);
console.log("🚀 ~ output:", output);
