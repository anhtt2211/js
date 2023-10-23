/**
 * @param {string[]} operations
 * @return {number}
 */
// [easy][array] 682. Baseball Game

var calPoints = function (operations) {
  const record = [];

  for (const op of operations) {
    switch (op) {
      case "C":
        record.pop();
        break;
      case "D":
        record.push(record[record.length - 1] * 2);
        break;
      case "+":
        record.push(record[record.length - 1] + record[record.length - 2]);
        break;
      default:
        record.push(Number(op));
    }
  }

  return record.reduce((acc, cur) => acc + cur, 0);
};

console.log(calPoints((ops = ["5", "-2", "4", "C", "D", "9", "+", "+"])));
