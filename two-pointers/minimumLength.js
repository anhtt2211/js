/**
 * @param {string} string
 * @return {number}
 */
// [medium][two-pointers] 1750. Minimum Length of String After Deleting Similar Ends

var minimumLength = function (string) {
  if (string.length === 1) return 1;

  let minStr = "";
  let left = 0,
    right = string.length - 1;

  while (left <= right) {
    const lChar = string[left];
    const rChar = string[right];

    if (left === right) {
      return 1;
    }

    if (lChar === rChar) {
      left++, right--;

      while (string[left] === string[left - 1]) {
        left++;
      }
      while (string[right] === string[right + 1]) {
        right--;
      }
    } else {
      minStr = string.substring(left, right + 1);
      break;
    }
  }

  return minStr.length;
};

console.log(
  minimumLength("bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb")
);
console.log(
  minimumLength(
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbacccabbabccaccbacaaccacacccaccbbbacaabbccbbcbcbcacacccccccbcbbabccaacaabacbbaccccbabbcbccccaccacaccbcbbcbcccabaaaabbbbbbbbbbbbbbb"
  )
);
console.log(minimumLength((string = "cabaabac")));
console.log(minimumLength((string = "aabccabba")));
console.log(minimumLength((s = "ca")));
