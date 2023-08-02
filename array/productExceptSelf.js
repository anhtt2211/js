/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const products = [];
  const left = [];
  const right = [];

  let i, j;

  left[0] = 1;
  right[nums.length - 1] = 1;

  for (i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (j = nums.length - 2; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }

  for (i = 0; i < nums.length; i++) {
    products[i] = left[i] * right[i];
  }

  return products;
};

const nums1 = [1, 2, 3, 4];
const result1 = productExceptSelf(nums1);
console.log({ result1 });

const nums2 = [-1, 1, 0, -3, 3];
const result2 = productExceptSelf(nums2);
console.log({ result2 });
