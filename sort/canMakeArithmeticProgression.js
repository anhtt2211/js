/**
 * @param {number[]} arr
 * @return {boolean}
 */
// [easy][sort] 1502. Can Make Arithmetic Progression From Sequence

var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let dif = arr[1] - arr[0];

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== dif) {
      return false;
    }
  }
  return true;
};
