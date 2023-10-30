/**
 * @param {number[]} arr
 * @return {number}
 */
// [easy][hash-table] 1394. Find Lucky Integer in an Array

var findLucky = function (arr) {
  let luckyNum = -1;
  const map = new Map();

  for (const num of arr) {
    map.set(num, map.get(num) + 1 || 1);
  }

  for (const [key, value] of map) {
    if (key === value && luckyNum < key) {
      luckyNum = key;
    }
  }

  return luckyNum;
};

console.log(findLucky([2, 2, 3, 4]));
