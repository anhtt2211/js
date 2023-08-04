/**
 * @param {number[]} prices
 * @return {number}
 */
// [medium][array] 122. Best Time to Buy and Sell Stock II

/** Solution 1 */
var maxProfit = function (prices) {
  const profits = [];
  for (let i = 0; i < prices.length; i++) {
    const buy = prices[i];
    const sell = prices[i + 1];

    const profit = sell - buy;

    if (buy < sell) {
      profits.push(profit);
    }
  }

  return profits.reduce((acc, current) => acc + current, 0);
};

console.log(maxProfit((prices = [7, 1, 5, 3, 4, 9, 6, 4])));
// console.log(maxProfit((prices = [7, 6, 4, 3, 1])));
// console.log(maxProfit((prices = [1, 2, 3, 4, 5])));
