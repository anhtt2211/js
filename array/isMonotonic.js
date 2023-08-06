/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [easy][array] 896. Monotonic Array

var isMonotonic = function (nums) {
  let isIncreasing = true,
    isDecreasing = true;

  for (let i = 1; i <= nums.length - 1; i++) {
    const prev = nums[i - 1],
      curr = nums[i];

    if (curr > prev) {
      isDecreasing = false;
    }
    if (curr < prev) {
      isIncreasing = false;
    }
  }

  return isDecreasing || isIncreasing;
};

console.log(isMonotonic((nums = [1, 2, 2, 3])));
console.log(isMonotonic((nums = [6, 5, 4, 4])));
console.log(isMonotonic((nums = [1, 3, 2])));
