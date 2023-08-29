/**
 * @param {number[]} arr
 * @return {boolean}
 */
// [easy][two-pointers] 1346. Check If N and Its Double Exist

/**
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 */
var checkIfExist = function (arr) {
  const set = new Set(arr);

  let zeroCount = 0;
  for (const num of arr) {
    if (num === 0) {
      zeroCount++;
    }
  }
  if (zeroCount > 1) return true;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i] * 2;

    if (set.has(num) && num !== arr[i]) {
      return true;
    }
  }

  return false;
};

console.log(checkIfExist((arr = [-2, 0, 10, -19, 4, 6, -8])));
