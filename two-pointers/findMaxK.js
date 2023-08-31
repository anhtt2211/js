/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][two-pointers] 2441. Largest Positive Integer That Exists With Its Negative

var findMaxK = function (nums) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] + nums[right] === 0) {
      return nums[right];
    }
    if (nums[left] + nums[right] > 0) {
      right--;
    } else {
      left++;
    }
  }

  return -1;
};

console.log(findMaxK((nums = [-1, 2, -3, 3])));
/**
 *
 */
console.log(findMaxK((nums = [-1, 10, 6, 7, -7, 1])));
