/**
 * @param {string} s
 * @return {boolean}
 */
// [easy][string] 1941. Check if All Characters Have Equal Number of Occurrences

var areOccurrencesEqual = function (s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  const values = Array.from(map.values());
  const firstValue = values[0];

  for (const value of values) {
    if (firstValue !== value) {
      return false;
    }
  }

  return true;
};

console.log(areOccurrencesEqual((s = "abacbc")));
console.log(areOccurrencesEqual((s = "aaabb")));
