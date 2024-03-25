/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
// [easy][sliding-window] 2269. Find the K-Beauty of a Number
var divisorSubstrings = function (num, k) {
  let count = 0;
  const numStr = num.toString();

  for (let i = 0; i + k <= numStr.length; i++) {
    const element = parseInt(numStr.substring(i, i + k));

    if (element !== 0 && num % element === 0) {
      count++;
    }
  }

  return count;
};

console.log(divisorSubstrings((num = 240), (k = 2)));
console.log(divisorSubstrings((num = 430043), (k = 2)));
console.log(divisorSubstrings(30003, 3));
