/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// [medium][two-pointers] 15. 3Sum
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const ans = [];
  const hash = new Set();
  let target = 0;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        hash.add([nums[i], nums[left], nums[right]].toString());

        left++, right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  hash.forEach((item) => {
    ans.push(item.split(",").map(Number));
  });

  return ans;
};

console.log(threeSum((nums = [-1, 0, 1, 2, -1, -4])));
console.log(threeSum((nums = [0, 1, 1])));
console.log(threeSum((nums = [0, 0, 0])));
