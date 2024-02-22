/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][binary-search] 2529. Maximum Count of Positive Integer and Negative Integer

// return the first element greater than or equal target
const lowerBound = (arr, target) => {
  let left = 0,
    right = arr.length - 1,
    result = arr.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

// return the first element greater than target
const upperBound = (arr, target) => {
  let left = 0,
    right = arr.length - 1,
    result = arr.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

var maximumCount = function (nums) {
  const neg = lowerBound(nums, 0);
  const pos = nums.length - upperBound(nums, 0);

  return Math.max(neg, pos);
};

console.log(maximumCount((nums = [-2, -1, -1, 1, 2, 3])));
