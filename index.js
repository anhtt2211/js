/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (string) => {
  // while (string.indexOf("  ") >= 0) {
  //   string = string.replace("  ", " ");
  // }

  // string = string.trim();

  // const arr = string.split(" ");
  // const lastWord = arr[arr.length - 1];

  // return lastWord.length;

  let trimmedString = string.trim();
  let arr = trimmedString.split(" ");
  return arr[arr.length - 1].length;
  // return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
};

const str = "   fly me   to   the moon  ";
const res = lengthOfLastWord(str);

console.log({ res });
