/**
 * @param {number} n
 * @return {number}
 */
// [easy][dp] 509. Fibonacci Number

var fib = function (n) {
  if (n < 2) {
    return n;
  }
  if (n === 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
