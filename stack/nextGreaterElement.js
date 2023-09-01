/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// [easy][stack] 496. Next Greater Element I

var nextGreaterElement = function (nums1, nums2) {
  const greaterMap = new Map();
  const stack = [];
  const result = [];

  for (const number of nums2) {
    while (stack.length && number > stack[stack.length - 1]) {
      greaterMap.set(stack.pop(), number);
    }

    stack.push(number);
  }

  for (const num of nums1) {
    const ele = greaterMap.has(num) ? greaterMap.get(num) : -1;
    result.push(ele);
  }
  return result;
};

console.log(nextGreaterElement((nums1 = [4, 1, 2]), (nums2 = [1, 3, 4, 2])));
/**
 * 1: 3
 * 3: 4
 * 4: null
 * 2: null
 */
console.log(nextGreaterElement((nums1 = [2, 4]), (nums2 = [1, 2, 3, 4])));
