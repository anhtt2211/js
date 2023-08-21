/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
// [easy][array] 2367. Number of Arithmetic Triplets

/**
 * i < j < k,
 * nums[j] - nums[i] == diff, and
 * nums[k] - nums[j] == diff.
 */

var arithmeticTriplets = function (nums, diff) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const second = nums[j];

      if (second - first === diff) {
        for (let k = j + 1; k < nums.length; k++) {
          const third = nums[k];

          if (third - second === diff) {
            count++;
          }
        }
      }
    }
  }

  return count;
};

console.log(arithmeticTriplets((nums = [0, 1, 4, 6, 7, 10]), (diff = 3)));
console.log(arithmeticTriplets((nums = [4, 5, 6, 7, 8, 9]), (diff = 2)));
