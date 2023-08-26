/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [easy][sort] 2824. Count Pairs Whose Sum is Less than Target

var countPairs = function (nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const numI = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const numJ = nums[j];

      if (numI + numJ < target) {
        count++;
      }
    }
  }
  return count;
};

console.log(countPairs((nums = [-1, 1, 2, 3, 1]), (target = 2)));
console.log(countPairs((nums = [-6, 2, 5, -2, -7, -1, 3]), (target = -2)));
