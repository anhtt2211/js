/**
 * @param {number[]} prices
 * @return {number[]}
 */
// [easy][stack] 1475. Final Prices With a Special Discount in a Shop

var finalPrices = function (prices) {
  const result = [];
  const stack = [];
  const lessMap = new Map();

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    while (stack.length && price <= stack[stack.length - 1][0]) {
      lessMap.set(stack.pop()[1], price);
    }
    stack.push([price, i]);
  }

  for (let i = 0; i < prices.length; i++) {
    const finalPrice = prices[i] - (lessMap.get(i) || 0);
    result.push(finalPrice);
  }

  return result;
};

console.log(finalPrices((prices = [8, 4, 6, 2, 3])));
console.log(finalPrices((prices = [1, 2, 3, 4, 5])));
console.log(finalPrices((prices = [10, 1, 1, 6])));
