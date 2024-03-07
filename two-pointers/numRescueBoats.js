/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
// [medium][two-pointers] 881. Boats to Save People

var numRescueBoats = function (people, limit) {
  let minBoat = 0;
  let left = 0,
    right = people.length - 1;

  const sorted = people.sort((a, b) => b - a);

  while (left <= right) {
    const lVal = sorted[left];
    const rVal = sorted[right];

    if (lVal + rVal <= limit) {
      left++;
      right--;
      minBoat++;
    } else {
      left++;
      minBoat++;
    }
  }

  return minBoat;
};

console.log(numRescueBoats([3, 8, 7, 1, 4], 9));
console.log(numRescueBoats((people = [1, 2]), (limit = 3)));
console.log(numRescueBoats((people = [3, 2, 2, 1]), (limit = 3)));
console.log(numRescueBoats((people = [3, 5, 3, 4]), (limit = 5)));
