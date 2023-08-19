/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
// [easy][array] 2215. Find the Difference of Two Arrays

var findDifference = function (nums1, nums2) {
  let result1 = [];
  let result2 = [];

  const hash1 = new Set(nums1);
  const hash2 = new Set(nums2);

  for (const num of nums1) {
    if (!hash2.has(num)) {
      result1.push(num);
    }
  }

  for (const num of nums2) {
    if (!hash1.has(num)) {
      result2.push(num);
    }
  }

  result1 = [...new Set(result1)];
  result2 = [...new Set(result2)];

  return [result1, result2];
};

console.log(findDifference((nums1 = [1, 2, 3]), (nums2 = [2, 4, 6])));
console.log(findDifference((nums1 = [1, 2, 3, 3]), (nums2 = [1, 1, 2, 2])));
