/**
 * @param {number} n
 * @return {number}
 */
// [easy][binary-search] 441. Arranging Coins

const calcCoinsRequired = (r) => {
  return Math.floor((r * (r + 1)) / 2);
};

var arrangeCoins = function (n) {
  let left = 1;
  let right = n;
  let ans = 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const coinsRequired = calcCoinsRequired(mid);

    if (coinsRequired === n) {
      return mid;
    } else if (coinsRequired < n) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

const n = 5;
const output = arrangeCoins(n);
console.log("🚀 ~ output:", output);
