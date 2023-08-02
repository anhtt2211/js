// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  * Given an integer array nums and an integer k,
//  * return true if there are two distinct indices i and j in the array
//  * such that nums[i] == nums[j] and abs(i - j) <= k.
//  */
var containsNearbyDuplicate = function (nums, k) {
  const hasmap = new Map();

  for (let index = 0; index < nums.length; index++) {
    if (index - hasmap.get(nums[index]) <= k) {
      return true;
    }

    hasmap.set(nums[index], index);
  }

  return false;
};

const nums1 = [0, 1, 0, 3, 4, 5, 0],
  k1 = 6;
const result1 = containsNearbyDuplicate(nums1, k1);
console.log({ result1 });
