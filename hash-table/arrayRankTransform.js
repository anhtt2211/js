/**
 * @param {number[]} arr
 * @return {number[]}
 */
// [easy][hash-table] 1331. Rank Transform of an Array

var arrayRankTransform = function (arr) {
  let sorted = [...arr].sort((a, b) => a - b);
  const map = new Map();
  let rank = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      map.set(sorted[i], rank);
      rank++;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(map.get(arr[i]));
  }

  return result;
};

console.log(arrayRankTransform([40, 10, 20, 30]));
