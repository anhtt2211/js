/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  if (n % 4 === 0) return false;
  else return true;
};

console.log(canWinNim((n = 4)));
console.log(canWinNim((n = 1)));
console.log(canWinNim((n = 2)));
