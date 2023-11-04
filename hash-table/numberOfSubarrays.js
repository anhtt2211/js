/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// [medium][hash-table] 1248. Count Number of Nice Subarrays
var numberOfSubarrays = function (nums, k) {
  let count = 0;
  let odd = 0;
  const map = new Map();
  map.set(0, 1);

  for (const num of nums) {
    if (num % 2 === 1) odd++;

    if (map.has(odd - k)) {
      count += map.get(odd - k);
    }

    if (map.has(odd)) {
      map.set(odd, map.get(odd) + 1);
    } else {
      map.set(odd, 1);
    }
  }

  return count;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
