/**
 * @param {string[]} words
 * @return {number}
 */
// [easy][string] 2506. Count Pairs Of Similar Strings

const similarPairs = (words) => {
  const freq = new Map();

  let count = 0;

  for (const word of words) {
    const string = [...new Set(word)].sort().join("");

    const f = freq.get(string) || 0;
    count += f;

    freq.set(string, f + 1);
  }
  return count;
};

console.log(similarPairs(["aabb", "ab", "ba"]));
