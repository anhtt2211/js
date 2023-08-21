/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// [easy][array] 1684. Count the Number of Consistent Strings

var countConsistentStrings = function (allowed, words) {
  const allowedSet = new Set(allowed);

  let count = 0;

  for (const word of words) {
    for (const char of word) {
      if (!allowedSet.has(char)) {
        count++;
        break;
      }
    }
  }

  return words.length - count;
};

console.log(
  countConsistentStrings("fstqyienx", [
    "n",
    "eeitfns",
    "eqqqsfs",
    "i",
    "feniqis",
    "lhoa",
    "yqyitei",
    "sqtn",
    "kug",
    "z",
    "neqqis",
  ])
);

// console.log(
//   countConsistentStrings(
//     (allowed = "ab"),
//     (words = ["ad", "bd", "aaab", "baa", "badab"])
//   )
// );
// console.log(
//   countConsistentStrings(
//     (allowed = "abc"),
//     (words = ["a", "b", "c", "ab", "ac", "bc", "abc"])
//   )
// );
