/**
 * @param {string} str
 * @param {character} char
 * @return {number[]}
 */
// [easy][two-pointers] 821. Shortest Distance to a Character

var shortestToChar = function (str, char) {
  const result = [];

  const appears = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      appears.push(i);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      result.push(0);
    } else {
      const min = Math.min(
        ...appears.map((position) => Math.abs(position - i))
      );
      result.push(min);
    }
  }

  return result;
};

console.log(shortestToChar((str = "loveleetcode"), (char = "e")));
/**
 * char: e appears 3, 5 , 6, 11
 * loop str
 * l: 0 => min (appears - index.0) = 3
 * o: 1 => min .... = 2
 * v: 2 => min .... = 1
 * e: 3 => min .... = 0
 * l: 4 => min .... = 1
 * e: 5 => min .... = 0
 * e: 6 => min .... = 0
 * t: 7 => min .... = 1
 * c: 8 => min .... = 2
 * o: 9 => min .... = 2
 * d: 10 => min .... = 1
 * e: 11 => min .... = 0
 */
console.log(shortestToChar((str = "aaab"), (char = "b")));
