/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
// [easy][string] 2255. Count Prefixes of a Given String

const isPrefix = (prefix, target) => {
  if (prefix.length > target.length) return false;

  for (let index = 0; index < prefix.length; index++) {
    if (prefix[index] !== target[index]) return false;
  }

  return true;
};
var countPrefixes = function (words, s) {
  let count = 0;

  for (let word of words) {
    if (isPrefix(word, s)) count++;
  }

  return count;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
