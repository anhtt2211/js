/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      ans = mid;
      left++, right--;
    } else if (nums[mid] < target) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// [medium][binary-search] 74. Search a 2D Matrix
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];

    const isExist = search(arr, target);
    if (isExist !== -1) {
      return true;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    (matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ]),
    (target = 3)
  )
);
console.log(
  searchMatrix(
    (matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ]),
    (target = 13)
  )
);
