/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [easy][array] 1636. Sort Array by Increasing Frequency

var frequencySort = function (nums) {
  const result = [];

  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return nums.sort((a, b) => {
    const frequencyComparison = map.get(a) - map.get(b);

    if (frequencyComparison === 0) {
      return b - a;
    }

    return frequencyComparison;
  });
};

console.log(frequencySort((nums = [1, 1, 2, 2, 2, 3])));
