/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
// [easy][stack] 1700. Number of Students Unable to Eat Lunch

var countStudents = function (students, sandwiches) {
  let i = 0;
  while (i < students.length) {
    const student = students[i];
    const sandw = sandwiches[i];

    if (student !== sandw) {
      students.shift();
      students.push(student);

      if (students.every((student) => student !== sandw)) {
        break;
      }
    } else {
      students.shift();
      sandwiches.shift();
    }
  }

  return students.length;
};

console.log(
  countStudents((students = [1, 1, 0, 0]), (sandwiches = [0, 1, 0, 1]))
);
console.log(
  countStudents(
    (students = [1, 1, 1, 0, 0, 1]),
    (sandwiches = [1, 0, 0, 0, 1, 1])
  )
);
