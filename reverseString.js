/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (string) {
  const length = string.length;

  let left = 0,
    right = length - 1;

  while (left <= right) {
    [string[left], string[right]] = [string[right], string[left]];

    left++;
    right--;
  }
};

// const string1 = ["h", "e", "l", "l", "o"];
// const result1 = reverseString(string1);
// console.log({ result1, string1 });

const string2 = ["H", "a", "n", "n", "a", "h"];
const result2 = reverseString(string2);
console.log({ result2, string2 });
