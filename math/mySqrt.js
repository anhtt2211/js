/**
 * @param {number} x
 * @return {number}
 */
// [easy][math]  69. Sqrt(x)

var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;

  for (let i = 0; i < x + 1; i++) {
    if (i * i > x) return i - 1;
  }
};

console.log(mySqrt(1));
console.log(mySqrt(4));
console.log(mySqrt(8));
