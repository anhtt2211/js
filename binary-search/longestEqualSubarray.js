/**
 * @param {number[][]} grid
 * @return {number}
 */
// [easy][binary-search] 1351. Count Negative Numbers in a Sorted Matrix
var countNegatives = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];

    const target = 0;
    const uIndex = findLastPos(row, target);
    if (uIndex === -1) {
      count += row.length;
    } else {
      count += row.length - uIndex - 1;
    }
  }

  return count;
};

const findLastPos = (array, target) => {
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
  countNegatives(
    (grid = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ])
  )
);
console.log(
  countNegatives(
    (grid = [
      [3, 2],
      [1, 0],
    ])
  )
);
