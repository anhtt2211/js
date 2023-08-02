/**
 * @param {string} moves
 * @return {boolean}
 */
// [easy][string] 657. Robot Return to Origin
var judgeCircle = function (moves) {
  let oX = 0,
    oY = 0;

  for (const move of moves) {
    switch (move) {
      case "U":
        oX += 1;
        break;
      case "D":
        oX -= 1;
        break;
      case "L":
        oY += 1;
        break;
      case "R":
        oY -= 1;
        break;
      default:
        break;
    }
  }

  if (oX === 0 && oY === 0) return true;
  return false;
};

console.log(judgeCircle((moves = "UD")));
console.log(judgeCircle((moves = "LL")));
