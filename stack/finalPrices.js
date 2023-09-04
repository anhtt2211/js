/**
 * @param {number[]} prices
 * @return {number[]}
 */
// [easy][stack] 1475. Final Prices With a Special Discount in a Shop

var finalPrices = function (prices) {
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    while (stack.length && price <= prices[stack[stack.length - 1]]) {
      const index = stack.pop();
      prices[index] = prices[index] - price;
    }
    stack.push(i);
  }

  return prices;
};

console.log(finalPrices((prices = [8, 4, 6, 2, 3])));
console.log(finalPrices((prices = [1, 2, 3, 4, 5])));
console.log(finalPrices((prices = [10, 1, 1, 6])));
