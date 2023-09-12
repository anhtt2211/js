/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
// [medium][array] 1833. Maximum Ice Cream Bars

var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);

  let count = 0;
  for (const cost of costs) {
    if (coins >= cost) {
      coins -= cost;
      count++;
    }
  }

  return count;
};

console.log(maxIceCream((costs = [1, 6, 3, 1, 2, 5]), (coins = 20)));
