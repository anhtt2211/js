/**
 * @param {string} num
 * @return {boolean}
 */
// [easy][hash-table] 2283. Check if Number Has Equal Digit Count and Digit Value

var digitCount = function (num) {
  const map = new Map();

  for (const char of num) {
    const ch = parseInt(char);
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let i = 0; i < num.length; i++) {
    let count;
    if (map.has(i)) {
      count = map.get(i);
    } else {
      count = 0;
    }

    const ele = parseInt(num[i]);
    if (ele !== count) {
      return false;
    }
  }

  return true;
};

console.log(digitCount((num = "1210")));
console.log(digitCount((num = "030")));
