/**
 * @param {number[]} grades
 * @return {number}
 */
// [medium][binary-search] 2358. Maximum Number of Groups Entering a Competition
var maximumGroups = function (grades) {
  let left = 1;
  let right = grades.length;

  const check = (k) => {
    const totalGrades = Math.floor((k * (k + 1)) / 2);

    return totalGrades > grades.length;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left - 1;
};

const grades = [10, 6, 12, 7, 3, 5];
const output = maximumGroups(grades);
console.log("🚀 ~ output:", output);
