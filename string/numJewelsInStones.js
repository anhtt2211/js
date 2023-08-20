/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// [easy][string] 771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  const map = new Map();
  let count = 0;
  for (const char of stones) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of jewels) {
    if (map.has(char)) {
      count += map.get(char);
    }
  }

  return count;
};

console.log(numJewelsInStones((jewels = "aA"), (stones = "aAAbbbb")));
console.log(numJewelsInStones((jewels = "z"), (stones = "ZZ")));
