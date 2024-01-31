/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// [medium][binary-search] 34. Find First and Last Position of Element in Sorted Array

const findFirstPos = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      ans = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

const findLastPos = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      ans = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

var searchRange = function (nums, target) {
  return [findFirstPos(nums, target), findLastPos(nums, target)];
};

const nums = [1],
  target = 1;
const output = searchRange(nums, target);
console.log("🚀 ~ output:", output);
