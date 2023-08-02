/**
 * @param {string} string
 * @return {boolean}
 */
// [easy][string] 680. Valid Palindrome II
const isPalindrome = (string, i, j) => {
  while (i <= j) {
    if (string[i] !== string[j]) {
      return false;
    }
    i++, j--;
  }

  return true;
};

var validPalindrome = function (string) {
  let i = 0,
    j = string.length - 1;

  while (i <= j) {
    if (string[i] === string[j]) {
      i++, j--;
    } else {
      return isPalindrome(string, i + 1, j) || isPalindrome(string, i, j - 1);
    }
  }

  return true;
};

console.log(validPalindrome((s = "eeccccbebaeeabebccceea")));
console.log(validPalindrome((s = "eedede")));
console.log(validPalindrome((s = "cbbcc")));
console.log(
  validPalindrome(
    (s =
      "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")
  )
);
