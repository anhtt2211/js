/**
 * @param {number[]} nums
 * @return {number}
 */
// [medium][two-pointers] 2576. Find the Maximum Number of Marked Indices
var maxNumOfMarkedIndices = function (nums) {
  nums.sort((a, b) => a - b);

  let left = Math.floor(nums.length / 2),
    right = nums.length - 1,
    count = 0;

  while (left >= 0 && right > (nums.length - 1) / 2) {
    const lVal = nums[left];
    const rVal = nums[right];

    if (2 * lVal <= rVal) {
      count += 2;
      left--, right--;
    } else {
      left--;
    }
  }

  return count;
};

console.log(
  maxNumOfMarkedIndices([
    42, 83, 48, 10, 24, 55, 9, 100, 10, 17, 17, 99, 51, 32, 16, 98, 99, 31, 28,
    68, 71, 14, 64, 29, 15, 40,
  ])
);
console.log(maxNumOfMarkedIndices((nums = [3, 5, 2, 4])));
console.log(maxNumOfMarkedIndices((nums = [9, 2, 5, 4])));
console.log(maxNumOfMarkedIndices((nums = [7, 6, 8])));
