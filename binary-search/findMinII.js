/**
 * @param {number[]} nums
 * @return {number}
 */
// [hard][binary-search] 154. Find Minimum in Rotated Sorted Array II

var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      right--;
    }
  }

  return nums[left];
};

const nums = [3, 3, 1, 3];
const output = findMin(nums);
console.log("🚀 ~ output:", output);
