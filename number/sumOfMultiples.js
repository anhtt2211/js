/**
 * @param {number} n
 * @return {number}
 */
// [easy][number] 2652. Sum Multiples

var sumOfMultiples = function (n) {
  const nums = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      nums.push(i);
    }
  }

  return nums.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfMultiples(7));
console.log(sumOfMultiples(10));
