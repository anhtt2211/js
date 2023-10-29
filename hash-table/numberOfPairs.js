/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [easy][hash-table] 2341. Maximum Number of Pairs in Array

var numberOfPairs = function (nums) {
  const map = new Map();
  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      map.delete(nums[i]);
      pairs++;
    } else {
      map.set(nums[i], 1);
    }
  }

  return [pairs, map.size];
};

console.log(numberOfPairs([1, 2, 3, 6, 7, 8, 9, 1], 3));
