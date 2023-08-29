/**
 * @param {string[]} words
 * @return {string}
 */
// [easy][two-pointers] 2108. Find First Palindromic String in the Array

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
var firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }

  return "";
};

console.log(firstPalindrome((words = ["notapalindrome", "racecar"])));
console.log(firstPalindrome((words = ["def", "ghi"])));
