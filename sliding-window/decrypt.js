/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
// [easy][sliding-window] 1652. Defuse the Bomb
var decrypt = function (code, k) {
  const result = new Array(code.length).fill(0);

  if (k === 0) return result;

  let start = 1,
    end = k,
    sum = 0;

  if (k < 0) {
    k = -k;
    start = code.length - k;
    end = code.length - 1;
  }

  for (let i = start; i <= end; i++) {
    sum += code[i];
  }

  for (let i = 0; i < code.length; i++) {
    result[i] = sum;

    const left = start++ % code.length;
    const right = ++end % code.length;
    sum -= code[left];
    sum += code[right];
  }

  return result;
};

console.log(decrypt((code = [5, 7, 1, 4]), (k = 3)));

console.log(decrypt((code = [1, 2, 3, 4]), (k = 0)));

console.log(decrypt((code = [2, 4, 9, 3]), (k = -2)));
