/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// [medium][binary-search] 81. Search in Rotated Sorted Array II
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = left + (right - left) / 2;

    if (nums[mid] === target) {
      return true;
    }

    if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
      left++, right--;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
};

const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
  target = 2;
const output = search(nums, target);
console.log("🚀 ~ output:", output);
