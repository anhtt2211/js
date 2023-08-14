/**
 * @param {string} s
 * @return {string}
 */
// [easy][string] 409. Longest Palindrome

var longestPalindrome = function (string) {
  let result = 0;
  const hash = {};

  for (const char of string) {
    hash[char] = (hash[char] || 0) + 1;

    if (hash[char] % 2 === 0) {
      result += 2;
    }
  }

  return string.length > result ? result + 1 : result;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
