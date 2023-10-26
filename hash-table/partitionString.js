/**
 * @param {string} s
 * @return {number}
 */
// [hash-table][medium] 2405. Optimal Partition of String

var partitionString = function (s) {
  let result = 1;
  let marker = 0;
  let dist = {};

  while (marker < s.length) {
    let char = s[marker];
    if (char in dist) {
      dist = {};
      result++;
    }
    dist[char] = 1;
    marker++;
  }

  return result;
};

console.log(partitionString((s = "ababcbacadefegdehijhklij")));
