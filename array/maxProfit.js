/**
 * @param {number[]} prices
 * @return {number}
 */
// [easy][array] 121. Best Time to Buy and Sell Stock

/** Solution 1 has time out */
// var maxProfit = function (prices) {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     let buyOn = prices[i];

//     for (let j = i + 1; j < prices.length; j++) {
//       let sellOn = prices[j];
//       let profit = sellOn - buyOn;

//       if (maxProfit < profit) {
//         maxProfit = profit;
//       }
//     }
//   }

//   return maxProfit;
// };

/** Solution 2 */
var maxProfit = function (prices) {
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

console.log(maxProfit((prices = [7, 1, 5, 3, 6, 4])));
console.log(maxProfit((prices = [7, 6, 4, 3, 1])));
