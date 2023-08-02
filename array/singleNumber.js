/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 Solution 1
 */
// var singleNumber = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;

//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }

//     if (count === 1) {
//       return nums[i];
//     }
//   }
// };

/**
 Solution 2
 */
var singleNumber = function (nums) {
  let sorted = nums.sort(); // sorted = [1, 1, 2, 2, 3, 4, 4]
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1] && sorted[i] !== sorted[i + 1]) {
      return sorted[i];
    }
  }
};

const nums = [4, 1, 2, 1, 2, 4, 3];

const result = singleNumber(nums);

console.log({ result });
