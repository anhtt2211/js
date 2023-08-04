/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// [easy][array] 349. Intersection of Two Arrays

var intersection = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const result = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (const num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }
  return result;
};

console.log(intersection((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2])));
console.log(intersection((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])));
