/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// [easy][hash-table] 1122. Relative Sort Array

var relativeSortArray = function (arr1, arr2) {
  let result = [];

  const arr1Map = new Map();
  const arr2Map = new Map();

  for (let i = 0; i < arr2.length; i++) {
    arr2Map.set(arr2[i], 0);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr2Map.has(arr1[i])) {
      arr2Map.set(arr1[i], arr2Map.get(arr1[i]) + 1);
    } else {
      if (arr1Map.has(arr1[i])) {
        arr1Map.set(arr1[i], arr1Map.get(arr1[i]) + 1);
      } else {
        arr1Map.set(arr1[i], 1);
      }
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2Map.get(arr2[i]); j++) {
      result.push(arr2[i]);
    }
  }

  let arr1Keys = Array.from(arr1Map.keys());
  arr1Keys.sort((a, b) => a - b);

  for (let i = 0; i < arr1Keys.length; i++) {
    for (let j = 0; j < arr1Map.get(arr1Keys[i]); j++) {
      result.push(arr1Keys[i]);
    }
  }

  return result;
};

console.log(
  relativeSortArray(
    (arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]),
    (arr2 = [2, 1, 4, 3, 9, 6])
  )
);
