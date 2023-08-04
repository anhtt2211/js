/**
 * @param {number[]} prices
 * @return {number}
 */
// [hard][array] 123. Best Time to Buy and Sell Stock II

/** Solution 1 */
var findMaxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minPrice;

    if (maxProfit < profit) {
      maxProfit = profit;
    }

    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
};

var maxProfit = function (prices) {
  const maxProfit = findMaxProfit(prices);

  let result = 0;
  let count = 0;

  for (let i = 0; i < prices.length; i++) {
    const buyOn = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      const sellOn = prices[j];
      const profit = sellOn - buyOn;

      if (profit === maxProfit && count < 2) {
        result += profit;
        count++;
      }
    }
  }

  // for (let i = 0; i < prices.length; i++) {
  //   const buy = prices[i];
  //   const sell = prices[i + 1];
  //   const profit = sell - buy;

  //   if (profit === maxProfit && count < 2) {
  //     result += profit;
  //     count++;
  //   }
  // }

  return result;
};

// console.log(maxProfit((prices = [1, 2, 3, 4, 5])));
console.log(maxProfit((prices = [3, 3, 5, 0, 0, 3, 1, 4])));
