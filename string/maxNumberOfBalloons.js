/**
 * @param {string} text
 * @return {number}
 */
// [easy][string] 1189. Maximum Number of Balloons

var maxNumberOfBalloons = function (text) {
  const dict = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  };

  const map = {};

  for (const char of text) {
    map[char] = (map[char] || 0) + 1;
  }

  const bCount = map["b"] || 0;
  const aCount = map["a"] || 0;
  const lCount = Math.floor(map["l"] / 2) || 0;
  const oCount = Math.floor(map["o"] / 2) || 0;
  const nCount = map["n"] || 0;

  return Math.min(aCount, bCount, lCount, oCount, nCount);
};

console.log(maxNumberOfBalloons((text = "nlaebolko")));
console.log(maxNumberOfBalloons((text = "loonbalxballpoon")));
console.log(maxNumberOfBalloons((text = "leetcode")));
