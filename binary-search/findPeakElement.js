/**
 * @param {number[]} nums
 * @return {number}
 */
// [medium][binary-search] 162. Find Peak Element
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid > 0 && nums[mid - 1] > nums[mid]) {
      right = mid - 1;
    } else if (mid < nums.length - 1 && nums[mid + 1] > nums[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};
