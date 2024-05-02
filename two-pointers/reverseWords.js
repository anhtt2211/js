/**
 * @param {string} str
 * @return {string}
 */
// [medium][two-pointers] 151. Reverse Words in a String
var reverseWords = function (str) {
  str = str.trim();
  const strArr = str.split(" ").filter((_) => _ !== "");

  let left = 0,
    right = strArr.length - 1;
  let ans = [];

  while (left <= right) {
    ans[left] = strArr[right];
    ans[right] = strArr[left];

    left++, right--;
  }

  return ans.join(" ");
};

console.log("====================================");
console.log(reverseWords((s = "a good   example")));
console.log("====================================");
