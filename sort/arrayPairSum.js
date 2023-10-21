/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][sort] 561. Array Partition

var arrayPairSum = function (nums) {
  let sum = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
