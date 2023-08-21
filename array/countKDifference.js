/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// [easy][array] 2006. Count Number of Pairs With Absolute Difference K

var countKDifference = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];

    for (let j = 0; j < nums.length; j++) {
      const second = nums[j];

      if (i < j && Math.abs(first - second) === k) {
        count++;
      }
    }
  }

  return count;
};

console.log(countKDifference((nums = [1, 2, 2, 1]), (k = 1)));
console.log(countKDifference((nums = [1, 3]), (k = 3)));
