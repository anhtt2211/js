/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [easy][hash-table] 2206. Divide Array Into Equal Pairs

var divideArray = function (nums) {
  const map = new Map();

  for (const number of nums) {
    map.set(number, (map.get(number) || 0) + 1);
  }

  for (const [_key, value] of map) {
    if (value % 2 !== 0) {
      return false;
    }
  }

  return true;
};

console.log(divideArray((nums = [3, 2, 3, 2, 2, 2])));
console.log(divideArray((nums = [1, 2, 3, 4])));
