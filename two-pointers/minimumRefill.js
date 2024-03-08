/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
// [medium][two-pointers] 2105. Watering Plants II
var minimumRefill = function (plants, capacityA, capacityB) {
  let count = 0;

  let capA = capacityA,
    capB = capacityB;

  let left = 0,
    right = plants.length - 1;

  while (left < right) {
    capA -= plants[left];
    capB -= plants[right];

    if (capA < 0) {
      count++;
      capA = capacityA - plants[left];
    }

    if (capB < 0) {
      count++;
      capB = capacityB - plants[right];
    }

    left++, right--;
  }

  if (left === right) {
    capA = Math.max(capA, capB);
    if (capA < plants[left]) count++;
  }

  return count;
};

// console.log(minimumRefill([1, 2], 2, 2));
console.log(minimumRefill([7, 7, 7, 7, 7, 7, 7], 8, 7));
// console.log(minimumRefill([1, 2, 4, 4, 5], 6, 5));
// console.log(
//   minimumRefill((plants = [2, 2, 3, 3]), (capacityA = 5), (capacityB = 5))
// );
// console.log(
//   minimumRefill((plants = [2, 2, 3, 3]), (capacityA = 3), (capacityB = 4))
// );
// console.log(minimumRefill((plants = [5]), (capacityA = 10), (capacityB = 8)));
