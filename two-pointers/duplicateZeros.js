/**
 * @param {number[]} array
 * @return {void} Do not return anything, modify array in-place instead.
 */
// [easy][two-pointers] 1089. Duplicate Zeros

var duplicateZeros = function (array) {
  let countZero = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      countZero++;
    }
  }

  let len = array.length + countZero;
  for (let i = array.length - 1, j = len - 1; i < j; i--, j--) {
    if (array[i] !== 0) {
      if (j < array.length) {
        array[j] = array[i];
      }
    } else {
      if (j < array.length) {
        array[j] = array[i];
      }
      j--;
      if (j < array.length) {
        array[j] = array[i];
      }
    }
  }
};

let array = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(array);
console.log(array);
