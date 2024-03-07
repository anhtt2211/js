/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// [medium][two-pointers] 1855. Maximum Distance Between a Pair of Values
var maxDistance = function (nums1, nums2) {
  let maxDistance = 0;
  let left = 0,
    right = 0;

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] <= nums2[right]) {
      const pair = right - left;
      maxDistance = Math.max(maxDistance, pair);
      right++;
    } else {
      left++;
    }
  }

  return maxDistance;
};

console.log(
  maxDistance((nums1 = [55, 30, 5, 4, 2]), (nums2 = [100, 20, 10, 10, 5]))
);
console.log(maxDistance((nums1 = [2, 2, 2]), (nums2 = [10, 10, 1])));
