/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// [medium][two-pointers] 167. Two Sum II - Input Array Is Sorted

var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left <= right) {
    const numLeft = numbers[left],
      numRight = numbers[right];
    const sum = numLeft + numRight;

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

/**
 *  2 7 11 15
 *
 * */

console.log(twoSum((numbers = [2, 7, 11, 15]), (target = 9)));
console.log(twoSum((numbers = [2, 3, 4]), (target = 6)));
console.log(twoSum((numbers = [-1, 0]), (target = -1)));
