/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// [easy][binary-search] 1539. Kth Missing Positive Number
var findKthPositive = function (arr, k) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const missing = arr[mid] - (mid + 1);
    if (missing < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left + k;
};

console.log(findKthPositive((arr = [2, 3, 4, 7, 11]), (k = 5)));
console.log(findKthPositive((arr = [1, 2, 3, 4]), (k = 2)));
