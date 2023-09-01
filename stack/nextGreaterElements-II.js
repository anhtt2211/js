/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [medium][stack] 503. Next Greater Element II

var nextGreaterElements = function (nums) {
  const result = [];

  const length = nums.length;
  const greaterMap = new Map();

  for (let i = 0; i < length * 2; i++) {
    const numI = nums[i % length];

    for (let j = i + 1; j < length * 2; j++) {
      const numJ = nums[j % length];

      if (numI < numJ) {
        greaterMap.set(i, numJ);
        break;
      }
    }
  }

  for (let i = 0; i < length; i++) {
    const ele = greaterMap.has(i) ? greaterMap.get(i) : -1;
    result.push(ele);
  }

  return result;
};

var nextGreaterElements2 = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n * 2; i++) {
    const currentIndex = i % n;
    while (
      stack.length > 0 &&
      nums[currentIndex] > nums[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      result[prevIndex] = nums[currentIndex];
    }
    if (i < n) {
      stack.push(currentIndex);
    }
  }

  return result;
};

console.log(nextGreaterElements2([100, 1, 11, 1, 120, 111, 123, 1, -1, -100]));
