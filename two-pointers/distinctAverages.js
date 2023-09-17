/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][two-pointers] 2465. Number of Distinct Averages

var distinctAverages = function (nums) {
  nums.sort((a, b) => a - b);

  const averages = [];

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    left++, right--;

    averages.push(sum / 2);
  }

  return new Set(averages).size;
};

console.log(distinctAverages((nums = [4, 1, 4, 0, 3, 5])));
//  0 1 3 4 4 5
console.log(distinctAverages((nums = [1, 100])));
