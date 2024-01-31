/**
 * @param {number[]} nums
 * @return {number}
 */

// [medium][binary-search] 540. Single Element in a Sorted Array

var singleNonDuplicate = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2 === 1) {
      mid -= 1;
    }

    if (nums[mid] !== nums[mid + 1]) {
      right = mid - 1;
    } else {
      left = mid + 2;
    }
  }

  return nums[left];
};

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
const output = singleNonDuplicate(nums);
console.log("🚀 ~ output:", output);
