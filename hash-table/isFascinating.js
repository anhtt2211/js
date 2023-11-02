/**
 * @param {number} n
 * @return {boolean}
 */
// [easy][hash-table] 2729. Check if The Number is Fascinating

var isFascinating = function (n) {
  let str = n.toString() + (n * 2).toString() + (n * 3).toString();

  let set = new Set(str);

  if (set.size !== str.length) return false;
  if (set.has("0")) return false;

  for (let i = 1; i <= 9; i++) {
    if (!set.has(i.toString())) return false;
  }

  return true;
};

console.log(isFascinating(195));
