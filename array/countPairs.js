/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// [easy][array] 2176. Count Equal and Divisible Pairs in an Array

var countPairs = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const element1 = nums[i];

    for (let j = 0; j < nums.length; j++) {
      const element2 = nums[j];

      const product = i * j;
      if (i < j && element1 === element2 && product % k === 0) {
        count++;
      }
    }
  }
  return count;
};

console.log(countPairs((nums = [3, 1, 2, 2, 2, 1, 3]), (k = 2)));
console.log(countPairs((nums = [1, 2, 3, 4]), (k = 1)));
