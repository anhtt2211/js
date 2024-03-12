/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// [easy][binary-search] 1337. The K Weakest Rows in a Matrix
var kWeakestRows = function (mat, k) {
  const weakestRows = [];

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];

    const uIndex = upperBound(row, 1);
    weakestRows.push({
      index: i,
      value: uIndex + 1,
    });
  }

  weakestRows.sort((a, b) => a.value - b.value);

  const answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(weakestRows[i].index);
  }

  return answer;
};

const upperBound = (array, target) => {
  let left = 0,
    right = array.length - 1,
    ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] >= target) {
      ans = mid;
      left = mid + 1;
    } else if (array[mid] < target) {
      right = mid - 1;
    }
  }

  return ans;
};

console.log(
  kWeakestRows(
    (mat = [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ]),
    (k = 3)
  )
);
console.log(
  kWeakestRows(
    (mat = [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ]),
    (k = 2)
  )
);
