/**
 * @param {string} str
 * @return {string}
 */
// [easy][two-pointers] 345. Reverse Vowels of a String
var reverseVowels = function (str) {
  const hash = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let ans = [];
  let left = 0,
    right = str.length - 1;

  while (left <= right) {
    if (!hash.has(str[left])) {
      ans[left] = str[left];
      left++;
    }
    if (!hash.has(str[right])) {
      ans[right] = str[right];
      right--;
    }

    if (hash.has(str[left]) && hash.has(str[right])) {
      ans[left] = str[right];
      ans[right] = str[left];

      left++;
      right--;
    }
  }

  return ans.join("");
};

console.log(reverseVowels((s = " ")));
console.log(reverseVowels("aA"));
console.log(reverseVowels((s = "hello")));
console.log(reverseVowels((s = "leetcode")));
