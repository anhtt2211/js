/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
// [medium][hash-table] 791. Custom Sort String

var customSortString = function (order, s) {
  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  const arr = s.split("");

  arr.sort((a, b) => {
    if (map.has(a) && map.has(b)) {
      return map.get(a) - map.get(b);
    } else if (map.has(a)) {
      return -1;
    } else if (map.has(b)) {
      return 1;
    } else {
      return 0;
    }
  });

  return arr.join("");
};

console.log(customSortString("cba", "abcd"));
