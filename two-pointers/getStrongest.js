/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// [medium][two-pointers] 1471. The k Strongest Values in an Array

var getStrongest = function (arr, k) {
  const median = findMedian(arr);
  const strongest = [];

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const lVal = arr[left];
    const rVal = arr[right];

    if (Math.abs(lVal - median) > Math.abs(rVal - median)) {
      strongest.push(lVal);
      left++;
    } else {
      strongest.push(rVal);
      right--;
    }
  }

  const answers = [];
  for (let i = 0; i < k; i++) {
    answers.push(strongest[i]);
  }

  return answers;
};

const findMedian = (arr) => {
  const sorted = arr.sort((a, b) => a - b);

  return sorted[Math.floor((arr.length - 1) / 2)];
};
console.log(getStrongest((arr = [1, 2, 3, 4, 5]), (k = 2)));
console.log(getStrongest((arr = [1, 1, 3, 5, 5]), (k = 2)));
console.log(getStrongest((arr = [6, 7, 11, 7, 6, 8]), (k = 5)));
