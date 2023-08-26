/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
// [medium][sort] 2161. Partition Array According to Given Pivot

var pivotArray = function (nums, pivot) {
  const left = [];
  const middle = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      middle.push(element);
    }
  }

  return [...left, ...middle, ...right];
};

console.log(pivotArray((nums = [9, 12, 5, 10, 14, 3, 10]), (pivot = 10)));
/**
 * 9 < 10 => left [9]
 * 12 > 10 => left [9, null] right [12]
 * 5 < 10 => left [9]
 */
console.log(pivotArray((nums = [-3, 4, 3, 2]), (pivot = 2)));
