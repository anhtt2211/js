/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// [easy][binary-search] 2089. Find Target Indices After Sorting Array

const findFirstPos = (nums, target) => {
  let left = 0,
    right = nums.length - 1,
    ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};
const findLastPos = (nums, target) => {
  let left = 0,
    right = nums.length - 1,
    ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

var targetIndices = function (nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  const result = [];

  const firstPos = findFirstPos(sorted, target);
  const lastPos = findLastPos(sorted, target);

  if (firstPos !== -1 && lastPos !== -1) {
    for (let i = firstPos; i <= lastPos; i++) {
      result.push(i);
    }
  }

  return result;
};

// 1 100 100
const nums = [
    48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62,
    77, 15, 38,
  ],
  target = 6;
const output = targetIndices(nums, target);
console.log("🚀 ~ output:", output);
