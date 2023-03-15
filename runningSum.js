/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      res.push(nums[i]);
    } else {
      let element = 0;
      for (let j = 0; j <= i; j++) {
        element = element + nums[j];
      }
      res.push(element);
    }
  }

  return res;
};

const nums = [1, 1, 1, 1, 1];
// expect: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

console.log(runningSum(nums));
