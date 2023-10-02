/**
 * @param {string} colors
 * @return {boolean}
 */
// [medium][string] 2038. Remove Colored Pieces if Both Neighbors are the Same Color

var winnerOfGame = function (colors) {
  let alice = 0;
  let bob = 0;

  for (let index = 1; index < colors.length - 1; index++) {
    const prevChar = colors[index - 1];
    const currentChar = colors[index];
    const nextChar = colors[index + 1];

    if (
      currentChar === prevChar &&
      currentChar === nextChar &&
      currentChar === "A"
    ) {
      alice++;
    } else if (
      currentChar === prevChar &&
      currentChar === nextChar &&
      currentChar === "B"
    ) {
      bob++;
    }
  }

  return alice > bob;
};

console.log(winnerOfGame((colors = "AAABABB")));
console.log(winnerOfGame((colors = "AA")));
console.log(winnerOfGame((colors = "ABBBBBBBAAA")));
