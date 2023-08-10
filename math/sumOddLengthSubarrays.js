/**
 * @param {number[]} arr
 * @return {number}
 */
// [easy][math] 1588. Sum of All Odd Length Subarrays

var sumOddLengthSubarrays = function (arr) {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j += 2) {
      const subArr = arr.slice(i, j + 1);
      totalSum += subArr.reduce((acc, curr) => acc + curr, 0);
    }
  }

  return totalSum;
};

console.log(sumOddLengthSubarrays((arr = [1, 4, 2, 5, 3])));
console.log(sumOddLengthSubarrays((arr = [1, 2])));
console.log(sumOddLengthSubarrays((arr = [10, 11, 12])));
