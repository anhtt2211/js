/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 169. Majority Element

/** Solution 1 */
var majorityElement1 = function (nums) {
  const dist = {};

  for (const num of nums) {
    dist[num] = (dist[num] || 0) + 1;
  }

  let maxKey = null,
    maxValue = Number.MIN_SAFE_INTEGER;
  for (const [key, value] of Object.entries(dist)) {
    if (maxValue < value) {
      maxValue = value;
      maxKey = key;
    }
  }

  return maxKey;
};

/** Optimize */
var majorityElement = function (nums) {
  let result = nums[0],
    count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i];
      count = 1;
    } else if (result === nums[i]) count++;
    else if (result !== nums[i]) count--;
  }

  return result;
};

console.log(majorityElement((nums = [6, 5, 5])));
console.log(majorityElement((nums = [2, 2, 1, 1, 1, 2, 2])));
