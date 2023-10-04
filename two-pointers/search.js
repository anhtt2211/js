/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [medium][two-pointers] 33. Search in Rotated Sorted Array

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const numsMid = nums[mid];
    if (numsMid === target) return mid;

    if (nums[left] <= numsMid) {
      if (nums[left] <= target && target <= numsMid) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (numsMid <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
