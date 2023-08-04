/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 485. Max Consecutive Ones

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;

  for (const num of nums) {
    if (num === 1) count++;
    else count = 0;

    if (max < count) max = count;
  }

  return max;
};

console.log(findMaxConsecutiveOnes((nums = [1, 1, 0, 1, 1, 1])));
console.log(findMaxConsecutiveOnes((nums = [1, 0, 1, 1, 0, 1])));
