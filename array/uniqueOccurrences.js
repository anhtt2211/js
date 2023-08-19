/**
 * @param {number[]} arr
 * @return {boolean}
 */
// [easy][array] 1207. Unique Number of Occurrences

var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const setValues = new Set(map.values());

  return setValues.size === map.size;
};

console.log(uniqueOccurrences((arr = [1, 2, 2, 1, 1, 3])));
console.log(uniqueOccurrences((arr = [1, 2])));
console.log(uniqueOccurrences((arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])));
