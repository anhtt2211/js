/**
 * @param {string} s
 * @return {number}
 */
// [medium][sliding-window] 1358. Number of Substrings Containing All Three Characters
var numberOfSubstrings = function (s) {
  let left = 0,
    right = 0,
    end = s.length - 1;

  const map = {};

  let count = 0;

  while (right != s.length) {
    map[s[right]] = (map[s[right]] ?? 0) + 1;

    while (map["a"] && map["b"] && map["c"]) {
      count += 1 + end - right;

      map[s[left]] -= 1;
      left++;
    }
    right++;
  }

  return count;
};

console.log("====================================");
console.log(numberOfSubstrings((s = "abcabc")));
console.log("====================================");
