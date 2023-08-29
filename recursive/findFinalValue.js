/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
// [easy][recursive] 2154. Keep Multiplying Found Values by Two

var findFinalValue = function (nums, original) {
  const set = new Set(nums);

  if (set.has(original)) {
    return findFinalValue(nums, original * 2);
  } else {
    return original;
  }
};

console.log(findFinalValue((nums = [5, 3, 6, 1, 12]), (original = 3)));
console.log(findFinalValue((nums = [2, 7, 9]), (original = 4)));
