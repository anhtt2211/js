/**
 * @param {string} s
 * @return {string}
 */

//  c b a b d
//  0 1 2 3 4
var longestPalindrome = function (string) {
  let result = "";
  const length = string.length - 1;

  for (let i = 0; i <= length; i++) {
    const j = length - i;
    const left = string[i];
    const right = string[j];

    if (length === 1 && left !== right) {
      return left;
    }

    if (left === right) {
      result = result.concat(left);
    }
  }

  return result;
};

// const string1 = "accd";
// const result1 = longestPalindrome(string1); // result = cc
// console.log({ result1 });

// const string2 = "acecd";
// const result2 = longestPalindrome(string2); // result = cec
// console.log({ result2 });

// const string3 = "ac";
// const result3 = longestPalindrome(string3); // result = cec
// console.log({ result3 });

const string4 = "accc";
const result4 = longestPalindrome(string4); // result = cec
console.log({ result4 });

// NOT COMPLETE
