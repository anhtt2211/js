/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
// [medium][binary-search] 1760. Minimum Limit of Balls in a Bag
var minimumSize = function (nums, maxOperations) {
  let left = 1;
  let right = Number.MAX_SAFE_INTEGER;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    let count = 0;
    nums.forEach((num) => {
      count += Math.floor((num - 1) / mid);
    });

    if (count > maxOperations) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
const nums1 = [9],
  maxOperations1 = 2;

const nums2 = [2, 4, 8, 2],
  maxOperations2 = 4;

const output1 = minimumSize(nums1, maxOperations1);
console.log("🚀 ~ output1:", output1);
const output2 = minimumSize(nums2, maxOperations2);
console.log("🚀 ~ output2:", output2);
