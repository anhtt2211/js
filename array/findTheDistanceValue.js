/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
// [easy][array] 1385. Find the Distance Value Between Two Arrays

var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    const numI = arr1[i];

    const valid = arr2.every((numJ) => Math.abs(numJ - numI) > d);

    if (valid === true) count++;
  }

  return count;
};

console.log(
  findTheDistanceValue((arr1 = [4, 5, 8]), (arr2 = [10, 9, 1, 8]), (d = 2))
);
console.log(
  findTheDistanceValue(
    (arr1 = [1, 4, 2, 3]),
    (arr2 = [-4, -3, 6, 10, 20, 30]),
    (d = 3)
  )
);
console.log(
  findTheDistanceValue(
    (arr1 = [2, 1, 100, 3]),
    (arr2 = [-5, -2, 10, -3, 7]),
    (d = 6)
  )
);
