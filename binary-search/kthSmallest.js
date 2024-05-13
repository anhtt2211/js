/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// [medium][binary-search] 378. Kth Smallest Element in a Sorted Matrix
var kthSmallest = function (matrix, k) {
  const arrFlat = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      arrFlat.push(matrix[i][j]);
    }
  }

  arrFlat.sort((a, b) => a - b);

  return arrFlat[k - 1];
};

console.log(
  kthSmallest(
    (matrix = [
      [1, 5, 9, 10],
      [10, 11, 14, 15],
      [12, 13, 15, 19],
      [13, 15, 17, 19],
    ]),
    (k = 11)
  )
);
// 1 5 9 10 11 11 12 13 13 14 15 15 15 17 19 19
console.log(kthSmallest((matrix = [[-5]]), (k = 1)));
