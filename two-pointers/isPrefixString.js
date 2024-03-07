/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */

// [easy][two-pointers] 1961. Check If String Is a Prefix of Array
var isPrefixString = function (s, words) {
  let prefix = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const temp = prefix + word;
    if (temp === s) {
      return true;
    }
    prefix += word;
  }

  return false;
};

console.log(
  isPrefixString(
    (s = "iloveleetcode"),
    (words = ["i", "love", "leetcode", "apples"])
  )
);
console.log(
  isPrefixString(
    (s = "iloveleetcode"),
    (words = ["apples", "i", "love", "leetcode"])
  )
);
