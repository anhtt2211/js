/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 1991. Find the Middle Index in Array

var findMiddleIndex = function (nums) {
  const leftArr = [];
  const rightArr = [];

  leftArr[0] = nums[0];
  rightArr[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    leftArr[i] = leftArr[i - 1] + nums[i];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftArr[i] === rightArr[i]) {
      return i;
    }
  }

  return -1;
};

console.log(findMiddleIndex((nums = [2, 3, -1, 8, 4])));
console.log(findMiddleIndex((nums = [1, -1, 4])));
console.log(findMiddleIndex((nums = [2, 5])));
