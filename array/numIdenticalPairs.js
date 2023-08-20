/**
 * @param {number[]} nums
 * @return {number}
 */
// [easy][array] 1512. Number of Good Pairs

var numIdenticalPairs = function (nums) {
  let pairCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const value1 = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const value2 = nums[j];

      if (value1 === value2) {
        pairCount++;
      }
    }
  }

  return pairCount;
};

console.log(numIdenticalPairs((nums = [1, 2, 3, 1, 1, 3])));
// Example 1:

// Input: nums = [1,2,3,1,1,3]
/**
 * 0: 1
 * 1: 2
 * 2: 3
 * 3: 1
 * 4: 1
 * 5: 3
 *
 * 1: 3 -> 3
 * 2: 1
 * 3: 2 -> 1
 */
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:
console.log(numIdenticalPairs((nums = [1, 1, 1, 1])));
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

console.log(numIdenticalPairs((nums = [1, 2, 3])));
// Input: nums = [1,2,3]
// Output: 0
