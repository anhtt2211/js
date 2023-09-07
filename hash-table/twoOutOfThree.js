/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
// [easy][hash-table] 2032. Two Out of Three

var twoOutOfThree = function (nums1, nums2, nums3) {
  let ans = new Set();

  let set1 = new Set();
  for (let n of nums1) {
    set1.add(n);
  }

  let set2 = new Set();
  for (let n of nums2) {
    set2.add(n);
    if (set1.has(n)) {
      ans.add(n);
    }
  }
  for (let n of nums3)
    if (set1.has(n) || set2.has(n)) {
      ans.add(n);
    }

  return [...ans];
};

console.log(
  twoOutOfThree((nums1 = [1, 1, 3, 2]), (nums2 = [2, 3]), (nums3 = [3]))
);
console.log(
  twoOutOfThree((nums1 = [3, 1]), (nums2 = [2, 3]), (nums3 = [1, 2]))
);
