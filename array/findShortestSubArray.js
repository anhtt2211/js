/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 697. Degree of an Array

var findShortestSubArray = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const maxNumOcc = Math.max(...map.values());
  let numOcc = [];
  for (const [key, value] of map) {
    if (value === maxNumOcc) {
      numOcc.push(key);
    }
  }

  let shortedLength = Number.MAX_SAFE_INTEGER;
  for (const num of numOcc) {
    let left = nums.indexOf(num);
    let right = nums.lastIndexOf(num);

    shortedLength = Math.min(right - left + 1, shortedLength);
  }

  return shortedLength;
};

var findShortestSubArray2 = function (nums) {
  const map = new Map();
  let maxDegree = 0;
  let minLength = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], [i]);
    } else {
      map.get(nums[i]).push(i);
    }

    maxDegree = Math.max(maxDegree, map.get(nums[i]).length);
  }

  for (const [key, value] of map.entries()) {
    if (value.length === maxDegree) {
      minLength = Math.min(minLength, value[value.length - 1] - value[0] + 1);
    }
  }

  return minLength;
};

console.log(findShortestSubArray([1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2]));
/**
 * 1: 6
 * 2: 6
 */

console.log(findShortestSubArray((nums = [1, 2, 2, 3, 1])));
/**
 * 1: 2
 * 2: 2
 * 3: 1
 */
console.log(findShortestSubArray((nums = [1, 2, 2, 3, 1, 4, 2])));
/**
 * find the max number occur
 * 1: 2
 * 2: 3
 * 3: 1
 * 4: 1
 * => 2 is max occur
 * find the sub-array contain 2 occur 3 times
 */
