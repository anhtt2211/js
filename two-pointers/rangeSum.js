/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// [medium][two-pointers] 1508. Range Sum of Sorted Subarray Sums

var rangeSum = function (nums, n, left, right) {
  const subarraySums = [];

  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = i; j < n; j++) {
      currentSum += nums[j];
      subarraySums.push(currentSum);
    }
  }

  subarraySums.sort((a, b) => a - b);

  const length = (n * (n + 1)) / 2;
  const targetSum = [];

  for (let i = 0; i < length; i++) {
    targetSum.push(subarraySums[i]);
  }

  let result = 0;
  for (let i = left - 1; i < right; i++) {
    result += targetSum[i];
  }

  return result;
};

console.log(rangeSum((nums = [1, 2, 3, 4]), (n = 4), (left = 1), (right = 5)));
console.log(rangeSum((nums = [1, 2, 3, 4]), (n = 4), (left = 3), (right = 4)));
console.log(rangeSum((nums = [1, 2, 3, 4]), (n = 4), (left = 1), (right = 10)));
