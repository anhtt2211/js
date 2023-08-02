/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

const nums1 = [1, 2, 3, 1];
const result1 = containsDuplicate(nums1);
console.log({ result1 });

const nums2 = [1, 2, 3, 4];
const result2 = containsDuplicate(nums2);
console.log({ result2 });

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const result3 = containsDuplicate(nums3);
console.log({ result3 });
