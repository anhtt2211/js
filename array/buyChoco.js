/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
// [easy][array] 2706. Buy Two Chocolates

var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);

  let left = money - prices[0] - prices[1];

  return left >= 0 ? left : money;
};

console.log(buyChoco((prices = [1, 2, 2]), (money = 3)));
