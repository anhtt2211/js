/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regexPattern = /[^A-Za-z0-9]/g;

  let newStr = s.replace(regexPattern, "").toLowerCase();

  for (let index = 0; index < newStr.length; index++) {
    let left = newStr[index];
    let right = newStr[newStr.length - 1 - index];
    if (left !== right) {
      return false;
    }
  }

  return true;
};

const str = "A man, a plan, a canal: Panama";

console.log(isPalindrome(str));
