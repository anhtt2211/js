/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// [easy][two-pointers] 2540. Minimum Common Value
var getCommon = function (nums1, nums2) {
  let left = 0,
    right = 0;

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      return nums1[left];
    } else if (nums1[left] < nums2[right]) {
      left++;
    } else {
      right++;
    }
  }

  return -1;
};

console.log(getCommon((nums1 = [1, 2, 3]), (nums2 = [2, 4])));
console.log(getCommon((nums1 = [1, 2, 3, 6]), (nums2 = [2, 3, 4, 5])));
