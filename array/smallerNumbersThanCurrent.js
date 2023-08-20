/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [easy][array] 1365. How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      const element = nums[j];

      if (element < current) count++;
    }

    result.push(count);
  }

  return result;
};

console.log(smallerNumbersThanCurrent((nums = [8, 1, 2, 2, 3])));
console.log(smallerNumbersThanCurrent((nums = [6, 5, 4, 8])));
console.log(smallerNumbersThanCurrent((nums = [7, 7, 7, 7])));
