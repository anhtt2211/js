/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// [easy][array] 350. Intersection of Two Arrays II

var intersect = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const result = [];
  const hasmap1 = new Map();
  const hasmap2 = new Map();

  for (const num of nums1) {
    hasmap1.set(num, (hasmap1.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    hasmap2.set(num, (hasmap2.get(num) || 0) + 1);
  }

  for (const [key, value] of hasmap1) {
    if (hasmap2.has(key)) {
      const size = value < hasmap2.get(key) ? value : hasmap2.get(key);

      for (let i = 0; i < size; i++) {
        result.push(key);
      }
    }
  }

  return result;
};

console.log(intersect((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2])));
console.log(intersect((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])));
