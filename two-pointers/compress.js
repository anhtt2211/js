/**
 * @param {character[]} chars
 * @return {number}
 */
// [medium][two-pointers] 443. String Compression
var compress = function (chars) {
  if (chars.length === 1) {
    return 1;
  }

  let ans = "";

  let left = 0,
    right = 1;
  let count = 1;

  while (left < chars.length) {
    if (chars[left] === chars[right]) {
      right++;
      count++;
    } else {
      ans = ans.concat(`${chars[left]}${count !== 1 ? count : ""}`);

      left = right;
      right = left + 1;
      count = 1;
    }
  }

  for (let i = 0; i < chars.length; i++) {
    chars[i] = ans[i];
  }

  return ans.length;
};

console.log(compress((chars = ["a", "b", "c"])));
console.log(compress((chars = ["a", "a", "b", "b", "c", "c", "c"])));
console.log(compress((chars = ["a"])));
console.log(
  compress(
    (chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
  )
);
